module.exports = {
  'Demo Testing' : function (browser) {
    browser
      .url('https://dev-c9portal.xhoot.com/c9portal/')
      .waitForElementVisible('h2.form-signin-heading', 3000)
      .setValue('input[name=username]', 'ucheonwudiwe')
      .setValue('input[name=password]', 'Password1960')
      .click('button[type=submit]')
      .waitForElementVisible('div.modal-dialog', 5000)
      .pause(1000)
      .assert.containsText('div.modal-header', '**WARNING**')
      .waitForElementVisible('button.btn.btn-success',3000)
      .useXpath()
      .click("(//button[@type='button'])[4]")
      .useCss()
      .assert.containsText('body', 'Welcome to the Cloud9 Portal')
      .click('i.fa.fa-sitemap')
      .assert.urlContains('#/firms')
      .useXpath()
      .waitForElementVisible(".//*[@id='scrollable-area']/table/thead[1]/tr[2]/th[1]/div/input",3000)
      .pause(1000)
      .setValue(".//*[@id='scrollable-area']/table/thead[1]/tr[2]/th[1]/div/input",'Test Firm 20160223135035248')
      
      //.waitForElementVisible(".//*[@id='scrollable-area']/table/tbody/tr/td[1]",3000)
      //.waitForElementVisible('/html/body/div[1]/div/div[2]/div[2]/table/tbody/tr/td[1]',2000)
      .click(".//*[@id='scrollable-area']/table/tbody/tr/td[1]")
      .pause(1000)
      .click(".//*[@id='ng-view']/div[2]/div[1]/ul/li[2]/i")
      .assert.urlContains('#/editFirm')
      .pause(1000)
      .end()
      
  }
};