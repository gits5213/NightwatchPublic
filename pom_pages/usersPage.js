var userPageCommands = {
		go: function(){
			this.verify.visible('@usersLink', 'Verified User tab button is visible')
			this.click('@usersLink');
			this.api.pause(2000);
		},
		
		selectFirm : function(string, client){    	
			this.click('@selectFirmBar')
			.setValue('@selectFirmBarSearch',string);
			this.api.pause(1000);
			this.api.keys(client.Keys.ENTER);	
		},
		
		addUserTab : function(client){ 
			this.verify.visible('@addUserBtn', 'Verified add user tab is visible');
			this.click('@addUserBtn');
			this.api.pause(1000);	
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
			this.click('@editAdminLvlBtn');
			this.api.pause(1000);
		},
		
		editButtonsTab: function(){
			this.verify.visible('@editBtn', 'Verified edit buttons tab is visible');
			this.click('@editBtn');
			this.api.pause(1000);
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
		
		selectFirstRow: function(){
			this.waitForElementVisible('@firstRow',2000);
			this.click('@firstRow');
			this.api.pause(2000);
		},
		
		c2cNameSearch: function (user, client){
			this.clearValue('@usernameSearch');
			this.setValue('@usernameSearch',user);
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
		
		editCountry: function(client, string){
			this.click('@countryDropdown');
			client.pause(1000);
			this.setValue('@countrySearch', string);
			this.api.pause(500);
			this.api.keys(client.Keys.ENTER);
			this.api.pause(1000);
		},
		
		editState: function(client, string){
			this.click('@stateDropdown');
			client.pause(1000);
			this.setValue('@stateSearch', string);
			this.api.pause(500);
			this.api.keys(client.Keys.ENTER);
			this.api.pause(1000);
			
		},
		
		editUserSubmitBtn: function(client){
		this.click('@editUserConfirmBtn');
		client.pause(1500);	
		this.getText('@toastMess',function(errorMes){
			this.verify.equal(errorMes.value,'User Preferences updated successfully.')
			});
		client.pause(7000);
		},
		
		createUser : function(client, dateString){
			client.pause(2000);
			this.waitForElementVisible('@addUserSubmitBtn',2000);
			var now = new Date();
			var dateString=(now.getHours()<10 ? '0'+now.getHours().toString() : now.getHours().toString())+''+
			(now.getMinutes()<10 ? '0'+now.getMinutes().toString() : now.getMinutes().toString())+''+
			(now.getSeconds()<10 ? '0'+now.getSeconds().toString() : now.getSeconds().toString())+''+
			(now.getMilliseconds()<10?'00'+now.getMilliseconds().toString():(now.getMilliseconds()<100?'0'+now.getMilliseconds().toString():now.getMilliseconds().toString()));

			this.waitForElementVisible('@fnameField',1000)
			.waitForElementVisible('@lnameField',1000)
			.setValue('@fnameField', 'John')
			.setValue('@lnameField','Doe'+ dateString)
			.setValue('@emailField',client.globals.email1);
			this.api.pause(1000);
			this.click('@countryDropdown');
			this.click('@countrySearch');
			this.api.pause(500);
			this.setValue('@countrySearch','United States');
			this.api.pause(500);
			this.api.keys(client.Keys.ENTER);
			this.api.pause(1000);
			this.click('@stateDropdown');
			this.click('@stateSearch');
			this.api.pause(500);
			this.setValue('@stateSearch','New York');
			this.api.pause(500);
			this.api.keys(client.Keys.ENTER);
			this.setValue('@workField',123456789)
			.setValue('@mobileField',234567890)
			.setValue('@street1','1 So Amazing Ct')
			.setValue('@street2','Penthouse')
			.setValue('@city','Real Town')
			.setValue('@zip', 77777);
			this.api.pause(1000);
			return dateString.trim();
			
		},

		voiceRecYes : function(){ 
			this.verify.visible('@voiceYes', 'Verified voice yes radio button is visible');
			this.click('@voiceYes');
			this.api.pause(1000);
			
		},
		
		voiceRecNo: function(){	
			this.verify.visible('@voiceNo', 'Verified voice no radio button is visible');
			this.click('@voiceNo');			
			this.api.pause(1000);
		},
		
		editUserSubmit: function(){
			this.verify.visible('@editUserConfirmBtn', 'Verified edit user button is visible');
			this.click('@editUserConfirmBtn');
			this.api.pause(1500);
			this.getText('@toastMess',function(errorMes){
				this.verify.equal(errorMes.value,'User Preferences updated successfully.')
			});
			this.api.pause(7000);	
		},
		
		selectC2C : function(){ 
			this.verify.visible('@c2cCheckbox', 'Verified click to call checkbox is visible');
			this.click('@c2cCheckbox');
			this.api.pause(1000);
			
		},
		userSubmit : function(client){	
			this.verify.visible('@addUserSubmitBtn', 'Verified user submit button is visible');
			this.click('@addUserSubmitBtn');
			client.pause(1000);
			
		},
		addUserSubmit : function(client){
			this.click('@addUserConfirmBtn');
			client.pause(1500);
			this.getText('@toastMess',function(errorMes){
				this.verify.equal(errorMes.value,'User added successfully.')
			});
			client.pause(7000);
		},
		
		updateUserRecord: function(client, dateString){
			this.waitForElementVisible('@fnameField',1000)
			.waitForElementVisible('@lnameField',1000)
			.clearValue('@fnameField')
			.setValue('@fnameField', 'Jane')
			.clearValue('@lnameField')
			.setValue('@lnameField','Poe'+dateString)
			.clearValue('@emailField')
			.setValue('@emailField','updateduser@c9tec.com')
			this.api.pause(1000);
			this.clearValue('@workField')
			.setValue('@workField','011-234-5294')
			.clearValue('@mobileField')
			.setValue('@mobileField','011-234-5555');	
		},
		
		selectFirmForDeleteUser : function(client){    		
			this.click('@selectFirmBar2');
			this.api.pause(1000);
			this.setValue('@selectFirmBarSearch2','Limbo Accounts');
			client.pause(500);
			this.api.keys(client.Keys.ENTER);
			this.api.pause(1000);
		
		},
		
		editAdminInfo: function(user,client,callback){  //for now 
			this.api.pause(1000);
			this.waitForElementPresent('@selectFirmBar2',3000);
			this.click('@selectFirmBar2');
			this.setValue('@selectFirmBarSearch2','Select a');
			this.api.pause(1000);
			this.api.keys(client.Keys.ENTER);
			this.waitForElementPresent('@usernameSearch',3000);
			this.click('@usernameSearch');
			this.clearValue('@usernameSearch');
			this.setValue('@usernameSearch',user);
			this.api.pause(1000);
			this.click('@firstRow'); 
			this.api.pause(1000);		
		},
		
		addUserWithPassToFirm : function(firm, client){
			this.click('@addUserBtn');
			this.api.pause(1000);
			this.click('@selectFirmBar')
			.setValue('@selectFirmBarSearch',firm);
			this.api.pause(1000);
			this.api.keys(client.Keys.ENTER);
			this.waitForElementVisible('@addUserSubmitBtn',2000);
			
			var now = new Date();
			var dateString=(now.getHours()<10 ? '0'+now.getHours().toString() : now.getHours().toString())+''+
			(now.getMinutes()<10 ? '0'+now.getMinutes().toString() : now.getMinutes().toString())+''+
			(now.getSeconds()<10 ? '0'+now.getSeconds().toString() : now.getSeconds().toString())+''+
			(now.getMilliseconds()<10?'00'+now.getMilliseconds().toString():(now.getMilliseconds()<100?'0'+now.getMilliseconds().toString():now.getMilliseconds().toString()));
			
			this.waitForElementVisible('@fnameField',1000)
			.waitForElementVisible('@lnameField',1000)
			.setValue('@fnameField', 'John')
			.setValue('@lnameField','Doe'+dateString)
			.setValue('@emailField',client.globals.email1)
			.click('@genPassBtn');
			
			this.api.pause(1000);
			var description='';
			var username='';
			var password='';
			var creds=[];
			
			this.getValue('@descField',function(result){
				description= result.value;
				var usernameIndex=description.substring(description.indexOf('Username='));
				var passwordIndex=description.substring(description.indexOf('Password='));
				
				username =usernameIndex.substring(9,usernameIndex.indexOf(' Password='));
				password =passwordIndex.substring(9,18);
				console.log("New user created.\nusername: " + username +' and password: '+password);
			});
						
			this.api.pause(1000);
			this.setValue('@workField',123456789)
			.setValue('@mobileField',234567890)
			.click('@voiceYes');
			this.api.pause(1000);
			
			this.click('@addUserSubmitBtn');
			this.waitForElementVisible('@newUserModal',2000)
			.click('@addUserConfirmBtn');
			this.api.pause(1000,function(){
				console.log("New user created.\nusername: " + username +' and password: '+password+' datestring: '+dateString);
			});

			return [dateString, username, password];
			this.api.pause(1000);
			if(callback){
				callback();
			};
		}
		
 };

module.exports = {
		commands :[userPageCommands],
		elements: {
			usersLink: {
				selector: '//*[@id="navbar"]/ul[1]/li[3]/a/h4/i',
				locateStrategy: 'xpath'
			},
			editSalesUserBtn: {
				selector: '//*[@id="ng-view"]/div[2]/div[1]/ul[1]/li[3]/i',
				locateStrategy: 'xpath'
			},
			editUserBtn: {
				selector: '//*[@id="ng-view"]/div[2]/div[1]/ul[1]/li[2]/i',
				locateStrategy: 'xpath'
			},
			addUserBtn:{
				selector: '//*[@id="ng-view"]/div[2]/div[1]/ul[1]/li[1]/i',
				locateStrategy:'xpath'
			},
			editAdminBtn:{
				selector: '//*[@id="editadminlevel"]/i',
				locateStrategy:'xpath'
			},
			editBtn:{
				selector: '//*[@id="ng-view"]/div[2]/div[1]/ul[1]/li[5]/i',
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
			editNeighBtn:{
				selector: '//*[@id="ng-view"]/div[2]/div[1]/ul[1]/li[7]/i',
				locateStrategy:'xpath'
			},	
			selectFirmBar: {
				selector: '//*[@id="ng-view"]/div/div/div/div/a/span',
				locateStrategy: 'xpath'
			},
			selectFirmBar2: {
				selector: '//*[@id="ng-view"]/div[1]/div/div/div/div',
				locateStrategy: 'xpath'
			},
			selectFirmBarSearch: {
				selector: '//*[@id="ng-view"]/div/div/div/div/div/div/input',
				locateStrategy: 'xpath'
			},
			selectFirmBarSearch2: {
				selector: '//*[@id="ng-view"]/div[1]/div/div/div/div/div/div/input',
				locateStrategy: 'xpath'
			},
			addUserSubmitBtn: {
				selector: '//*[@id="adduserdata"]/div[2]/button[2]',
				locateStrategy: 'xpath'
			},
			fnameField: {
				selector: '//*[@id="firstname"]',
				locateStrategy: 'xpath'
			},
			lnameField: {
				selector: '//*[@id="lastname"]',
				locateStrategy: 'xpath'
			},
			addUserConfirmBtn:{
				selector: '//*[@id="adduserConfirmedButton"]',
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
					
			firmName: '#firmName',
			emailField: '#email',
			username: '#username',
			genPassBtn: '#genpassword',
			workField: '#work',
			mobileField: '#mobile',
			passField1: {
				selector: '//*[@id="password"]',
				locateStrategy: 'xpath'
			},
			passField2: {
				selector: '//*[@id="verpassword"]',
				locateStrategy: 'xpath'
			},
			descField: '#description',
			voiceYes: {
				selector: '//*[@id="voiceRecordingYes"]',
				locateStrategy: 'xpath'
			},
			voiceNo: {
				selector: '//*[@id="voiceRecordingNo"]',
				locateStrategy: 'xpath'
			},
			editUserConfirmBtn:{
				selector: '//*[@id="userdata"]/div[3]/button[2]',
				locateStrategy: 'xpath'
			},
			newUserModal:{
				selector: '//*[@id="userConfirmModal"]/div[2]',
				locateStrategy: 'xpath'
			},
			usernameSearch :{
				selector: '//*[@id="scrollable-area"]/table/thead[1]/tr[2]/th[3]/div/input',
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
			addToUserEmail:{
				selector: '//*[@id="appendToUserEmail"]',
				locateStrategy: 'xpath'
			},
			
			countryDropdown: {
				selector:'//*[@id="country_chosen"]',
				locateStrategy:'xpath'
			},
			countrySearch: {
				selector:'//*[@id="country_chosen"]/div/div/input',
				locateStrategy:'xpath'
			},
			stateDropdown: {
				selector:'//*[@id="state_chosen"]',
				locateStrategy:'xpath'
			},
			stateSearch: {
				selector:'//*[@id="state_chosen"]/div/div/input',
				locateStrategy:'xpath'
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
			zip: {
				selector: '//*[@id="zip"]',
				locateStrategy: 'xpath'
			},
			country: {
				selector: '//*[@id="country"]',
				locateStrategy: 'xpath'
			},
			state: {
				selector: '//*[@id="state"]',
				locateStrategy: 'xpath'
			},
			userTabShowingResult:{
				selector: '//*[@id="ng-view"]/div[2]/div[3]/div/ul/label',
				locateStrategy: 'xpath'
			},	
			editUserHomePage:{
				selector: '//*[@id="ng-view"]/div/h5',
				locateStrategy: 'xpath'
			},
			editUserSave:{
				selector: '//*[@id="userdata"]/div[3]/button[2]',
				locateStrategy: 'xpath'
			},
			street2:{
				selector: '//*[@id="street2"]',
				locateStrategy: 'xpath'
			},
			toastMess:{
				selector: '//div[@class="toast-message"]',
				locateStrategy:'xpath'
			},
			c2cCheckbox:{
				selector: '//*[@id="monitoring"]',
				locateStrategy: 'xpath'
			},
			c2cLevel:{
				selector: '//*[@id="userdata"]/div[2]/div[7]/div[4]/label',
				locateStrategy: 'xpath'
			},
		
			clicToCallBtn:{
				selector: '//*[@id="ng-view"]/div[2]/div[1]/ul[1]/li[6]/i',
				locateStrategy: 'xpath'
			}
				
		}
}
