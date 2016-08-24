var userPageCommands = {
		go: function(){
			this.verify.visible('@usersLink', 'Verified User tab button is visible and clikable')
			this.click('@usersLink');
			this.api.pause(2000);
		},
		addUserToFirm : function(firm, client, dateString){    			
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
			.setValue('@zip', 77777)
			.click('@voiceYes');
			this.api.pause(1000);
			this.click('@addUserSubmitBtn');		
			this.waitForElementVisible('@newUserModal',2000)
			.click('@addUserConfirmBtn')
			.waitForElementNotPresent('@newUserModal',30000);
			return dateString.trim();
			
		},
		updateFirstRecord: function(dateString){
			this.go();
			this.clearValue('@usernameSearch')
			.waitForElementNotVisible('@spinner',3000)
			.setValue('@usernameSearch','johndoe'+dateString);
			this.waitForElementVisible('@firstRow',2000);
			this.click('@firstRow')
			.click('@editUserBtn');
			this.api.pause(1000);
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
			.setValue('@mobileField','011-234-5555')
			.click('@voiceNo');			
			this.api.pause(1000);
			this.click('@editUserConfirmBtn');
			this.api.pause(1000);
			
		},
		deleteUser: function(dateString,client){
			this.go();
			this.clearValue('@usernameSearch')
			.setValue('@usernameSearch','johndoe'+dateString);
			this.api.pause(1000);
			this.waitForElementVisible('@firstRow',2000);
			this.click('@firstRow')
			this.api.pause(1000);
			this.click('@deleteUserBtn')
			.waitForElementVisible('@confirmDeleteModal',1000)
			.click('@deleteCancelBtn')
			.click('@deleteUserBtn')
			.waitForElementVisible('@confirmDeleteModal',1000)
			.click('@deleteOkBtn');
			this.waitForElementNotPresent('@confirmDeleteModal',10000);
			this.waitForElementNotPresent('@firstRow',2000);
			this.clearValue('@usernameSearch');
			
			this.click('@selectFirmBar2');
			this.api.pause(1000);
			this.setValue('@selectFirmBarSearch2','Select a');
			this.api.keys(client.Keys.ENTER);
			
			this.api.pause(1000);
			this.setValue('@usernameSearch','johndoe'+dateString);
			
			this.api.pause(1000)
		},
		
		editSalesInfo: function(){
			this.api.pause(1000);
			this.click('@firstRow')
			.click('@editSalesUserBtn');
			this.api.pause(1000);
		},
		
		editAdminInfo: function(user,client,callback){
			this.api.pause(1000);
			this.waitForElementPresent('@selectFirmBar2',3000)
			this.click('@selectFirmBar2')
			this.setValue('@selectFirmBarSearch2','Select a');
			this.api.pause(1000);
			this.api.keys(client.Keys.ENTER);
			this.waitForElementPresent('@usernameSearch',3000);
			this.click('@usernameSearch');
			this.setValue('@usernameSearch',user);
			this.api.pause(1000);
			//this.click('@secondRow');  //firstRow
			this.click('@firstRow'); //for new_user_login
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
			}
		},
		editFirstRecord: function(){
			this.waitForElementVisible('@firstRow',5000);
			this.click('@firstRow')
			.click('@editUserBtn');
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
				selector: '//*[@id="ng-view"]/div[2]/div[1]/ul[1]/li[7]/i',
				locateStrategy:'xpath'
			},
			resetPassBtn:{
				selector: '//*[@id="ng-view"]/div[2]/div[1]/ul[1]/li[8]/i',
				locateStrategy:'xpath'
			},
			deleteUserBtn :{
				selector: '//*[@id="ng-view"]/div[2]/div[1]/ul[1]/li[9]/i',
				locateStrategy: 'xpath'
			},
			salesRptBtn:{
				selector: '//*[@id="ng-view"]/div[2]/div[1]/ul[1]/li[10]/i',
				locateStrategy:'xpath'
			},
			detailsBtn:{
				selector: '//*[@id="ng-view"]/div[2]/div[1]/ul[1]/li[12]/i',
				locateStrategy:'xpath'
			},
			exportBtn:{
				selector: '//*[@id="ng-view"]/div[2]/div[1]/ul[1]/li[13]/i',
				locateStrategy:'xpath'
			},
			editNeighBtn:{
				selector: '//*[@id="ng-view"]/div[2]/div[1]/ul[1]/li[6]/i',
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
				selector: '//*[@id="scrollable-area"]/table/tbody/tr/td[1]',  //first Row   
				locateStrategy: 'xpath'
			},
			
			secondRow: {
				selector:  '//*[@id="scrollable-area"]/table/tbody/tr[2]',    //Second Row  
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
				selector: '//*[@id="ng-view"]/div[2]/div[3]/div/ul/label',locateStrategy: 'xpath'
			},	
			editUserHomePage:{
				selector: '//*[@id="ng-view"]/div/h5',locateStrategy: 'xpath'
			},
			editUserSave:{
				selector: '//*[@id="userdata"]/div[3]/button[2]',locateStrategy: 'xpath'
			},
			street2:{
				selector: '//*[@id="street2"]',locateStrategy: 'xpath'
			}
			
		}
}
