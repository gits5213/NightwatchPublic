module.exports = {
  'Demo test Google' : function (browser) {
    browser
      .url('https://dev-c9portal.xhoot.com/c9portal/')
      .waitForElementVisible('h2.form-signin-heading', 3000)
      .setValue('input[name=username]', 'ucheonwudiwe')
      .setValue('input[name=password]', 'Password1960')
      .click('button[type=submit]')
      .waitForElementVisible('div.modal-dialog', 5000)
      .assert.containsText('div.modal-header', '**WARNING**')
      .waitForElementVisible('button.btn.btn-success',3000)
      .useXpath()
      .click("(//button[@type='button'])[4]")
      .useCss()
      .assert.containsText('body', 'Welcome to the Cloud9 Portal')
      .click('i.fa.fa-sitemap')
      .useXpath()
      .waitForElementVisible('/html/body/div[1]/div/div[2]/div[2]/table/thead[1]/tr[2]/th[1]/div/input',2000)
      .setValue('/html/body/div[1]/div/div[2]/div[2]/table/thead[1]/tr[2]/th[1]/div/input','Test Firm 20160223135035248')
      .waitForElementVisible('/html/body/div[1]/div/div[2]/div[2]/table/tbody/tr/td[1]',2000)
      .click('/html/body/div[1]/div/div[2]/div[2]/table/tbody/tr/td[1]')
  }
};