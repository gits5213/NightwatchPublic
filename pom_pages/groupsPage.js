var groupsPageCommands = {
		go: function(client){
			this.api.pause(1000);
			this.verify.visible('@groupsLink', 'Verified Groups tab button is visible');
			this.click('@groupsLink');
			this.api.pause(1000);
		},
		addGrpForFirm: function(dateString,client){
			this.click('@addGroupBtn');
			this.api.pause(1000);
			this.assert.containsText('body','Add New Group');
			this.click('@selectFirmBar');
			this.api.pause(500);
			this.setValue('@selectFirmBarSearch',dateString);
			this.api.pause(500);
			this.api.keys(client.Keys.ENTER);
			this.waitForElementPresent('@grpNameField',2000)
			.setValue('@grpNameField', 'Firm '+dateString+' Grp 1')
			.click('@communityBar')
			.click('@financialOption');
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
			this.api.pause(5000);
			
		},
		addAnotherGrpForFirm: function(dateString,client){
			this.click('@addGroupBtn');
			this.api.pause(1000);
			this.assert.containsText('body','Add New Group');
			this.click('@selectFirmBar');
			this.api.pause(1000);
			this.setValue('@selectFirmBarSearch',dateString);
			this.api.pause(1000);
			this.api.keys(client.Keys.ENTER);
			this.waitForElementPresent('@grpNameField',2000)
			.setValue('@grpNameField', 'Firm '+dateString+' Grp 2')
			.click('@communityBar')
			.click('@financialOption');
			/*this.api.keys(client.Keys.DOWN_ARROW);
			this.api.keys(client.Keys.ENTER);*/
			this.setValue('@contactFname','Jonathan')
			.setValue('@contactLname','Jengo')
			.setValue('@contactEmail',client.globals.email1)
			.setValue('@street1','123 Main Street')
			.setValue('@street2', 'Suite 17')
			.setValue('@city','Any City')
			.setValue('@state','NY')
			.setValue('@zip',12345)
			.setValue('@country','USA')
			.setValue('@website','http://c9tec.com')
			.setValue('@description','Another new Group for Testing')
			.click('@submitBtn');
			this.api.pause(5000);
			
		},
		editFirstRecord: function(){
			this.waitForElementVisible('@firstRow',2000);
			this.click('@firstRow')
			.click('@editGrpBtn');
			this.api.pause(1000);
			
		},
			
		getGroupByName: function(client){
			this.waitForElementVisible('@groupNameSearch',5000, 'Verified Firms name search field enable');
			this.api.pause(1000);
			this.clearValue('@groupNameSearch');
			this.click('@groupNameSearch');
			this.setValue('@groupNameSearch',' ');
			this.api.keys(client.Keys.DOWN_ARROW);
			this.api.keys(client.Keys.ENTER);
			this.api.pause(1000);
			this.waitForElementVisible('@firstRowGroupsData',5000, 'Verifed the searching result narrowing!');
			this.click('@firstRowGroupsData');
			this.api.pause(2000);		
		}
		
};

