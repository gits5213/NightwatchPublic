var firmsPageCommands = {
		go: function(){
			this.api.pause(1000);
			this.verify.visible('@firmsLink', 'Verified Firms tab button is visible');
			this.click('@firmsLink');
			this.api.pause(2000);
		},	
		addFirmTab:function(){
			this.verify.visible('@addFirmBtn', 'Verified Add Firm button is visible');
			this.click('@addFirmBtn');
			this.api.pause(2000);
		},
		editFirmTab:function(){
			this.verify.visible('@editFirmBtn', 'Verified Edit Firm button is visible');
			this.click('@editFirmBtn');
			this.api.pause(2000);
		},
		manageGroupsTab:function(){
			this.verify.visible('@manageGrpBtn', 'Verified Management Group button is visible');
			this.click('@manageGrpBtn');
			this.api.pause(2000);
		},
		manageConnectionsTab:function(){
			this.verify.visible('@manageConnBtn', 'Verified Management Conncetion button is visible');
			this.click('@manageConnBtn');
			this.api.pause(2000);
		},
		manageUsersTab:function(){
			this.verify.visible('@manageUsersBtn', 'Verified Management User button is visible');
			this.click('@manageUsersBtn');
			this.api.pause(2000);
		},
		detailsTab:function(){
			this.verify.visible('@detailsBtn', 'Verified Details button is visible');
			this.click('@detailsBtn');
			this.api.pause(2000);
		},
		exportTab:function(){
			this.verify.visible('@exportBtn', 'Verified Exprot button is visible');
			this.click('@exportBtn')
			this.api.pause(2000);
		},
		firmNameSrch:function(string, client){
			this.verify.visible('@firmNameSearch', 'Verified Search Input field is visible');
			this.clearValue('@firmNameSearch');
			this.setValue('@firmNameSearch', string);
			this.api.pause(2000);
		},
		selectFirstRow:function(){
			this.verify.visible('@firstRowFirmsData', 'Verified  First Row is visible');
			this.api.pause(2000);
			this.click('@firstRowFirmsData');
			this.api.pause(2000);
			
		},
	/*	getFirmByName : function(string, client){
			this.api.pause(1000);
			this.click('@firmNameSearch');
			this.clearValue('@firmNameSearch');
			this.api.pause(1000);
			this.setValue('@firmNameSearch',string);
			this.api.pause(1000);
			//this.clearValue('@firmNameSearch');
			this.waitForElementVisible('@firstRowFirmsData',2000);
			this.click('@firstRowFirmsData');
			
		}*/
	
};

module.exports = {
		commands :[firmsPageCommands],
		elements: {
			firmsLink:{
				selector: '//*[@id="navbar"]/ul[1]/li[1]/a/h4/i',
				locateStrategy: 'xpath'
			},
			addFirmBtn:{
				selector: '//*[@id="ng-view"]/div[2]/div[1]/ul/li[1]/i',
				locateStrategy: 'xpath'
			},
			editFirmBtn:{
				selector: '//*[@id="ng-view"]/div[2]/div[1]/ul/li[2]/i',
				locateStrategy: 'xpath'
			},
			manageGrpBtn:{
				selector: '//*[@id="ng-view"]/div[2]/div[1]/ul/li[3]/i',
				locateStrategy: 'xpath'
			},
			manageConnBtn:{
				selector: '//*[@id="ng-view"]/div[2]/div[1]/ul/li[4]/i',
				locateStrategy: 'xpath'
			},
			manageUsersBtn:{
				selector: '//*[@id="ng-view"]/div[2]/div[1]/ul/li[5]/i',
				locateStrategy: 'xpath'
			},
			detailsBtn:{
				selector: '//*[@id="ng-view"]/div[2]/div[1]/ul/li[6]/i',
				locateStrategy: 'xpath'
			},
			exportBtn: {
				selector: '//*[@id="ng-view"]/div[2]/div[1]/ul/li[7]/i',
				locateStrategy: 'xpath'
			},
			
			firmNameSearch:{
				selector: '//*[@id="scrollable-area"]/table/thead[1]/tr[2]/th[1]/div/input',
				locateStrategy: 'xpath'
			},
			firstRowFirmsData:{
				selector: '//*[@id="scrollable-area"]/table/tbody/tr/td[1]',
				locateStrategy: 'xpath'
			},
			
			okButton:{
				selector: "(//button[@type='button'])[4]",
				locateStrategy: 'xpath'
			},
			
			detailsFirmID:{
				selector: '//span[contains(.,"Firm ID")]',
				locateStrategy: 'xpath'
			},
			detailsFirmName:{
				selector: '//*[@id="scrollable-area"]/table/thead[1]/tr[1]/th[1]/div/span',
				locateStrategy: 'xpath'
			},
			firmVisible: {
				selector: '//*[@id="firmType"]/option[2]',
				locateStrategy:'xpath'
			},
			firmPageResult: {
				selector: '//*[@id="scrollable-area"]/table/tbody/tr',
				locateStrategy:'xpath'
			},

		}
}