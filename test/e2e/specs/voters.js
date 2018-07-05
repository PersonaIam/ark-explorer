// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

// Disable eslint for .to.not.be.present statements
/* eslint-disable no-unused-expressions */

module.exports = {
  // Default test, which also serves as setup for correct url
  'voters page should be available': function (browser) {
    const devServer = browser.globals.devServerURL + '/#/wallets/PCrVaimPEQzY49PvL8TbYUH1EHFdeeYoEB/voters/1'

    browser
      .url(devServer)
      .waitForElementVisible('main.theme-light')
      .waitForElementVisible('h1')
      .assert.containsText('h1', 'Voters')
  },

  'it should be possible to navigate to the next page and back': function (browser) {
    browser
      .waitForElementVisible('div.table-component')
      .assert.urlContains('/voters/1')
      .useXpath().expect.element("//button[contains(., 'Previous')]").to.not.be.visible
    browser
      .expect.element("//button[contains(., 'Next')]").to.be.visible
    browser
      .click("//button[contains(., 'Next')]")
      .pause(500)
    browser
      .assert.urlContains('/voters/2')
      .click("//button[contains(., 'Previous')]")
      .pause(500)
    browser
      .assert.urlContains('/voters/1')
  },

  'it should be possible to sort the voters': function (browser) {
    browser
      .useCss()
      .waitForElementVisible('div.table-component')
      .useXpath().expect.element("//th[contains(.,'Address')]").to.be.present
    browser
      .assert.cssClassPresent("//th[contains(.,'Address')]", 'table-component__th--sort')
      .assert.cssClassNotPresent("//th[contains(.,'Address')]", 'table-component__th--sort-asc')
      .assert.cssClassNotPresent("//th[contains(.,'Address')]", 'table-component__th--sort-desc')
    browser
      .click("//th[contains(.,'Address')]")
      .pause(500)
    browser.assert.cssClassPresent("//th[contains(.,'Address')]", 'table-component__th--sort-asc')
    browser
      .click("//th[contains(.,'Address')]")
      .pause(500)
    browser.assert.cssClassPresent("//th[contains(.,'Address')]", 'table-component__th--sort-desc')
  },

  'it should contain 25 wallets on a page': function (browser) {
    browser
      .useCss()
      .expect.element('div.hidden.sm\\:block').to.be.present
    browser
      .elements('css selector', 'div.hidden.sm\\:block div.table-component tbody.table-component__table__body tr', function(result) {
        browser.assert.equal(25, result.value.length)
      })
  },

  'it should be possible to click on a wallet address': function (browser) {
    browser
      .useXpath()
      .waitForElementVisible("//tbody[contains(@class, 'table-component__table__body')]//tr[1]//td[2]//a[1]")
      .click("//tbody[contains(@class, 'table-component__table__body')]//tr[1]//td[2]//a[1]")
      .pause(500)
    browser
      .useXpath()
      .waitForElementVisible("//h1[contains(.,'Wallet Summary')]")
      .assert.urlContains('/wallets/')
      .end()
  }
}
