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
		logout:function(){
			this.click('//*[@id="navbar"]/ul[2]/li[3]/a/h4/i');
			this.api.pause(1000);
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
			}
			
		}
}