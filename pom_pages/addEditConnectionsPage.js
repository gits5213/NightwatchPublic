var connPageCommands = {
		selectFirm:function(client, dateString){
			this.verify.visible('@dropDownBar', 'Verified Select Firm Bar is visible');
			this.click('@dropDownBar');
			this.setValue('@dropDownBarSearch', dateString)
			this.api.pause(500);
			this.api.keys(client.Keys.ENTER);
			this.api.pause(1000);
		},
		internalRadioYes:function(){
			this.verify.visible('@internalYes', 'Verified Internal Radio button is visible');
			this.click('@internalYes');
			this.api.pause(1000);
		},
		createConFrom:function(client){
			this.verify.visible('@fromFieldBar', 'Verified Create Connection From is visible');
			this.click('@fromFieldBar');
			this.api.pause(500);
			this.setValue('@fromFieldInput', 'Grp 1');
			this.api.keys(client.Keys.DOWN_ARROW);
			this.api.keys(client.Keys.ENTER);
		},
		conType:function(){
			this.verify.valueContains('@connType','sPK');
		},
		myFirmBtnLevel:function(client, dateString){
			this.verify.visible('@myFirmBtnLabel', 'Verified My Firm Button Label is visible');
			this.setValue('@myFirmBtnLabel',dateString+'IntraFirmShout');
			this.api.pause(1000);
		},
		addConSubmit:function(){
			this.verify.visible('@submitBtn','Verified Add Connection button is visible');
			this.click('@submitBtn');
			this.api.pause(1000);
		},
		getAddConMess: function(){
			this.api.pause(1500);
			this.getText('@toastMess',function(errorMes){
				this.verify.equal(errorMes.value,'Connection added successfully.')
			});
			this.api.pause(7000);
		},
		groupUserSelect: function(){
			this.waitForElementVisible('@groupUser1',1000, 'Verified group user 1st row visible');
			this.click('@groupUser1');
			this.waitForElementVisible('@groupUser2',1000, 'Verified group user 2nd row visible');
			this.click('@groupUser2');
			this.waitForElementVisible('@addConnectionsToUsersSubmitButton',1000, 'Verified add connections to users button visible');
			this.api.pause(1000);
		},
		addConToUSubmit:function(){
			this.verify.visible('@addConnectionsToUsersSubmitButton','Verified Add Conncetion To Users Submit button is visible');
			this.click('@addConnectionsToUsersSubmitButton');
			this.api.pause(1000);
		},
		getaddConUSubmitToMess: function(){
			this.api.pause(1500);
			this.getText('@toastMess',function(errorMes){
				this.verify.equal(errorMes.value,'Connections added to all selected users')
			});
			this.api.pause(7000);
		}			
};
module.exports = {
		commands :[connPageCommands],
		elements: {
			selectFirm:{
			selector: '//*[@id="ng-view"]/div[1]/div/div/div/div/a/span',
			locateStrategy: 'xpath'
			},
			selectFirmSearch: {
				selector: '//*[@id="ng-view"]/div[1]/div/div/div/div/div/div/input',
				locateStrategy: 'xpath'
			},
			dropDownBar: {
				selector: '//*[@id="ng-view"]/div/h5/div/div/div/a/span',
				locateStrategy: 'xpath'
			},
			dropDownBarSearch: {
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
