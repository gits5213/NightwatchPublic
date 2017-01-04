var groupsPageCommands = {
		go: function(client){
			this.api.pause(1000);
			this.verify.visible('@groupsLink', 'Verified Groups tab button is visible');
			this.click('@groupsLink');
			this.api.pause(1000);
		},
		selectFirm : function(client, string){  
			this.verify.visible('@selectFirmBar', 'Verified Firms Bar is visible');
			this.click('@selectFirmBar')
			.setValue('@selectFirmBarSearch',string);
			this.api.pause(1000);
			this.api.keys(client.Keys.ENTER);	
		},
		addGroupTab: function(client){
			this.verify.visible('@addGroupBtn', 'Verified Add Groups button is visible');
			this.click('@addGroupBtn');
			this.api.pause(1000);
			this.assert.containsText('body','Add New Group');
		},
		editGroupTab:function(client){
			this.verify.visible('@editGrpBtn', 'Verified Edit Groups button is visible');
			this.click('@editGrpBtn');
			this.api.pause(1000);
		},	
		editGroupUsersTab:function(client){
			this.verify.visible('@editGrpUsersBtn', 'Verified Edit Groups User button is visible');
			this.click('@editGrpUsersBtn');
			this.api.pause(1000);
		},
		viewGrpConTab:function(client){
			this.verify.visible('@viewGrpConnBtn', 'Verified View Group Conncetions button is visible');
			this.click('@viewGrpConnBtn');
			this.api.pause(1000);
		},
		deleteGroupTab: function(){
			this.verify.visible('@delGrpBtn', 'Verified Delete Group Button is visible');
			this.click('@delGrpBtn');
			this.api.pause(3000);
			this.waitForElementVisible('@confirmDeleteModal',1000);
		},
		detailsTab:function(){
			this.verify.visible('@detailsBtn', 'Verified Details button is visible');
			this.click('@detailsBtn');
			this.api.pause(1000);
		},
		grpNameSearch: function(client){
			this.verify.visible('@groupNameSearch', 'Verified Group Name Search input Field is visible');
			this.clearValue('@groupNameSearch');
			this.setValue('@groupNameSearch', 'Firm '+dateString+' Grp 1')
			this.api.pause(1000);
		},
		grpNameSearchAll: function(client){
			this.verify.visible('@groupNameSearch', 'Verified Group Name Search input Field is visible');
			this.clearValue('@groupNameSearch');
			this.setValue('@groupNameSearch', ' ');
			this.api.keys(client.Keys.DOWN_ARROW);
			this.api.keys(client.Keys.ENTER);
			this.api.pause(1000);
		},
		selectFirstRow: function(client){ 
			this.verify.visible('@firstRow', 'Verified First Row is visible');
			this.waitForElementVisible('@firstRow',2000);
			this.click('@firstRow')
		},
		
		deleteCancelBtn: function(){
			this.verify.visible('@deleteCancelBtn', 'Verified Cancel button is visible');
			this.click('@deleteCancelBtn');
			this.api.pause(3000);
		},
		deleteOklBtn: function(){
			this.verify.visible('@deleteOkBtn', 'Verified Ok button is visible');
			this.click('@deleteOkBtn');
			this.api.pause(3000);
			this.waitForElementNotPresent('@confirmDeleteModal',10000);
		},
		deleteGroupToastMess:function(){
			this.api.pause(1500);
			this.getText('@toastMess',function(errorMes){
				this.verify.equal(errorMes.value,'Group deleted successfully.')
				});
			this.api.pause(7000);
		}
					
};

module.exports = {
		commands :[groupsPageCommands],
		elements: {
			groupsLink:{
				selector: '//*[@id="navbar"]/ul[1]/li[2]/a/h4/i',
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
			deleteOkBtn :{
				selector:'//*[@id="confirmModal"]/div[2]/div/div[3]/button[2]',
				locateStrategy: 'xpath'
			},
			deleteCancelBtn :{
				selector: '//*[@id="confirmModal"]/div[2]/div/div[3]/button[1]',
				locateStrategy: 'xpath'
			},
			confirmDeleteModal: {
				selector: '//*[@id="confirmModal"]/div[2]/div',
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
			editGroupUserBtn:{
				selector: '//*[@id="ng-view"]/div[2]/div[1]/ul/li[3]/span',
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
			addGroupNameInputField: {
				selector: '//*[@id="firmGroups"]/thead/tr[2]/th[1]/div/input',
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
			removeFirstGroupFromUser: {
 				selector: '//*[@id="userGroups"]/tbody/tr/td[1]',
 				locateStrategy: 'xpath'
			},
			editGroupSave:{
				selector: '//*[@id="firmData"]/div[2]/button[2]',
				locateStrategy: 'xpath'				      
			},
			addGroupToUser: {
				selector: '//*[@id="adduser"]/span',
				locateStrategy: 'xpath'
			},
			toastMess:{
				selector: '//div[@class="toast-message"]',
				locateStrategy:'xpath'
			},
			doneBtn:{
				selector: '//*[@id="ng-view"]/div/form/button',
				locateStrategy: 'xpath'				      
			},
			groupPageResult: {
				selector: '//*[@id="ng-view"]/div[2]/div[3]/div/ul/label',
				locateStrategy:'xpath'
			},
			
				
		}
}
