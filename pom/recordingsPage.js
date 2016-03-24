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
			backBtn:{
				selector: '//*[@id="demo"]/div[4]/ul/li[1]/i',
				locateStrategy: 'xpath'
			},
			playBtn:{
				selector: '//*[@id="demo"]/div[4]/ul/li[2]/i',
				locateStrategy: 'xpath'
			},
			forwardBtn: {
				selector: '//*[@id="demo"]/div[4]/ul/li[3]/i',
				locateStrategy: 'xpath'
			},
			speedBtn: {
				selector: '//*[@id="demo"]/div[4]/ul/li[4]/i',
				locateStrategy: 'xpath'
			},
			slider:{
				selector: '//*[@id="demo"]/div[4]/ul/li[5]/rzslider',
				locateStrategy: 'xpath'
			},
			viewQosBtn:{
				selector: '//*[@id="viewQos"]/i',
				locateStrategy: 'xpath'
			},
			detailsBtn:{
				selector: '//*[@id="detailView"]/i',
				locateStrategy: 'xpath'
			},
			exportBtn:{
				selector: '//*[@id="exportbutton"]/i',
				locateStrategy: 'xpath'
			},
			downloadBtn:{
				selector: '//*[@id="ng-view"]/div[2]/div[2]/ul/li[4]/i',
				locateStrategy: 'xpath'
			},
			callType:{
				selector: '//*[@id="ng-view"]/div[2]/div[3]/div[1]/button',
				locateStrategy: 'xpath'
			},
			show:{
				selector: '//*[@id="ng-view"]/div[2]/div[3]/div[2]/button',
				locateStrategy: 'xpath'
			}
		}
}