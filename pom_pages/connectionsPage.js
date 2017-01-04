var connPageCommands = {
		go: function(){
			this.verify.visible('@connLink', 'Verified Connection tab button is visible');
			this.click('@connLink');
			this.verify.visible('@connectionsHomePage', 'Verified Connections Home Page - Manage your Cloud9 Connections');	
			this.api.pause(1000);
		},			
		addConTab:function(){
			this.verify.visible('@addConnBtn', 'Verified Add Conncetion Tab is visible');
			this.click('@addConnBtn');
			this.api.pause(1000);
		},
		editConTab: function(){
			this.waitForElementVisible('@editConnBtn',1000);
			this.click('@editConnBtn');
			this.api.pause(1000);
		},
		addConToGroupTab:function(){
			this.verify.visible('@addConnToBroupBtn','Verified Add Connections to Group Tab is visible');
			this.click('@addConnToBroupBtn');
			this.api.pause(1000);
		},
		deleteConTab:function(){
			this.verfy.visible('@delConnBtn', 'Verifed Delete Conncetion Tab is visible');
			this.click('@delConnBtn');
			this.api.pause(1000);
		},
		detailTab:function(){
			this.verfy.visible('@detailsBtn', 'Verifed Details Tab is visible');
			this.click('@detailsBtn');
			this.api.pause(1000);
		},
		exportTab:function(){
			this.verfy.visible('@exportBtn', 'Verifed Export Tab is visible');
			this.click('@exportBtn');
			this.api.pause(1000);
		},
		searchInputField:function(){
			this.verfy.visible('@searchInput', 'Verifed Search Input Field is visible');
			this.api.pause(1000);
		},		
		selectFirstRow: function(){
			this.waitForElementVisible('@connectionfirstRow',1000);
			this.click('@connectionfirstRow')
			this.api.pause(500);
		},
		selectConRow: function(){
			this.waitForElementVisible('@connectionfirstRow',5000, 'Verified Connection First Row is visible');
			this.click('@connectionfirstRow');
			this.api.pause(1000);
			this.waitForElementVisible('@connectionSecondtRow',5000, 'Verified Connection Second Row is visible');
			this.click('@connectionSecondtRow');
			this.api.pause(1000);				
		},	
		verifyConBtnLevel:function(){
			this.verify.visible('@addConnBtn','Verified Add Connection button is visible');
			this.verify.visible('@editConnBtn','Verified Edit Connection button is visible');
			this.verify.visible('@addConnToBroupBtn','Verified Add Connections to Group button is visible');
			this.verify.visible('@delConnBtn','Verified Delete Connection button is visible');
			this.verify.visible('@detailsBtn','Verified Details button is visible');
			this.verify.visible('@exportBtn','Verified Export button is visible');
			this.verify.visible('@searchInput','Verified Input Search Field is visible');			
			}
				
};

module.exports = {
		commands :[connPageCommands],
		elements: {
			connLink:{
				selector: '//*[@id="navbar"]/ul[1]/li[4]/a/h4/i',
				locateStrategy: 'xpath'
			},
			
			addConnBtn:{
				selector: '//*[@id="addConnection"]/i',
				locateStrategy: 'xpath'
			},
			editConnBtn:{
				selector: '//*[@id="editConnection"]/i',
				locateStrategy: 'xpath'
			},
			addConnToBroupBtn:{
				selector: '//*[@id="addGroupConnection"]/i',locateStrategy: 'xpath'
			},
			delConnBtn:{
				selector: '//*[@id="deleteConnection"]/i',
				locateStrategy: 'xpath'
			},
			detailsBtn:{
				selector: '//*[@id="editConnection"]/i',
				locateStrategy: 'xpath'
			},
			exportBtn:{
				selector: '//*[@id="editConnection"]/i',
				locateStrategy: 'xpath'
			},
			searchInput:{
				selector: '//*[@id="grdSearch"]',
				locateStrategy: 'xpath'
			},
			searchIcon:{
				selector: '//*[@id="ng-view"]/div[2]/div[1]/ul[1]/i',
				locateStrategy: 'xpath'
			},
			selectFirm:{
			selector: '//*[@id="ng-view"]/div[1]/div/div/div/div/a/span',
			locateStrategy: 'xpath'
			},
			selectFirmSearch: {
				selector: '//*[@id="ng-view"]/div[1]/div/div/div/div/div/div/input',
				locateStrategy: 'xpath'
			},
			
			selectFirmBar: {
				selector: '//*[@id="ng-view"]/div/h5/div/div/div/a/span',
				locateStrategy: 'xpath'
			},
			selectFirmBarSearch: {
				selector: '//*[@id="ng-view"]/div/h5/div/div/div/div/div/input',
				locateStrategy: 'xpath'
			},
			internalYes : {
				selector: '//*[@id="internalYes"]',
				locateStrategy: 'xpath'
			},
			externalYes : {
				selector: '//*[@id="internalNo"]',
				locateStrategy: 'xpath'
			},
			fromFieldBar : {
				selector: '//*[@id="connFromDropdown_chosen"]/a/span',
				locateStrategy: 'xpath'
			},
			toField : {
				selector: '//*[@id="connToDropdown_chosen"]/a/span',
				locateStrategy: 'xpath'
			},
			fromFieldInput :{
				selector : '//*[@id="connFromDropdown_chosen"]/div/div/input',
				locateStrategy: 'xpath'
			},
			connType :{
				selector : '//*[@id="vcType"]',
				locateStrategy: 'xpath'
			},
			myFirmBtnLabel :{
				selector: '//*[@id="fromButtonLabel"]',
				locateStrategy: 'xpath'
			},
			remoteFirmBtnLabel :{
				selector: '//*[@id="toButtonLabel"]',
				locateStrategy: 'xpath'
			},
			submitBtn: {
				selector: '//*[@id="connectionData"]/div[2]/button[2]',
				locateStrategy: 'xpath'
			},
			
			firstRow: {
				selector : '//*[@id="scrollable-area"]/table/tbody/tr[2]/td[1]',
				locateStrategy: 'xpath'
			},
			connectionfirstRow: {
				selector : '//tbody/tr[2]/td/input[@id="addMultiple"]',locateStrategy: 'xpath'	
			},
			connectionSecondtRow: {
				selector : '//tbody/tr[3]/td/input[@id="addMultiple"]',locateStrategy: 'xpath'	
			},

			firmNameField : '#firmName',
			commNameField: '#communityName',
			grpNameField: {
				selector: '//*[@id="groupName"]',
				locateStrategy: 'xpath'
			},
			connectionsHomePage:{
				selector: '//*[@id="ng-view"]/div[1]/div/h2',
				locateStrategy: 'xpath'
			},
			groupUser1:{
				selector: "//tbody/tr/td/input[@id='addConnection']",
				locateStrategy: 'xpath'
			},
			groupUser2:{
				selector: "//tbody/tr[2]/td/input[@id='addConnection']",
				locateStrategy: 'xpath'
			},
			addConnectionsToUsersSubmitButton:{
				selector: "//*[@id='submitGroupConnections']",
				locateStrategy: 'xpath'
			},
			toastMess:{
				selector: '//div[@class="toast-message"]',
				locateStrategy:'xpath'
			},
			btnLabelField: '#buttonLabel',
			vcinstField: '#vcInstID',
			connIdField: '#c9RefNum',
			description: '#description',
			createdByField: '#createdBy',
			createdOnField: '#createdOn'
		
			}
			


}
