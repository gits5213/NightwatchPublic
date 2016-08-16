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
			this.waitForElementPresent('@internalYes',1000)
			.click('@internalYes');
			this.api.pause(500);
			this.waitForElementPresent('@fromFieldBar',1000)
			.click('@fromFieldBar');
			this.api.pause(500);
			this.setValue('@fromFieldInput', 'Grp 1');
			this.api.keys(client.Keys.DOWN_ARROW);
			this.api.keys(client.Keys.ENTER);
			this.verify.valueContains('@connType','sPK');
			this.setValue('@myFirmBtnLabel',dateString+'IntraFirmShout');
			this.api.pause(500);
			this.click('@submitBtn');
			this.api.pause(1000);
			
		},
		addExtConnForFirm: function(dateString,client){
			
		},
		editFirstRecord: function(){
			this.waitForElementVisible('@firstRow',2000);
			this.click('@firstRow')
			.click('@editConnBtn');
			this.api.pause(1000);
			
		},
		
		portalConnectionsTab: function(client){
			this.verify.visible('@connectionsTab', 'Verified Connection tab button is visible and clikable');	
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
			delConnBtn:{
				selector: '//*[@id="deleteConnection"]/i',
				locateStrategy: 'xpath'
			},
			detailsBtn:{
				selector: '//*[@id="editConnection"]/i',
				locateStrategy: 'xpath'
			},
			exportBtn:{
				selector: '//*[@id="editConnection"]/i',
				locateStrategy: 'xpath'
			},
			
			selectFirmBar: {
				selector: '//*[@id="ng-view"]/div/h5/div/div/div/a/span',
				locateStrategy: 'xpath'
			},
			selectFirmBarSearch: {
				selector: '//*[@id="ng-view"]/div/h5/div/div/div/div/div/input',
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
			fromFieldBar : {
				selector: '//*[@id="connFromDropdown_chosen"]/a/span',
				locateStrategy: 'xpath'
			},
			toField : {
				selector: '//*[@id="connToDropdown_chosen"]/a/span',
				locateStrategy: 'xpath'
			},
			fromFieldInput :{
				selector : '//*[@id="connFromDropdown_chosen"]/div/div/input',
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
				locateStrategy: 'xpath'
			},
			submitBtn: {
				selector: '//*[@id="connectionData"]/div[2]/button[2]',
				locateStrategy: 'xpath'
			},
			
			firstRow: {
				selector : '//*[@id="scrollable-area"]/table/tbody/tr[2]/td[1]',
				locateStrategy: 'xpath'
			},
			
			firmNameField : '#firmName',
			commNameField: '#communityName',
			grpNameField: {
				selector: '//*[@id="groupName"]',
				locateStrategy: 'xpath'
			},
			//		
			connectionsTab:{
				selector: '//*[@id="navbar"]/ul[1]/li[4]/a/h4/i',
				locateStrategy: 'xpath'
			},
			connectionsHomePage:{
				selector: '//*[@id="ng-view"]/div[1]/div/h2',
				locateStrategy: 'xpath'
			},
			//
			btnLabelField: '#buttonLabel',
			vcinstField: '#vcInstID',
			connIdField: '#c9RefNum',
			description: '#description',
			createdByField: '#createdBy',
			createdOnField: '#createdOn'
		}


}
