var reportTabLoginCommand = {
		reportFirmAdmin2Login: function(client){
			this.waitForElementVisible('@usernameField',2000, true)
			this.waitForElementVisible('@passwordField',2000);
			this.waitForElementVisible('@submitButton',2000);
			this.setValue('@usernameField',client.globals.firmAdmin2Username);
			this.setValue('@passwordField', client.globals.firmAdmin2Password);
			this.click('@submitButton');
			this.waitForElementVisible('@alert',2000);
			this.assert.containsText('div.modal-header', '**WARNING**');
			this.click('@okButton');
			this.api.pause(1500);
			
		},
		reportCloud9AdminLogin: function(client){
			this.waitForElementVisible('@usernameField',2000)
			.waitForElementPresent('@passwordField',2000)
			.waitForElementPresent('@submitButton',2000)
			.setValue('@usernameField',client.globals.cloud9AdminUsername)
			.setValue('@passwordField',client.globals.cloud9AdminPassword)
			.click('@submitButton')
			.waitForElementVisible('@alert',2000)
			.assert.containsText('div.modal-header', '**WARNING**')
			.click('@okButton');
			this.api.pause(1500);
		},
		reportCloud9SalesLogin: function(client){
			this.waitForElementVisible('@usernameField',2000, true);
			this.waitForElementPresent('@passwordField',2000);
			this.waitForElementPresent('@submitButton',2000);
			this.setValue('@usernameField',client.globals.cloud9SalesUsername);
			this.setValue('@passwordField',client.globals.cloud9SalesPassword);
			this.click('@submitButton');
			this.waitForElementVisible('@alert',2000);
			this.assert.containsText('div.modal-header', '**WARNING**');
			this.click('@okButton');
			this.api.pause(1500);
		}
			
		
};

module.exports = {
		commands :[reportTabLoginCommand],
		elements: {
			usernameField:{
				selector: '//input[contains(@id,"username")]',
				locateStrategy: 'xpath'
			},
			passwordField:{
				selector: '//input[contains(@id,"password")]',
				locateStrategy: 'xpath'
			},
			submitButton: {
				selector: '//button[contains(.,"Sign in")]',
				locateStrategy: 'xpath'
			},
			alert:{
				selector: 'div.modal-dialog'
			},
			okButton:{
				selector: "(//button[@type='button'])[4]",
				locateStrategy: 'xpath'
			},
			loginFail1:{
				selector: '//*[@id="changefailed"]',
				locateStrategy:'xpath'
			}
		}
}