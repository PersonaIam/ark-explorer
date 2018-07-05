// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

// Disable eslint for .to.not.be.present statements
/* eslint-disable no-unused-expressions */

module.exports = {
  // Default test, which also serves as setup for correct url
  'block detail page should be available': function (browser) {
    const devServer = browser.globals.devServerURL + '/#/block/5504183060584887263'

    browser
      .url(devServer)
      .waitForElementVisible('main.theme-light')
      .waitForElementVisible('h1')
      .assert.containsText('h1', 'Block')
  },

  'it should be possible to navigate to next block and back': function(browser) {
    browser
      .assert.containsText('div.semibold.truncate span', '5504183060584887263')
      .useXpath().click("//button[contains(., 'Next')]")
      .waitForElementVisible("//div[contains(@class, 'semibold') and contains(@class, 'truncate')]/span[contains(text(), '11885840042640185724')]")
    browser
      .useXpath().click("//button[contains(., 'Previous')]")
      .waitForElementVisible("//div[contains(@class, 'semibold') and contains(@class, 'truncate')]/span[contains(text(), '5504183060584887263')]")
  },

  'it should not contain a transaction table if block has no transactions': function(browser) {
    browser
      .useXpath().assert.containsText("//div[.='Transactions']/following-sibling::div[1]", '0')
    browser
      .useCss().expect.element('h2').to.not.be.present
    browser
      .expect.element('div.table-component').to.not.be.present
    browser.end()
  },

  'it should contain a transaction table if block has 1 or more transactions': function(browser) {
    browser
      .url(browser.globals.devServerURL + '/#/block/11547148810010064379')
      .pause(500)
      .waitForElementVisible('div.table-component')
      .useXpath().assert.containsText("//div[.='Transactions']/following-sibling::div[1]", '7')
      .useCss().expect.element('h2').to.be.present
    browser
      .expect.element('div.table-component').to.be.present
    browser
      .elements('css selector', '.table-component__table__body tr', function(result) {
        browser.assert.equal(7, result.value.length)
      })
  },

  'it should be possible to copy the block ID': function(browser) {
    browser
      .assert.cssClassNotPresent('img.block', 'animated')
    browser
      .click('button.has-tooltip')
      .waitForElementVisible('img.block.animated')
  },

  'it should be possible to click on the delegate': function(browser) {
    browser
      .waitForElementVisible('div.list-row a')
      .click('div.list-row a')
      .useXpath().waitForElementVisible("//h1[text() = 'Wallet Summary']")
      .assert.urlContains('wallets/PCrVaimPEQzY49PvL8TbYUH1EHFdeeYoEB')
      .end()
  }
}
