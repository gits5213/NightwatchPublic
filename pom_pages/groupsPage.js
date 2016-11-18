var groupsPageCommands = {
		go: function(client){
			this.api.pause(1000);
			this.verify.visible('@groupsLink', 'Verified Groups tab button is visible');
			this.click('@groupsLink');
			this.api.pause(1000);
		},
		
		addGroupTab: function(client){
			this.click('@addGroupBtn');
			this.api.pause(1000);
		},
		
		addGroupTab: function(client){
			this.click('@addGroupBtn');
			this.api.pause(1000);
			this.assert.containsText('body','Add New Group');
		},
		
		selectFirstRow: function(client){   //editFirstRecord
			this.waitForElementVisible('@firstRow',2000);
			this.click('@firstRow')
		},
		
		editGroupTab:function(client){
			this.click('@editGrpBtn');
			this.api.pause(1000);
		},		
		grpNameSearch: function(client){
			this.clearValue('@groupNameSearch');
			this.setValue('@groupNameSearch', 'Firm '+dateString+' Grp 1')
			this.api.pause(1000);
		},
		selectFirm : function(string, client){    	
			this.click('@selectFirmBar')
			.setValue('@selectFirmBarSearch',string);
			this.api.pause(1000);
			this.api.keys(client.Keys.ENTER);	
		},
		addGrpForFirm: function(client, dateString){
			this.waitForElementPresent('@grpNameField',2000)
			.setValue('@grpNameField', 'Firm '+dateString+' Grp 1')
			.click('@communityBar')
			.click('@financialOption')
			.clearValue('@contactFname');
			this.setValue('@contactFname','Howard')
			.clearValue('@contactLname')
			.setValue('@contactLname','Hughes')
			.clearValue('@contactEmail')
			.setValue('@contactEmail',client.globals.email1)
			.click('@defaultgrpYes')
			.clearValue('@street1')
			.setValue('@street1','456 Wall Street')
			.clearValue('@street2')
			.setValue('@street2', 'Suite 100')
			.clearValue('@city')
			.setValue('@city','Any City')
			.setValue('@state','NY')
			.clearValue('@zip')
			.setValue('@zip',67890)
			.setValue('@country','USA')
			.setValue('@website','http://c9tec.com')
			.setValue('@description','New Group for Testing')
			.click('@submitBtn');
			this.api.pause(1000);
			this.waitForElementVisible('@toastMess',6000,'Firm was successfully created');
			this.waitForElementNotPresent('@toastMess',10000,'Confirmation modal gone');
			
		},
	
		addAnotherGrpForFirm: function(client, dateString){
			this.waitForElementPresent('@grpNameField',2000)
			.setValue('@grpNameField', 'Firm '+dateString+' Grp 2')
			.click('@communityBar')
			.click('@financialOption')
			.clearValue('@contactFname');
			this.setValue('@contactFname','Jonathan')
			.clearValue('@contactLname')
			.setValue('@contactLname','Jengo')
			.clearValue('@contactEmail')
			.setValue('@contactEmail', client.globals.email1)
			.clearValue('@street1')
			.setValue('@street1','123 Main Street')
			.clearValue('@street2')
			.setValue('@street2', 'Suite 17')
			.clearValue('@city')
			.setValue('@city','Any City')
			.setValue('@state','NY')
			.clearValue('@zip')
			.setValue('@zip',12345)
			.setValue('@country','USA')
			.setValue('@website','http://c9tec.com')
			.setValue('@description','Another new Group for Testing')
			.click('@submitBtn');
			this.api.pause(3000);
			this.waitForElementVisible('@toastMess',6000,'Firm was successfully created');
			this.waitForElementNotPresent('@toastMess',10000,'Confirmation modal gone');
		},

		createNewGroup: function(dateString,client){  //Admin Privileges - 1 & 2 
			
			this.waitForElementVisible('@submitBtn',2000);
			var now = new Date();
			var dateString=now.getFullYear().toString()+
			(now.getMonth()+1<10 ? '0'+(now.getMonth()+1).toString() : (now.getMonth()+1).toString())+''+
			(now.getDate()<10 ? '0'+now.getDate().toString() : now.getDate().toString())+''+
			(now.getHours()<10 ? '0'+now.getHours().toString() : now.getHours().toString())+''+
			(now.getMinutes()<10 ? '0'+now.getMinutes().toString() : now.getMinutes().toString())+''+
			(now.getSeconds()<10 ? '0'+now.getSeconds().toString() : now.getSeconds().toString())+''+
			(now.getMilliseconds()<10?'00'+now.getMilliseconds().toString():(now.getMilliseconds()<100?'0'+now.getMilliseconds().toString():now.getMilliseconds().toString()));
				
			this.assert.containsText('body','Add New Group');
			this.waitForElementPresent('@grpNameField',2000)
			.setValue('@grpNameField', 'Firm '+dateString+' Grp 1')
			.click('@communityBar')
			.click('@financialOption')
			.clearValue('@contactFname');
			this.setValue('@contactFname','Howard')
			.clearValue('@contactLname')
			.setValue('@contactLname','Hughes')
			.clearValue('@contactEmail')
			.setValue('@contactEmail',client.globals.email1)
			.click('@defaultgrpYes')
			.clearValue('@street1')
			.setValue('@street1','456 Wall Street')
			.clearValue('@street2')
			.setValue('@street2', 'Suite 100')
			.clearValue('@city')
			.setValue('@city','Any City')
			.setValue('@state','NY')
			.clearValue('@zip')
			.setValue('@zip',67890)
			.setValue('@country','USA')
			.setValue('@website','http://c9tec.com')
			.setValue('@description','New Group for Testing')
			.click('@submitBtn');
			this.waitForElementVisible('@toastMess',6000,'Firm was successfully created');
			this.waitForElementNotPresent('@toastMess',10000,'Confirmation modal gone');	
			return dateString.trim();
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
		},

		deleteNewGroup: function(client){
			this.click('@delGrpBtn');
			client.pause(3000);
			this.waitForElementVisible('@confirmDeleteModal',1000);
			this.click('@deleteCancelBtn');
			client.pause(3000);
			this.click('@delGrpBtn');
			this.api.pause(4000);
			this.waitForElementVisible('@confirmDeleteModal',1000);
			this.click('@deleteOkBtn');
			client.pause(3000);
			this.waitForElementNotPresent('@confirmDeleteModal',10000);
			client.pause(1000);	
			this.waitForElementVisible('@toastMess',6000);
			this.getText('@toastMess',function(errorMes){
				this.verify.equal(errorMes.value,'Group deleted successfully.')
				});
			client.pause(7000);
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
				selector: '//*[@id="scrollable-area"]/table/thead[1]/tr[2]/th[1]/div/input',
				locateStrategy: 'xpath'
			},
			firstRowGroupsData:{
				selector: '//*[@id="scrollable-area"]/table/tbody/tr/td[1]',
				locateStrategy: 'xpath'
			},
			editGroupBtn:{
				selector: '//*[@id="ng-view"]/div[2]/div[1]/ul/li[2]/span',
				locateStrategy: 'xpath'	
			},
			editGroupHomePage:{
				selector: '//*[@id="ng-view"]/div/h5',
				locateStrategy: 'xpath'				      
			},
			editGroupSave:{
				selector: '//*[@id="firmData"]/div[2]/button[2]',
				locateStrategy: 'xpath'				      
			},
			editGroupUserBtn:{
				selector: '//*[@id="ng-view"]/div[2]/div[1]/ul/li[3]/span',
				locateStrategy: 'xpath'				      
			},
			editGroupUserHomePage:{
				selector: '//*[@id="ng-view"]/div/h5/span',
				locateStrategy: 'xpath'				      
			},
			doneBtn:{
				selector: '//*[@id="ng-view"]/div/form/button',
				locateStrategy: 'xpath'				      
			},		
			groupDescription:{
				selector: '//span[contains(.,"Description")]',
				locateStrategy: 'xpath'				      
			},
			detailsFirmName:{
				selector: '//*[@id="scrollable-area"]/table/thead[1]/tr[1]/th[1]/div/span',
				locateStrategy: 'xpath'
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
			},
			toastMess:{
				selector: '//div[@class="toast-message"]',
				locateStrategy:'xpath'
			},
			removeFirstGroupFromUser: {
 				selector: '//*[@id="userGroups"]/tbody/tr/td[1]',
 				locateStrategy: 'xpath'
			},
			confirmDeleteModal: {
				selector: '//*[@id="confirmModal"]/div[2]/div',
				locateStrategy: 'xpath'
			},
			deleteCancelBtn :{
				selector: '//*[@id="confirmModal"]/div[2]/div/div[3]/button[1]',
				locateStrategy: 'xpath'
			},
			deleteOkBtn :{
				selector:'//*[@id="confirmModal"]/div[2]/div/div[3]/button[2]',
				locateStrategy: 'xpath'
			}
				
		}
}
