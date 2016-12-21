var userGroupsPageCommands = {
		selectFirm : function(string, client){    	
			this.click('@selectFirmBar')
			.setValue('@selectFirmBarSearch',string);
			this.api.pause(1000);
			this.api.keys(client.Keys.ENTER);	
		},
		createNewGroup: function(client, dateString){  
			this.waitForElementVisible('@addEditSubmitBtn',2000);
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
			return dateString.trim();
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
		},
		addEditGroupSubmitBtn:function(){
			this.verify.visible('@addEditSubmitBtn', 'Verified Group Submit button is visible')
			 this.click('@addEditSubmitBtn');
			 this.api.pause(500);
		},
		addEditGSbmitTosatMess:function(){	
			this.api.pause(1500);
			this.getText('@toastMess',function(errorMes){
				this.verify.equal(errorMes.value,'Group added successfully.')
			});
			this.api.pause(7000);
		},
		addEditGUpSbmitTosatMess:function(){	
			this.api.pause(1500);
			this.getText('@toastMess',function(errorMes){
				this.verify.equal(errorMes.value,'Group updated successfully.')
			});
			this.api.pause(7000);
		},
		selectSecondtGroup:function(){
			this.click('@secondRowFirmGroups');
			this.api.pause(1000);
		},
		selectFirstGroup:function(){
			this.click('@firstRowFirmGroups');
			this.api.pause(1000);
		},
		addG2UBtn:function(){
			this.click('@addGrp2UserBtn');
			this.api.pause(1000);
		},
		doneButton:function(){
			this.click('@doneBtn');
			this.api.pause(1000);
		},

		newGrpAddToUser: function(client, dateString){
			this.click('@groupNameSearch')
			.setValue('@groupNameSearch', 'Firm '+dateString+' Grp 1')
			this.api.pause(2000);
		}		
};

module.exports = {
		commands :[userGroupsPageCommands],
		elements: {
			editGroupUserHomePage:{
				selector: '//*[@id="ng-view"]/div/h5/span',
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
			financialOption: {
				selector: '//*[@id="communityId"]/option[4]',
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
			addEditSubmitBtn: {
				selector: '//*[@id="firmData"]/div[2]/button[2]',
				locateStrategy: 'xpath'
			},
			defaultgrpYes: {
				selector: '//*[@id="defaultGroupYes"]',
				locateStrategy: 'xpath'
			},
			addGrp2UserBtn: {
				selector: '//*[@id="adduser"]/span',
				locateStrategy: 'xpath'
			},
			rmvGrpFromUserBtn: {
				selector: '//*[@id="remuser"]/span',
				locateStrategy: 'xpath'
			},
			firstRowFirmGroups: {
				selector: '//*[@id="firmGroups"]/tbody/tr/td[1]',
				locateStrategy: 'xpath'
			},
			secondRowFirmGroups: {
				selector: '//*[@id="firmGroups"]/tbody/tr/td[1]',
				locateStrategy: 'xpath'
			},
			groupNameSearch: {
				selector: '//*[@id="firmGroups"]/thead/tr[2]/th[1]/div/input',
				locateStrategy: 'xpath'
			},
			doneBtn:{
				selector: '//*[@id="ng-view"]/div/form/button',
				locateStrategy: 'xpath'
			},
			toastMess:{
				selector: '//div[@class="toast-message"]',
				locateStrategy:'xpath'
			},
			editGroupHomePage:{
				selector: '//*[@id="ng-view"]/div/h5',
				locateStrategy: 'xpath'				      
			},
			
			
		}
}
