var loginCommand = {
		adminLogin: function(client){
			this.waitForElementVisible('@usernameField',2000);
			this.waitForElementVisible('@passwordField',2000);
			this.waitForElementVisible('@submitButton',2000);
			this.setValue('@usernameField',client.globals.adminUsername);
			this.setValue('@passwordField', client.globals.adminPassword);
			this.click('@submitButton');
			this.waitForElementVisible('@alert',2000);
			this.assert.containsText('div.modal-header', '**WARNING**');
			this.click('@okButton');
			this.api.pause(1500);
			
		},
		userLogin: function(client){
			this.waitForElementVisible('@usernameField',2000)
			.waitForElementPresent('@passwordField',2000)
			.waitForElementPresent('@submitButton',2000)
			.setValue('@usernameField',client.globals.nonAdminUser)
			.setValue('@passwordField',client.globals.nonAdminPass)
			.click('@submitButton')
			.waitForElementVisible('@alert',2000)
			.assert.containsText('div.modal-header', '**WARNING**')
			.click('@okButton');
			this.api.pause(1500);
		},
		userLoginFail: function(username,password){
			this.api.pause(1000,function(){
				console.log('Logging in - username:'+username+' password:'+password)
			})
			this.waitForElementVisible('@usernameField',2000)
			.waitForElementPresent('@passwordField',2000)
			.waitForElementPresent('@submitButton',2000)
			.setValue('@usernameField',username)
			.setValue('@passwordField', password)
			.click('@submitButton',function(){
				console.log('username:'+username+' password:'+password)
			})
			.waitForElementNotVisible('@alert',2000)
			this.api.pause(1500);
		},
		//	
		reportFirmAdmin2Login: function(client){
			this.waitForElementVisible('@usernameField',2000, 'Verified UserName Field is enable')
			this.waitForElementVisible('@passwordField',2000, 'Verified PassWord Field is enable');
			this.waitForElementVisible('@submitButton',2000, 'Verified Sign in button is enable and clikable');
			this.setValue('@usernameField',client.globals.firmAdmin2Username);
			this.setValue('@passwordField', client.globals.firmAdmin2Password);
			this.click('@submitButton');
			this.waitForElementVisible('@alert',2000, 'Verified Modal dialog popup is appear with WARNING header');
			this.assert.containsText('div.modal-header', '**WARNING**');
			this.click('@okButton');
			this.api.pause(1500);
			//Portal Home Page Verified
			this.verify.visible('@portalHomePage', 'Verified Portal Home Page - Welcome to the Cloud9 Portal');	
			this.api.pause(2000);
					
		},
		reportCloud9AdminLogin: function(client){
			this.waitForElementVisible('@usernameField',2000, 'Verified UserName Field is enable');
			this.waitForElementVisible('@passwordField',2000, 'Verified PassWord Field is enable');
			this.waitForElementVisible('@signInButton',2000, 'Verified Sign in button is enable and clikable');
			this.setValue('@usernameField',client.globals.cloud9AdminUsername);
			this.setValue('@passwordField', client.globals.cloud9AdminPassword);
			this.click('@signInButton');
			this.waitForElementVisible('@alert',5000, 'Verified Modal dialog popup is appear with WARNING header');
			this.assert.containsText('div.modal-header', '**WARNING**');
			this.click('@okButton');
			this.api.pause(1500);
			
			//Portal Home Page Verified
			this.verify.visible('@portalHomePage', 'Verified Portal Home Page - Welcome to the Cloud9 Portal');	
			this.api.pause(2000);
		
		},
		reportCloud9SalesLogin: function(client){
			this.waitForElementVisible('@usernameField',2000, 'Verified UserName Field is enable');
			this.waitForElementPresent('@passwordField',2000, 'Verified PassWord Field is enable');
			this.waitForElementPresent('@submitButton',2000, 'Verified Sign in button is enable and clikable');
			this.setValue('@usernameField',client.globals.cloud9SalesUsername);
			this.setValue('@passwordField',client.globals.cloud9SalesPassword);
			this.click('@submitButton');
			this.waitForElementVisible('@alert',2000, 'Verified Modal dialog popup is appear with WARNING header');
			this.assert.containsText('div.modal-header', '**WARNING**');
			this.click('@okButton');
			this.api.pause(1500);
			//Portal Home Page Verified
			this.verify.visible('@portalHomePage', 'Verified Portal Home Page - Welcome to the Cloud9 Portal');	
			this.api.pause(2000);
					
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