module.exports = {
		commands :[groupsPageCommands],
		elements: {
			groupsLink:{
				selector: '//*[@id="navbar"]/ul[1]/li[2]/a/h4/i',
				locateStrategy: 'xpath'
			},
			addGroupBtn:{
				selector: '//*[@id="ng-view"]/div[2]/div[1]/ul/li[1]/i',
				locateStrategy: 'xpath'
			},
			editGrpBtn:{
				selector: '//*[@id="ng-view"]/div[2]/div[1]/ul/li[2]/i',
				locateStrategy: 'xpath'
			},
			editGrpUsersBtn:{
				selector: '//*[@id="ng-view"]/div[2]/div[1]/ul/li[3]/i',
				locateStrategy: 'xpath'
			},
			viewGrpConnBtn:{
				selector: '//*[@id="ng-view"]/div[2]/div[1]/ul/li[4]/i',
				locateStrategy: 'xpath'
			},
			delGrpBtn:{
				selector: '//*[@id="ng-view"]/div[2]/div[1]/ul/li[5]/i',
				locateStrategy: 'xpath'
			},
			detailsBtn:{
				selector: '//*[@id="ng-view"]/div[2]/div[1]/ul/li[6]/i',
				locateStrategy: 'xpath'
			},
			exportBtn:{
				selector: '//*[@id="ng-view"]/div[2]/div[1]/ul/li[7]/i',
				locateStrategy: 'xpath'
			},
			selectFirmBar: {
				selector: '//*[@id="ng-view"]/div/div/div/div/a/span',
				locateStrategy: 'xpath'
			},
			selectFirmBarSearch: {
				selector: '//*[@id="ng-view"]/div/div/div/div/div/div/input',
				locateStrategy: 'xpath'
			},
			selectFirmBarsearch2:{
				selector: '//*[@id="ng-view"]/div[1]/div/div/div/div',
				locateStrategy: 'xpath'
			},
			grpNameField : {
				selector: '//*[@id="groupName"]',
				locateStrategy: 'xpath'
			},
			communityBar: {
				selector: '//*[@id="communityId"]',
				locateStrategy: 'xpath'
			},
			contactFname: {
				selector: '//*[@id="firstName"]',
				locateStrategy: 'xpath'
			},
			contactLname: {
				selector: '//*[@id="lastName"]',
				locateStrategy: 'xpath'
			},
			contactEmail: {
				selector: '//*[@id="email"]',
				locateStrategy: 'xpath'
			},
			street1: {
				selector: '//*[@id="street1"]',
				locateStrategy: 'xpath'
			},
			street2: {
				selector: '//*[@id="street2"]',
				locateStrategy: 'xpath'
			},
			city: {
				selector: '//*[@id="city"]',
				locateStrategy: 'xpath'
			},
			state: {
				selector: '//*[@id="state"]',
				locateStrategy: 'xpath'
			},
			zip: {
				selector: '//*[@id="zip"]',
				locateStrategy: 'xpath'
			},
			country: {
				selector: '//*[@id="country"]',
				locateStrategy: 'xpath'
			},
			website: {
				selector: '//*[@id="website"]',
				locateStrategy: 'xpath'
			},
			description: {
				selector: '//*[@id="description"]',
				locateStrategy: 'xpath'
			},
			submitBtn: {
				selector: '//*[@id="firmData"]/div[2]/button[2]',
				locateStrategy: 'xpath'
			},
			defaultgrpYes: {
				selector: '//*[@id="defaultGroupYes"]',
				locateStrategy: 'xpath'
			},
			firstRow:{
				selector: '//*[@id="scrollable-area"]/table/tbody/tr/td[1]',
				locateStrategy: 'xpath'
			},
			
			groupNameSearch:{
				selector: '//*[@id="scrollable-area"]/table/thead[1]/tr[2]/th[1]/div/input',locateStrategy: 'xpath'
			},
			firstRowGroupsData:{
				selector: '//*[@id="scrollable-area"]/table/tbody/tr/td[1]',locateStrategy: 'xpath'
			},
			editGroupBtn:{
				selector: '//*[@id="ng-view"]/div[2]/div[1]/ul/li[2]/span',locateStrategy: 'xpath'	
			},
			editGroupHomePage:{
				selector: '//*[@id="ng-view"]/div/h5',locateStrategy: 'xpath'				      
			},
			editGroupSave:{
				selector: '//*[@id="firmData"]/div[2]/button[2]',locateStrategy: 'xpath'				      
			},
			editGroupUserBtn:{
				selector: '//*[@id="ng-view"]/div[2]/div[1]/ul/li[3]/span',locateStrategy: 'xpath'				      
			},
			editGroupUserHomePage:{
				selector: '//*[@id="ng-view"]/div/h5/span',locateStrategy: 'xpath'				      
			},
			doneBtn:{
				selector: '//*[@id="ng-view"]/div/form/button',locateStrategy: 'xpath'				      
			},		
			groupDescription:{
				selector: '//span[contains(.,"Description")]',locateStrategy: 'xpath'				      
			},
			detailsFirmName:{
				selector: '//*[@id="scrollable-area"]/table/thead[1]/tr[1]/th[1]/div/span',locateStrategy: 'xpath'
			},
			financialOption: {
				selector: '//*[@id="communityId"]/option[4]',
				locateStrategy: 'xpath'
			},
			addGroupNameInputField: {
				selector: '//*[@id="firmGroups"]/thead/tr[2]/th[1]/div/input',
				locateStrategy: 'xpath'
			},
			addGroupToUser: {
				selector: '//*[@id="adduser"]/span',
				locateStrategy: 'xpath'
			},
			removeGroupNameInputField: {
				selector: '//*[@id="userGroups"]/thead/tr[2]/th[1]/div/input',
				locateStrategy: 'xpath'
			},
			removeGroupFromUser: {
				selector: '//*[@id="remuser"]/span',
				locateStrategy: 'xpath'
			},
			addFirstRowGroupsToUser:{
				selector: '//*[@id="firmGroups"]/tbody/tr/td[1]',locateStrategy: 'xpath'
			},
			removeFirstGroupFromUser: {
				selector: '//*[@id="userGroups"]/tbody/tr/td[1]',
				locateStrategy: 'xpath'
			}
			
			
			
			
		}
}
