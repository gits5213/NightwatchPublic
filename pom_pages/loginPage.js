var loginCommand = {
		adminLogin: function(client){
			this.waitForElementVisible('@usernameField',3000, 'Verified Username Field is visible')
			.waitForElementVisible('@passwordField',3000, 'Verified PassWord Field is enabled')
			.waitForElementVisible('@submitButton',3000, 'Verified Sign in button is enable')
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
		loginWithCreds: function(username,password){
			this.waitForElementVisible('@usernameField',2000)
			.waitForElementPresent('@passwordField',2000)
			.waitForElementPresent('@submitButton',2000)
			.setValue('@usernameField',username)
			.setValue('@passwordField',password)
			.click('@submitButton')
			.waitForElementVisible('@alert',2000)
			.assert.containsText('div.modal-header', '**WARNING**')
			.click('@okButton');
			this.api.pause(1500);
		},
		
		userLogin: function(client){
			this.waitForElementVisible('@usernameField',2000, 'Verified Username Field is visible')
			.waitForElementPresent('@passwordField',2000, 'Verified PassWord Field is enabled')
			.waitForElementPresent('@submitButton',2000, 'Verified Sign in button is enable')
			.setValue('@usernameField',client.globals.nonAdminUser)
			.setValue('@passwordField',client.globals.nonAdminPass);
			this.api.pause(1500);
			this.click('@submitButton')
			.waitForElementVisible('@alert',15000, 'Verified Modal dialog popup appears with WARNING header')
			.assert.containsText('div.modal-header', '**WARNING**')
			.click('@okButton');
			this.api.pause(2000);
			this.verify.visible('@portalHomePage', 'Verified Portal Home Page - Welcome to the Cloud9 Portal');	
			this.api.pause(2000);
			
		},
		newUserLogin: function(username, password){
			this.waitForElementVisible('@usernameField',2000)
			.waitForElementPresent('@passwordField',2000)
			.waitForElementPresent('@submitButton',2000)
			.api.pause(3000)
			this.setValue('@usernameField',username)
			this.setValue('@passwordField',password, function(){
				console.log('Password is : ',password);
			})
			this.click('@submitButton')
			this.api.pause(1500);
		},

		userLoginFail: function(username,password){
			this.api.pause(1000,function(){
				console.log('Logging in - username:'+username+' password:'+password)
			})
			this.waitForElementVisible('@usernameField',2000, 'Verified Username Field is visible')
			.waitForElementPresent('@passwordField',2000, 'Verified PassWord Field is visible')
			.waitForElementPresent('@submitButton',2000, 'Verified Sign in button is visible')
			.setValue('@usernameField',username)
			.setValue('@passwordField', password)
			.click('@submitButton',function(){
				console.log('username:'+username+' password:'+password)
			})
			this.waitForElementNotVisible('@alert',2000, 'Login modal should not show up')
			this.api.pause(1500);		
		},
		
		prodAdmin2Login: function(client){
			this.waitForElementVisible('@usernameField',3000, 'Verified Username Field is visible')
			.waitForElementVisible('@passwordField',3000, 'Verified PassWord Field is enabled')
			.waitForElementVisible('@submitButton',3000, 'Verified Sign in button is enable and clickable')
			.setValue('@usernameField',client.globals.prodAdmin2Username)
			.setValue('@passwordField', client.globals.prodAdmin2Password)
			.click('@submitButton')
			.waitForElementVisible('@alert',2000, 'Verified Modal dialog popup appears with WARNING header')
			.assert.containsText('div.modal-header', '**WARNING**')
			.click('@okButton');
			this.waitForElementNotVisible('@alert',2000);
			this.api.pause(1500);
			this.click('@resetPassword','Click "Forgot Password?" link')
			this.getText('@changePassText', function(result){
				this.verify.equal(result.value, "Your password has been reset.\nPlease enter a new password.")
			})
		},
		
		changePassword : function(client){
			this.api.pause(1000);
			this.setValue('@newPassword1',client.globals.nonAdminPass)
			.setValue('@newPassword2', client.globals.nonAdminPass)
			this.api.pause(500)
			this.click('@changePassBtn')
			.waitForElementVisible('@alert',2000)
			.assert.containsText('div.modal-header', '**WARNING**')
			.click('@okButton2');
			this.api.pause(1500);
			this.verify.visible('@portalHomePage', 'Verified Portal Home Page - Welcome to the Cloud9 Portal');	
			this.api.pause(2000);
		},
		
		resetPassword : function(client, username){
			this.api.pause(1000)
			this.click('@forgotPassLink', function(){
				console.log('Clicking Forgot Password Link')
			})
			this
			.setValue('@userName',username)
			.setValue('@email',client.globals.msft_email)
			.click('@forgotPassBtn');
			this.api.pause(1000)

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
				selector: '#signin'
			},
			alert:{
				selector: 'div.modal-dialog'
			},
			okButton:{
				selector: "(//button[@type='button'])[4]",
				locateStrategy: 'xpath'
			},
			okButton2:{
				selector: '//*[@id="AgreeToTerms"]/div[2]/div/div[3]/button[2]',
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
			newPassword1:{
				selector: '//*[@id="newPassword1"]',
				locateStrategy: 'xpath'
			},
			newPassword2:{
				selector: '//*[@id="newPassword2"]',
				locateStrategy: 'xpath'
			},
			changePassText: {
				selector: '//*[@id="changeForm"]/h2',
				locateStrategy: 'xpath'
			},
			changePassBtn: {
				selector: '//*[@id="changePassword"]',
				locateStrategy: 'xpath'
			},
			forgotPassLink:{
				selector: '//*[@id="resetPassword"]',
				locateStrategy: 'xpath'
			},
			resetPassText: {
				selector: '//*[@id="resetForm"]/h2',
				locateStrategy: 'xpath'
			},
			userName: {
				selector: '//*[@id="username"]',
				locateStrategy: 'xpath'
			},
			email: {
				selector: '//*[@id="resetEmail"]',
				locateStrategy: 'xpath'
			},
			forgotPassBtn: {
				selector: '//*[@id="resetForm"]/button',
				locateStrategy: 'xpath'
			},
			passResetSuccess:{
				selector: '//*[@id="success"]',
				locateStrategy: 'xpath'
			}
			
		}
}