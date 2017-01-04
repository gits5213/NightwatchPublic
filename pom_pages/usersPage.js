var userPageCommands = {
		go: function(){
			this.verify.visible('@usersLink', 'Verified User tab button is visible')
			this.click('@usersLink');
			this.api.pause(2000);
		},
		
		selectFirm : function(client, string){  
			this.verify.visible('@selectFirmBar', 'Verified Firm Bar is visible');
			this.click('@selectFirmBar')
			.setValue('@selectFirmBarSearch',string);
			this.api.pause(500);
			this.api.keys(client.Keys.ENTER);
			this.api.pause(1000);
		},
		selectFirmAll:function(client, string){  //MainPage Firm Bar
			this.verify.visible('@selectFirmBar2', 'Verified Firm Bar is visible');
			this.click('@selectFirmBar2');
			this.setValue('@selectFirmBarSearch2', string);
			this.api.pause(500);
			this.api.keys(client.Keys.ENTER);
			this.api.pause(1000);
		},
		
		addUserTab : function(client){ 
			this.verify.visible('@addUserBtn', 'Verified add user tab is visible');
			this.click('@addUserBtn');
			this.api.pause(3000);	
		},
		
		editUserTab: function(){
			this.verify.visible('@editUserBtn', 'Verified edit user tab is visible');
			this.click('@editUserBtn');
			this.api.pause(3000);
		},
		
		editSalesInfoTab: function(){
			this.verify.visible('@editSalesUserBtn', 'Verified edit sales info tab is visible');
			this.click('@editSalesUserBtn');
			this.api.pause(1000);
		},
		
		editAdminLevelTab: function(){
			this.verify.visible('@editAdminBtn', 'Verified edit admin level tab is visible');
			this.click('@editAdminBtn');
			this.api.pause(3000);
		},
		
		editButtonsTab: function(){
			this.verify.visible('@editBtn', 'Verified edit buttons tab is visible');
			this.click('@editBtn');
			this.api.pause(2000);
		},
		
		clickToCallTab : function(client){	
			this.verify.visible('@clicToCallBtn', 'Verified click to call tab is visible');
			this.click('@clicToCallBtn');
			client.pause(2000);
			
		},
		
		editNeighborsTab : function(client){	
			this.verify.visible('@editNeighborsBtn', 'Verified edit Neighbors tab is visible');
			this.click('@editNeighborsBtn');
			client.pause(2000);
		},
		
		editGroupsTab : function(client){	
			this.verify.visible('@editGroupsBtn', 'Verified edit groups tab is visible');
			this.click('@editGroupsBtn');
			client.pause(2000);
		},
		
		deleteUserTab : function(client){	
			this.verify.visible('@deleteUserBtn', 'Verified delete user tab is visible');
			this.click('@deleteUserBtn');
			client.pause(2000);
		},
		
		userNameSearch: function(client, dateString){
			this.clearValue('@usernameSearch');
			this.waitForElementNotVisible('@spinner',3000);
			this.setValue('@usernameSearch', dateString);
			this.api.pause(2000);
		},
		userNameSearchAll: function (user, client){
			this.clearValue('@usernameSearch');
			this.waitForElementNotVisible('@spinner',3000);
			this.setValue('@usernameSearch',user);
			this.api.pause(2000);
		},
		selectFirstRow: function(){
			this.waitForElementVisible('@firstRow',2000);
			this.click('@firstRow');
			this.api.pause(2000);
		},
		deleteCancelBtn : function(client){	
			this.verify.visible('@deleteCancelBtn', 'Verified delete cancel button is visible');
			this.click('@deleteCancelBtn');
			client.pause(2000);
		},
		
		deleteOkBtn : function(client){	
			this.verify.visible('@deleteOkBtn', 'Verified delete ok button is visible');
			this.click('@deleteOkBtn');
			client.pause(1500);
			this.getText('@toastMess',function(errorMes){
				this.verify.equal(errorMes.value,'User deleted successfully.')
			});
			client.pause(7000);
		},
		selectFirmForDeleteUser : function(client){    		
			this.click('@selectFirmBar2');
			this.api.pause(1000);
			this.setValue('@selectFirmBarSearch2','Limbo Accounts');
			client.pause(500);
			this.api.keys(client.Keys.ENTER);
			this.api.pause(1000);
		
		}
		
 };

