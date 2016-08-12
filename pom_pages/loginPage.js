var loginCommand = {
		adminLogin: function(client){
			this.waitForElementVisible('@usernameField',3000, 'Verified Username Field is visible')
			.waitForElementVisible('@passwordField',3000, 'Verified PassWord Field is enabled')
			.waitForElementVisible('@submitButton',3000, 'Verified Sign in button is enable and clickable')
			.setValue('@usernameField',client.globals.adminUsername)
			.setValue('@passwordField', client.globals.adminPassword)
			.click('@submitButton')
			.waitForElementVisible('@alert',2000, 'Verified Modal dialog popup appears with WARNING header')
			.assert.containsText('div.modal-header', '**WARNING**')
			.click('@okButton');
			this.api.pause(1500);
			this.verify.visible('@portalHomePage', 'Verified Portal Home Page - Welcome to the Cloud9 Portal');	
			this.api.pause(2000);
			
		},
		userLogin: function(client){
			this.waitForElementVisible('@usernameField',2000, 'Verified Username Field is visible')
			.waitForElementPresent('@passwordField',2000, 'Verified PassWord Field is enabled')
			.waitForElementPresent('@submitButton',2000, 'Verified Sign in button is enable and clickable')
			.setValue('@usernameField',client.globals.nonAdminUser)
			.setValue('@passwordField',client.globals.nonAdminPass)
			.click('@submitButton')
			.waitForElementVisible('@alert',2000, 'Verified Modal dialog popup appears with WARNING header')
			.assert.containsText('div.modal-header', '**WARNING**')
			.click('@okButton');
			this.api.pause(2000);
			this.verify.visible('@portalHomePage', 'Verified Portal Home Page - Welcome to the Cloud9 Portal');	
			this.api.pause(2000);
			
		},
		
		userLoginFail: function(username,password){
			this.api.pause(1000,function(){
				console.log('Logging in - username:'+username+' password:'+password)
			})
			this.waitForElementVisible('@usernameField',2000, 'Verified Username Field is visible')
			.waitForElementPresent('@passwordField',2000, 'Verified PassWord Field is enabled')
			.waitForElementPresent('@submitButton',2000, 'Verified Sign in button is enable and clickable')
			.setValue('@usernameField',username)
			.setValue('@passwordField', password)
			.click('@submitButton',function(){
				console.log('username:'+username+' password:'+password)
			})
			.waitForElementNotVisible('@alert',2000, 'Verified Modal dialog popup appears with WARNING header')
			this.api.pause(1500);
			
		}			
};

module.exports = {
		commands :[loginCommand],
		elements: {
			usernameField:{
				selector: '//*[@id="username"]',
				locateStrategy: 'xpath'
			},
			passwordField:{
				selector: '//*[@id="password"]',
				locateStrategy: 'xpath'
			},
			submitButton: {
				selector: '//*[@id="signin"]',
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
			},
			portalHomePage:{
				selector: '//*[@id="ng-view"]/div/div[1]/div/div/div/div/h1',
				locateStrategy: 'xpath'
			},
			signInButton: {
				selector: '//*[@id="signin"]',
				locateStrategy: 'xpath'
			},
		}
}