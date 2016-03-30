var userAdminCommands = {
		setPrivilege: function(client,clientId){
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
		disable2fa:function(client){
			this.api.pause(1000);
			this.click('@tfa_No')
			.setValue('@allowedIp',client.globals.ip)
			.click('@saveBtn')
		},
		setToNone:function(client){
			this.click('@adminPriv')
			.click('@noneValue')
			this.api.keys(client.Keys.ENTER);
			this.api.pause(500)
			this.click('@saveBtn')
			this.api.pause(1000)
		}
};

module.exports = {
		commands :[userAdminCommands],
		elements: {
			pageTitle:{
				selector: '//*[@id="ng-view"]/div/h5',
				locateStrategy: 'xpath'
			},
			firmName:{
				selector: '//*[@id="firmName"]',
				locateStrategy:'xpath'				
			},
			firstName:{
				selector: '//*[@id="firstname"]',
				locateStrategy: 'xpath'
			},
			lastName:{
				selector: '//*[@id="lastname"]',
				locateStrategy: 'xpath'
			},
			adminPriv:{
				selector: '//*[@id="privilege"]',
				locateStrategy: 'xpath'
			},
			allowedIp:{
				selector: '//*[@id="allowedIP"]',
				locateStrategy: 'xpath'
			},
			mobile:{
				selector: '//*[@id="mobile"]',
				locateStrategy: 'xpath'
			},
			tfa_Yes:{
				selector: '//*[@id="tfEnableYes"]',
				locateStrategy:'xpath'
			},
			tfa_No:{
				selector: '//*[@id="tfEnableNo"]',
				locateStrategy: 'xpath'
			},
			saveBtn:{
				selector: '//*[@id="useradmindata"]/div[6]/button[2]',
				locateStrategy: 'xpath'
			},
			noneValue:{
				selector: '//*[@id="privilege"]/option[1]',
				locateStrategy: 'xpath'
			}
			
		}
}