module.exports = {
		commands :[userPageCommands],
		elements: {
			usersLink: {
				selector: '//*[@id="navbar"]/ul[1]/li[3]/a/h4/i',
				locateStrategy: 'xpath'
			},
			selectFirmBar2: {
				selector: '//*[@id="ng-view"]/div[1]/div/div/div/div',
				locateStrategy: 'xpath'
			},
			selectFirmBarSearch2: {
				selector: '//*[@id="ng-view"]/div[1]/div/div/div/div/div/div/input',
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
			addUserBtn:{
				selector: '//*[@id="ng-view"]/div[2]/div[1]/ul[1]/li[1]/i',
				locateStrategy:'xpath'
			},
			editUserBtn: {
				selector: '//*[@id="ng-view"]/div[2]/div[1]/ul[1]/li[2]/i',
				locateStrategy: 'xpath'
			},
			editSalesUserBtn: {
				selector: '//*[@id="ng-view"]/div[2]/div[1]/ul[1]/li[3]/i',
				locateStrategy: 'xpath'
			},
			editAdminBtn:{
				selector: '//*[@id="editadminlevel"]/i',
				locateStrategy:'xpath'
			},
			editBtn:{
				selector: '//*[@id="ng-view"]/div[2]/div[1]/ul[1]/li[5]/i',
				locateStrategy:'xpath'
			},
			clicToCallBtn:{
				selector: '//*[@id="ng-view"]/div[2]/div[1]/ul[1]/li[6]/i',
				locateStrategy: 'xpath'
			},
			editNeighBtn:{
				selector: '//*[@id="ng-view"]/div[2]/div[1]/ul[1]/li[7]/i',
				locateStrategy:'xpath'
			},
			editGrpsBtn:{
				selector: '//*[@id="ng-view"]/div[2]/div[1]/ul[1]/li[8]/i',
				locateStrategy:'xpath'
			},
			resetPassBtn:{
				selector: '//*[@id="ng-view"]/div[2]/div[1]/ul[1]/li[8]/i',
				locateStrategy:'xpath'
			},
			deleteUserBtn :{
				selector: '//*[@id="ng-view"]/div[2]/div[1]/ul[1]/li[10]/i',
				locateStrategy: 'xpath'
			},
			salesRptBtn:{
				selector: '//*[@id="ng-view"]/div[2]/div[1]/ul[1]/li[10]/i',
				locateStrategy:'xpath'
			},
			detailsBtn:{
				selector: '//*[@id="ng-view"]/div[2]/div[1]/ul[1]/li[13]/i',
				locateStrategy:'xpath'
			},
			exportBtn:{
				selector: '//*[@id="ng-view"]/div[2]/div[1]/ul[1]/li[14]/i',
				locateStrategy:'xpath'
			},
			usernameSearch :{
				selector: '//*[@id="scrollable-area"]/table/thead[1]/tr[2]/th[3]/div/input',
				locateStrategy: 'xpath'
			},
			firstRow: {
				selector: '//*[@id="scrollable-area"]/table/tbody/tr/td[1]',   
				locateStrategy: 'xpath'
			},
			secondRow: {
				selector: '//*[@id="scrollable-area"]/table/tbody/tr[2]/td[2]',     
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
			},
			spinner :{
				selector: '//*[@id="overlay-content"]/img',
				locateStrategy: 'xpath'
			},
			
			userTabShowingResult:{
				selector: '//*[@id="ng-view"]/div[2]/div[3]/div/ul/label',
				locateStrategy: 'xpath'
			},	
			toastMess:{
				selector: '//div[@class="toast-message"]',
				locateStrategy:'xpath'
			},
			userPageResult:{
				selector:'//*[@id="scrollable-area"]/table/tbody/tr',
				locateStrategy:'xpath'
			},
				
		}
}
