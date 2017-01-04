var loginCommand = {
		adminLogin: function(client){
		this.api.pause(1000);
		this.waitForElementVisible('@usernameField',2000, 'Verified Username Field is visible')
			.setValue('@usernameField',client.globals.adminUsername)
			.waitForElementVisible('@passwordField',2000, 'Verified PassWord Field is enabled')
			.setValue('@passwordField', client.globals.adminPassword)
			.waitForElementVisible('@submitButton',2000, 'Verified Sign in button is enable');
		this.api.pause(1000);
		this.click('@submitButton')
			.waitForElementVisible('@alert',2000, 'Verified Modal dialog popup appears with WARNING header')
			.assert.containsText('div.modal-header', '**WARNING**')
			.click('@okButton');
		this.api.pause(1500);
		this.verify.visible('@portalHomePage', 'Verified Portal Home Page - Welcome to the Cloud9 Portal');	
		this.api.pause(2000);
		},
		
		loginWithCreds: function(username,password){
			this.api.pause(1000);
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
			this.api.pause(1000);
			this.waitForElementVisible('@usernameField',2000, 'Verified Username Field is visible')
				.setValue('@usernameField',client.globals.nonAdminUser)
				.waitForElementPresent('@passwordField',2000, 'Verified PassWord Field is enabled')
				.setValue('@passwordField',client.globals.nonAdminPass)
				.waitForElementPresent('@submitButton',2000, 'Verified Sign in button is enable');
			this.api.pause(1000);
			this.click('@submitButton')
				.waitForElementVisible('@alert',2000, 'Verified Modal dialog popup appears with WARNING header')
				.assert.containsText('div.modal-header', '**WARNING**')
				.click('@okButton');
			this.api.pause(2000);
			this.verify.visible('@portalHomePage', 'Verified Portal Home Page - Welcome to the Cloud9 Portal');	
			this.api.pause(2000);
			
		},
		newUserLogin: function(username, password){
			this.api.pause(1000);
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
			this.api.pause(1000);
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
			this.api.pause(1000);
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

		},
		userName:function(client){
			this.verify.visible('@usernameField', 'Verified UserName Input field is visible');
			this.clearValue('@usernameField');
			this.setValue('@usernameField', client.globals.CorrectUserName);
			this.api.pause(1000);
		},
		wrongPassWord:function(client){
			this.verify.visible('@passwordField', 'Verified PassWord Input field is visible');
			this.clearValue('@passwordField');
			this.setValue('@passwordField', client.globals.WrongPassword);
			this.api.pause(1000);
		},
		correctPassWord:function(client){
			this.verify.visible('@passwordField', 'Verified PassWord Input field is visible');
			this.clearValue('@passwordField');
			this.setValue('@passwordField', client.globals.CorrectPassword);
			this.api.pause(1000);
		},
		sign_in:function(client, password){
			this.verify.visible('@submitButton', 'Verified Sign in button is visible');
			this.click('@submitButton');
			this.api.pause(2000);
		},
		IncorrentSignIn:function(client){
			this.click('@submitButton');
			this.api.pause(1000);
			this.click('@submitButton');
			this.api.pause(1000);
			this.click('@submitButton');
			this.api.pause(1000);
			this.click('@submitButton');
			this.api.pause(1000);
			this.click('@submitButton');
			this.api.pause(1000);
			this.click('@submitButton');
			this.api.pause(1000);
			this.click('@submitButton');
			this.api.pause(1000);
			this.click('@submitButton');
			this.api.pause(1000);
			this.click('@submitButton');
			this.api.pause(1000);
			this.click('@submitButton');
			this.api.pause(1000);
			this.click('@submitButton');
		},
		signInErrorMsg:function(client){	
			this.api.pause(1500);
			this.getText('@errorMsg',function(errorMes){
				this.verify.equal(errorMes.value,'Login failed, check your username and password and try again.')
			});
			this.api.pause(1000);
		},
		signInErrorMsg_Ten:function(client){	
			this.getText('@errorMsg',function(errorMes){
				this.verify.equal(errorMes.value,'Too many failed login attempts. Please wait 00 minute(s) 59 second(s) to try again.')
			});
			this.api.pause(1000);
		},
		logiInModelDialog:function(client){
			this.waitForElementVisible('@alert',2000, 'Verified Modal dialog popup appears with WARNING header')
			this.assert.containsText('div.modal-header', '**WARNING**')
			this.click('@okButton');
			this.api.pause(1000);
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
			},
			errorMsg:{
				selector: '//*[@id="changefailed"]',
				locateStrategy: 'xpath'
			},
			
		}
}