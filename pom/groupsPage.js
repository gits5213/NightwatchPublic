var groupsPageCommands = {
		go: function(){
			this.api.pause(1000);
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
			.click('@communityBar');
			this.api.keys(client.Keys.DOWN_ARROW);
			this.api.keys(client.Keys.ENTER);
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
			this.api.pause(1000);
			
		},
		addAnotherGrpForFirm: function(dateString,client){
			this.click('@addGroupBtn');
			this.api.pause(1000);
			this.assert.containsText('body','Add New Group');
			this.click('@selectFirmBar');
			this.api.pause(500);
			this.setValue('@selectFirmBarSearch',dateString);
			this.api.pause(500);
			this.api.keys(client.Keys.ENTER);
			this.waitForElementPresent('@grpNameField',2000)
			.setValue('@grpNameField', 'Firm '+dateString+' Grp 2')
			.click('@communityBar');
			this.api.keys(client.Keys.DOWN_ARROW);
			this.api.keys(client.Keys.ENTER);
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
			this.api.pause(1000);
			
		},
		editFirstRecord: function(){
			this.waitForElementVisible('@firstRow',2000);
			this.click('@firstRow')
			.click('@editGrpBtn');
			this.api.pause(1000);
			
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
			}
		}
}
