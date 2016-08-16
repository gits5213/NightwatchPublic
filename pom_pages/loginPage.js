var loginCommand = {
		adminLogin: function(client){
			this.waitForElementVisible('@usernameField',2000)
			.waitForElementVisible('@passwordField',2000)
			.waitForElementVisible('@submitButton',2000)
			.setValue('@usernameField',client.globals.adminUsername)
			.setValue('@passwordField', client.globals.adminPassword)
			.click('@submitButton')
			.waitForElementVisible('@alert',2000)
			.assert.containsText('div.modal-header', '**WARNING**')
			.click('@okButton');
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
		newUserLogin: function(username, password,client){
			this.waitForElementVisible('@usernameField',2000)
			.waitForElementPresent('@passwordField',2000)
			.waitForElementPresent('@submitButton',2000)
			.api.pause(3000)
			this.setValue('@usernameField',username)
			this.setValue('@passwordField',password, function(){
				console.log('Password is : ',password);
			})
			//this.api.pause(1000)
			this.click('@submitButton')
			//.waitForElementVisible('@alert',2000)
			//.assert.containsText('div.modal-header', '**WARNING**')
			//.click('@okButton');
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
			loginFail1:{
				selector: '//*[@id="changefailed"]',
				locateStrategy:'xpath'
			},
			newPassword1:{
				selector: '//*[@id="newPassword1"]',
				locateStrategy: 'xpath'
			},
			newPassword2:{
				selector: '//*[@id="newPassword2"]',
				locateStrategy: 'xpath'
			}
		}
}