/*
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
		logout:function(){
			this.click('//*[@id="navbar"]/ul[2]/li[3]/a/h4/i');
			this.api.pause(1000);
		}
};
*/
module.exports = {
		//commands :[loginCommand],
		elements: {
			firms:{
				selector: '//*[@id="navbar"]/ul[1]/li[1]/a/h4/i',
				locateStrategy: 'xpath'
			},
			groups:{
				selector: '//*[@id="navbar"]/ul[1]/li[2]/a/h4/i',
				locateStrategy: 'xpath'
			},
			users: {
				selector: '//*[@id="navbar"]/ul[1]/li[3]/a/h4/i',
				locateStrategy: 'xpath'
			},
			connections: {
				selector: '//*[@id="navbar"]/ul[1]/li[4]/a/h4/i',
				locateStrategy: 'xpath'
			},
			recordings:{
				selector: '//*[@id="navbar"]/ul[1]/li[5]/a/h4/i',
				locateStrategy: 'xpath'
			},
			viewLogs:{
				selector: '//*[@id="navbar"]/ul[1]/li[6]/a/h4/i',
				locateStrategy: 'xpath'
			},
			help:{
				selector: '//*[@id="navbar"]/ul[1]/li[7]/a/h4/i',
				locateStrategy: 'xpath'
			},
			cog:{
				selector: '//*[@id="navbar"]/ul[2]/li[1]/a/h4/i',
				locateStrategy: 'xpath'
			},
			privilege:{
				selector: '//*[@id="settingsDropDown"]/li',
				locateStrategy:'xpath'
			}
		}
}