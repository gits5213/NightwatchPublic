var userPageCommands = {
		go: function(){
			this.api.pause(1000);
			this.click('@usersLink');
			this.api.pause(1000);
			this.waitForElementNotVisible('@spinner',4000)
		},
		addUserToFirm : function(firm,client){
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
			this.setValue('@workField',123456789)
			.setValue('@mobileField',234567890)
			.click('@voiceYes');
			this.api.pause(1000);
			/*
			var username = this.getValue('@username');
			var description =this.getValue('@descField').toString();
			var password = description.substring((description.indexOf(' Password=')+10),8);
			//console.log('username: '+username,' and password: '+password);
			*/
			this.click('@addUserSubmitBtn');
			this.waitForElementVisible('@newUserModal',2000)
			.click('@addUserConfirmBtn');
			this.api.pause(1000);
			
			return dateString;
			
		},
		editFirstRecord: function(){
			this.waitForElementVisible('@firstRow',2000);
			this.click('@firstRow')
			.click('@editUserBtn');
			this.api.pause(1000);
			
		},
		editRecord: function(){
			this.click('@editUserBtn');
			this.api.pause(1000);
			
		},
		updateFirstRecord: function(dateString){
			this.go();
			this.clearValue('@usernameSearch')
			.waitForElementNotVisible('@spinner',3000)
			.setValue('@usernameSearch','johndoe'+dateString);
			//this.api.pause(1000);
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
			.waitForElementNotVisible('@spinner',5000)
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
			this.api.pause(1000);
			this.assert.elementNotPresent('@firstRow')
			.clearValue('@usernameSearch')
			
			.waitForElementVisible('@selectFirmBar2',2000)
			.click('@selectFirmBar2');
			this.api.pause(1000);
			this.setValue('@selectFirmBarSearch2','Select a');
			this.api.pause(1000);
			this.api.keys(client.Keys.ENTER);
			this.api.pause(1000);
			this.waitForElementVisible('@spinner',2000)
			.waitForElementNotVisible('@spinner',30000)
			this.setValue('@usernameSearch','johndoe'+dateString);
			this.api.pause(1000)
			/*
			
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
			*/
		}
};

module.exports = {
		commands :[userPageCommands],
		elements: {
			usersLink: {
				selector: '//*[@id="navbar"]/ul[1]/li[3]/a/h4/i',
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
			selectFirmBar: {
				selector: '//*[@id="ng-view"]/div/div/div/div/a/span',
				locateStrategy: 'xpath'
			},
			selectFirmBar2: {
				selector: '//*[@id="ng-view"]/div[1]/div/div/div/div/a/span',
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
				selector: '//*[@id="adduserdata"]/div[7]/button[2]',
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
			firmName: '#firmName',
			emailField: '#email',
			username: '#username',
			genPassBtn: '#genpassword',
			workField: '#work',
			mobileField: '#mobile',
			passField1: '#password',
			passField2: '#verpassword',
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
				selector: '//*[@id="userdata"]/div[7]/button[2]',
				locateStrategy: 'xpath'
			},
			newUserModal:{
				selector: '//*[@id="userConfirmModal"]/div[2]/div',
				locateStrategy: 'xpath'
			},
			usernameSearch :{
				selector: '//*[@id="scrollable-area"]/table/thead[1]/tr[2]/th[3]/div/input',
				locateStrategy: 'xpath'
			},
			
			
			deleteUserBtn :{
				selector: '//*[@id="ng-view"]/div[2]/div[1]/ul[1]/li[9]/i',
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
			}
			
			
		}
}
