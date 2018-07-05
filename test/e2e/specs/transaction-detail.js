// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

// Disable eslint for .to.not.be.present statements
/* eslint-disable no-unused-expressions */

module.exports = {
  // Default test, which also serves as setup for correct url
  'transaction detail page should be available': function (browser) {
    const devServer = browser.globals.devServerURL + '/#/transaction/2ca0cb1c86eae8cbcfbc7d0be6f99c2dcdd215ce5e8d53506420c75ebf1e5bc2'

    browser
      .url(devServer)
      .waitForElementVisible('main.theme-light')
      .waitForElementVisible('h1')
      .assert.containsText('h1', 'Transaction')
  },

  'it should be possible to copy the transaction ID': function(browser) {
    browser
      .waitForElementVisible('img.block')
      .assert.cssClassNotPresent('img.block', 'animated')
    browser
      .click('button.has-tooltip')
      .waitForElementVisible('img.block.animated')
  },

  'it should be possible to click on the sender': function(browser) {
    const devServer = browser.globals.devServerURL + '/#/transaction/2ca0cb1c86eae8cbcfbc7d0be6f99c2dcdd215ce5e8d53506420c75ebf1e5bc2'

    browser
      .url(devServer)
      .useCss()
      .waitForElementVisible('main.theme-light')
      .waitForElementVisible('h1')
    browser
      .useXpath()
      .click("//div/div[contains(@class, 'list-row-border-b')][1]//a[1]")
      .pause(500)
    browser
      .waitForElementVisible("//h1[text() = 'Wallet Summary']")
      .assert.urlContains('wallets/PAWrTq8BhidJHGQYzfEAEWbvh4h9mi5D1U')
      .end()
  },

  'it should be possible to click on the recipient': function (browser) {
    const devServer = browser.globals.devServerURL + '/#/transaction/2ca0cb1c86eae8cbcfbc7d0be6f99c2dcdd215ce5e8d53506420c75ebf1e5bc2'

    browser
      .url(devServer)
      .useCss()
      .waitForElementVisible('main.theme-light')
      .waitForElementVisible('h1')
    browser
      .useXpath()
      .click("//div/div[contains(@class, 'list-row-border-b')][2]//a[1]")
      .pause(500)
    browser
      .waitForElementVisible("//h1[text() = 'Wallet Summary']")
      .assert.urlContains('wallets/PKW4qCmoSAXqZ7RT85evygww9Uh8e8Fk16')
      .end()
  },

  'it should be possible to click on the transaction block id': function(browser) {
    const devServer = browser.globals.devServerURL + '/#/transaction/2ca0cb1c86eae8cbcfbc7d0be6f99c2dcdd215ce5e8d53506420c75ebf1e5bc2'

    browser
      .url(devServer)
      .useCss()
      .waitForElementVisible('main.theme-light')
      .waitForElementVisible('h1')
    browser
      .useXpath()
      .click("//div/div[contains(@class, 'list-row')][8]//a[1]")
      .pause(500)
    browser
      .waitForElementVisible("//h1[text() = 'Block']")
      .assert.urlContains('block/11547148810010064379')
      .end()
  }
}
