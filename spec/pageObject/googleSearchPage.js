"use strict"

let webdriver = require('selenium-webdriver')
let BasePage = require('.//basePage.js')

class googleSearchPage extends BasePage {

  constructor (driver) {
    super(driver, 'http://google.by')
    this.searchField = webdriver.By.name('q')
  };

  async searchQuery (text) {
    return await this.driver.typeAndSubmit(this.searchField, text)
  };

}

module.exports = googleSearchPage