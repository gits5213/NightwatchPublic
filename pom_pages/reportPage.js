var reportPageCommands = {
		go: function(client){
			this.api.pause(1000);
			this.click('@reportTab');
			this.api.pause(3000);
			
			this.click('@selectFirm');		
			this.click('@SelectFirmSearch');		
			this.clearValue('@SelectFirmSearch');
			this.api.pause(500);
			this.setValue('@SelectFirmSearch','000 Firm B');
			this.api.keys(client.Keys.DOWN_ARROW);
			this.api.keys(client.Keys.ENTER);
			
			
			
			
			
			
			
			
		},
	/*	addIntConnForFirm: function(dateString,client){
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
			
		}*/
};

module.exports = {
		commands :[reportPageCommands],
		elements: {
			reportTab:{
				selector: '//span[contains(.,"Reports")]',	
				locateStrategy: 'xpath'
			},			
			selectFirm:{
				selector: '//span[contains(.,"Select a Firm")]',    
				locateStrategy: 'xpath'
			},			
			SelectFirmSearch:{
				selector: '//input[contains(@autocomplete,"off")]',
				locateStrategy: 'xpath'
			},
			/*
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
			btnLabelField: '#buttonLabel',
			vcinstField: '#vcInstID',
			connIdField: '#c9RefNum',
			description: '#description',
			createdByField: '#createdBy',
			createdOnField: '#createdOn'
		}*/
		}
}
