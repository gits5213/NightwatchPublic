var connPageCommands = {
		go: function(){
			this.api.pause(1000);
			this.click('@connLink');
			this.api.pause(1000);
		},
		addIntConnForFirm: function(dateString,client){
			this.click('@addConnBtn');
			this.api.pause(1000);
			this.assert.containsText('body','Add Connection');
			this.click('@selectFirmBar');
			this.api.pause(500);
			this.setValue('@selectFirmBarSearch',dateString);
			this.api.pause(500);
			this.api.keys(client.Keys.ENTER);
			this.waitForElementPresent('@grpNameField',2000)
			.setValue('@grpNameField', 'Firm '+dateString+' Grp 1')
			.click('@communityBar');
			this.api.keys(client.Keys.DOWN_ARROW);
			this.api.keys(client.Keys.ENTER);
			this.setValue('@contactFname','Howard')
			.setValue('@contactLname','Hughes')
			.setValue('@contactEmail',client.globals.email1)
			.click('@defaultgrpYes')
			.setValue('@street1','456 Wall Street')
			.setValue('@street2', 'Suite 100')
			.setValue('@city','Any City')
			.setValue('@state','NY')
			.setValue('@zip',67890)
			.setValue('@country','USA')
			.setValue('@website','http://c9tec.com')
			.setValue('@description','New Group for Testing')
			.click('@submitBtn');
			this.api.pause(1000);
			
		},
		addExtConnForFirm: function(dateString,client){
			
		},
		editFirstRecord: function(){
			this.waitForElementVisible('@firstRow',2000);
			this.click('@firstRow')
			.click('@editGrpBtn');
			this.api.pause(1000);
			
		}
};

module.exports = {
		commands :[connPageCommands],
		elements: {
			connLink:{
				selector: '//*[@id="navbar"]/ul[1]/li[4]/a/h4/i',
				locateStrategy: 'xpath'
			},
			addConnBtn:{
				selector: '//*[@id="addConnection"]/i',
				locateStrategy: 'xpath'
			},
			editConnBtn:{
				selector: '//*[@id="editConnection"]/i',
				locateStrategy: 'xpath'
			},
			selectFirmBar: {
				selector: '//*[@id="ng-view"]/div[1]/div/div/div/div/a/span',
				locateStrategy: 'xpath'
			},
			selectFirmBarSearch: {
				selector: '//*[@id="ng-view"]/div[1]/div/div/div/div/div/div/input',
				locateStrategy: 'xpath'
			},
			internalYes : {
				selector: '//*[@id="internalYes"]',
				locateStrategy: 'xpath'
			},
			externalYes : {
				selector: '//*[@id="internalNo"]',
				locateStrategy: 'xpath'
			},
			fromField : {
				selector: '//*[@id="connFromDropdown_chosen"]/a/span',
				locateStrategy: 'xpath'
			},
			toField : {
				selector: '//*[@id="connToDropdown_chosen"]/a/span',
				locateStrategy: 'xpath'
			},
			connType :{
				selector : '//*[@id="vcType"]',
				locateStrategy: 'xpath'
			},
			myFirmBtnLabel :{
				selector: '//*[@id="fromButtonLabel"]',
				locateStrategy: 'xpath'
			},
			remoteFirmBtnLabel :{
				selector: '//*[@id="toButtonLabel"]',
			},
			submitBtn: {
				selector: '//*[@id="connectionData"]/div[2]/button[2]',
				locateStrategy: 'xpath'
			}
		}
}
