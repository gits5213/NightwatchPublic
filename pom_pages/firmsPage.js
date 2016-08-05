var firmsPageCommands = {
		go: function(){
			this.api.pause(1000);
			this.click('@firmsLink')
		},
		addNewFirm: function(client){
			this.api.pause(1000);
			this.click('@addFirmBtn')
			.assert.containsText('body','Add Firm')
			.waitForElementVisible('@firmNameForAdd',2000);
			
			var now = new Date();
			var dateString=now.getFullYear().toString()+
			(now.getMonth()+1<10 ? '0'+(now.getMonth()+1).toString() : (now.getMonth()+1).toString())+''+
			(now.getDate()<10 ? '0'+now.getDate().toString() : now.getDate().toString())+''+
			(now.getHours()<10 ? '0'+now.getHours().toString() : now.getHours().toString())+''+
			(now.getMinutes()<10 ? '0'+now.getMinutes().toString() : now.getMinutes().toString())+''+
			(now.getSeconds()<10 ? '0'+now.getSeconds().toString() : now.getSeconds().toString())+''+
			(now.getMilliseconds()<10?'00'+now.getMilliseconds().toString():(now.getMilliseconds()<100?'0'+now.getMilliseconds().toString():now.getMilliseconds().toString()));
			//now.getMilliseconds().toString();
			
			this.setValue('@firmNameForAdd','Test Firm '+dateString)
			.setValue('@street1', '123 Main Street')
			.setValue('@street2', '17th Flr')
			.setValue('@city', 'Any City')
			.setValue('@zip', 12345)
			.setValue('@pfname','Erique')
			.setValue('@plname','Martinez')
			.setValue('@pemail',client.globals.email1)
			.setValue('@pwork', 123456789)
			.setValue('@pmobile',234567890)
			.click('@firmType');
			this.api.pause(1000);
			this.api.keys(client.Keys.DOWN_ARROW);
			this.api.keys(client.Keys.ENTER);
			
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
			
			
			this.click('@copyFrmBtn');
			this.api.pause(1000);
			
			
			
			this.click('@submitFrmBtn');
			this.api.pause(1000);
		
			return dateString.trim();
		},
		getFirmByName : function(string){
			this.click('@firmsLink')
			.clearValue('@firmNameSearch');
			this.api.pause(1000);
			this.setValue('@firmNameSearch',string);
			this.api.pause(1000);
			this.waitForElementVisible('@firstRowFirmsData',2000)
			.click('@firstRowFirmsData')
			.click('@editFirmBtn');
			this.api.pause(1000);
		},
		//
		portalFirmsTab: function(){
			this.verify.visible('@firmsTab', 'Verified Firms tab button is visible and clikable');
			this.click('@firmsTab');
			this.api.pause(2000);
		},	
		
		firmTabResultVerify: function(){
			this.waitForElementVisible('@showingResult',5000, 'Verified returning firm information result 1 to 25 on the current page');
			this.assert.containsText('@showingResult', 'Showing (1 to 25)');
		},		
		getFirmByName: function(client){
			this.waitForElementVisible('@firmNameSearch',5000, 'Verified Firms name search field enable');
			this.api.pause(1000);
			this.clearValue('@firmNameSearch');
			//this.api.pause(1000);
			this.click('@firmNameSearch');
			//this.api.pause(2000);
			this.setValue('@firmNameSearch',' ');
			this.api.keys(client.Keys.DOWN_ARROW);
			this.api.keys(client.Keys.ENTER);
			this.api.pause(1000);
			this.waitForElementVisible('@firstRowFirmsData',5000, 'Verifed the searching result narrowing!');
			this.click('@firstRowFirmsData');
			this.api.pause(2000);
		},	
		getEditFirmByChangingAddress: function(){
			this.verify.visible('@editFirmBtn', 'Verified Edit Firm button is visible and clikable');
			this.click('@editFirmBtn');
			this.waitForElementVisible('@street2Field',1000, 'Verified Street2 search field enable and enput random floor number');
			this.clearValue('@street2Field').click('@street2Field');
			
			var randomNumber = Math.floor((Math.random() * 20) + 4);
			console.log(randomNumber)
			this.setValue('@street2Field', randomNumber + 'th floor');
			this.waitForElementVisible('@saveChangesBtn',1000, 'Verified save changes button enable and clickable');
			this.click('@saveChangesBtn');
			this.verify.visible('@saveChangesBtn', 'Verified changed being saved and functions are working properly');
			this.api.pause(1500);		
		},	
		manageGroupBtn: function(client){		
			this.verify.visible('@manageGroupsBtn','Verified Manage Group button is visible and clikable');
			this.click('@manageGroupsBtn');
			this.waitForElementVisible('@manageGroupHomePage',2000, 'Verified Manage Group home page - Manage your Cloud9 Groups');
			this.api.pause(1500);	
		},		
		manageConnectionsBtn: function(client){			
			this.verify.visible('@manageConBtn','Verified Manage Connections button is visible and clikable');
			this.click('@manageConBtn');
			this.waitForElementVisible('@manageConHomePage',2000, 'Verified Manage Collections home page - Manage your Cloud9 Connections');
			this.api.pause(1500);
		},
		manageUsersBtn: function(client){			
			this.verify.visible('@manageUsersBtn','Verified Manage Users button is visible and clikable');
			this.click('@manageUsersBtn');
			this.waitForElementVisible('@manageUsersHomePage',2000, 'Verified Manage Users home page - Manage your Cloud9 Users');
			this.api.pause(1500);
		},
		getDetailsBtn: function(client){
			this.clearValue('@firmNameSearch');
			this.waitForElementVisible('@detailsBtn',5000,'Verified Details button is visible and clikable');
			this.click('@detailsBtn');
			this.waitForElementVisible('@detailsFirmID',5000, 'Verified Details expand with all information - Firm ID');
			
			this.verify.visible('@detailsBtn','Verified Details button is visible and clikable');
			this.click('@detailsBtn');
			this.waitForElementVisible('@detailsFirmName',2000, 'Verified Details collapse and go back to the normal page - Firm Name');
			this.api.pause(1500);
		}
		//
};

module.exports = {
		commands :[firmsPageCommands],
		elements: {
			firmsLink:{
				selector: '//*[@id="navbar"]/ul[1]/li[1]/a/h4/i',
				locateStrategy: 'xpath'
			},
			addFirmBtn:{
				selector: '//*[@id="ng-view"]/div[2]/div[1]/ul/li[1]/i',
				locateStrategy: 'xpath'
			},
			editFirmBtn:{
				selector: '//*[@id="ng-view"]/div[2]/div[1]/ul/li[2]/i',
				locateStrategy: 'xpath'
			},
			manageGrpBtn:{
				selector: '//*[@id="ng-view"]/div[2]/div[1]/ul/li[3]/i',
				locateStrategy: 'xpath'
			},
			manageConnBtn:{
				selector: '//*[@id="ng-view"]/div[2]/div[1]/ul/li[4]/i',
				locateStrategy: 'xpath'
			},
			manageUsersBtn:{
				selector: '//*[@id="ng-view"]/div[2]/div[1]/ul/li[5]/i',
				locateStrategy: 'xpath'
			},
			buttonsRptBtn:{
				selector: '//*[@id="ng-view"]/div[2]/div[1]/ul/li[6]/i',
				locateStrategy: 'xpath'
			},
			detailsBtn:{
				selector: '//*[@id="ng-view"]/div[2]/div[1]/ul/li[7]/i',
				locateStrategy: 'xpath'
			},
			exportBtn: {
				selector: '//*[@id="ng-view"]/div[2]/div[1]/ul/li[8]/i',
				locateStrategy: 'xpath'
			},
			
			firmNameSearch:{
				selector: '//*[@id="scrollable-area"]/table/thead[1]/tr[2]/th[1]/div/input',
				locateStrategy: 'xpath'
			},
			
			firmNameForAdd: {
				selector: '//*[@id="name"]',
				locateStrategy: 'xpath'
			},
			street1 : 'input[name=street1]',
			street2 : 'input[name=street2]',
			city : 'input[name=city]',
			zip: 'input[name=zip',
			pfname: 'input[name=provisionerFirstName]',
			plname: 'input[name=provisionerLastName]',
			pemail: 'input[name=provisionerEmail]',
			pwork: 'input[name=work]',
			pmobile: 'input[name=mobile]',
			firmType: 'select[name=firmType]',
			
			billFname: 'input[name=billFirst]',
			billLname: 'input[name=billLast]',
			billEmail: 'input[name=billEmail]',
			billWork: 'input[name=billWork]',
			billMobile: 'input[name=billMobile]',
			billStr1: 'input[name=billStreet1]',
			billStr2: 'input[name=billStreet2]',
			billCity: 'input[name=billCity]',
			billState: 'input[name=billState]',
			billZip: 'input[name=billZip]',
			
			copyFrmBtn: '#copyfirm',
			
			submitFrmBtn: {
				selector: '//*[@id="firmData"]/div[2]/button[2]',
				locateStrategy: 'xpath'
			},
			
			firstRowFirmsData:{
				selector: '//*[@id="scrollable-area"]/table/tbody/tr/td[1]',
				locateStrategy: 'xpath'
			},
			

			okButton:{
				selector: "(//button[@type='button'])[4]",
				locateStrategy: 'xpath'
			},
			
			countryDropdown:{
				selector: '//*[@id="mailingCountry_chosen"]',
				locateStrategy: 'xpath'
			},
			countrySearch: {
				selector: '//*[@id="mailingCountry_chosen"]/div/div/input',
				locateStrategy: 'xpath'
			},
			stateDropdown:{
				selector: '//*[@id="mailingState_chosen"]',
				locateStrategy: 'xpath'
			},
			stateSearch: {
				selector: '//*[@id="mailingState_chosen"]/div/div/input',
				locateStrategy: 'xpath'
			},
			country: {
				selector: '//*[@id="mailingCountry"]',
				locateStrategy: 'xpath'
			},
			state: {
				selector: '//*[@id="mailingState"]',
				locateStrategy: 'xpath'
			},
			billCountry: {
				selector: '//*[@id="billCountry"]',
				locateStrategy: 'xpath'
			},
			billState: {
				selector: '//*[@id="billState"]',
				locateStrategy: 'xpath'
			},
			
			//--
			firmsTab:{
				selector: '//*[@id="navbar"]/ul[1]/li[1]/a/h4/i',locateStrategy: 'xpath'
			},		
			showingResult:{
				selector: '//*[@id="ng-view"]/div[2]/div[3]/div/ul/label',locateStrategy: 'xpath'
			},
			firmNameSearch:{
				selector: '//*[@id="scrollable-area"]/table/thead[1]/tr[2]/th[1]/div/input',locateStrategy: 'xpath'
			},
			firstRowFirmsData:{
				selector: '//*[@id="scrollable-area"]/table/tbody/tr/td[1]',locateStrategy: 'xpath'
			},
			editFirmBtn:{
				selector: '//*[@id="ng-view"]/div[2]/div[1]/ul/li[2]/i',locateStrategy: 'xpath'
			},		
			street2Field:{
				selector: '//*[@id="street2"]',locateStrategy: 'xpath'
			},
			saveChangesBtn:{
				selector: '//*[@id="firmData"]/div[2]/button[2]',locateStrategy: 'xpath'
			},
			manageGroupsBtn:{
				selector: '//*[@id="ng-view"]/div[2]/div[1]/ul/li[3]/span',locateStrategy: 'xpath'
			},
			manageGroupHomePage:{
				selector: '//*[@id="ng-view"]/div[1]/div/h2',locateStrategy: 'xpath'
			},			
			manageConBtn:{
				selector: '//*[@id="ng-view"]/div[2]/div[1]/ul/li[4]/span',locateStrategy: 'xpath'
			},			
			manageConHomePage:{
				selector: '//*[@id="ng-view"]/div[1]/div/h2',locateStrategy: 'xpath'
			},
			manageUsersBtn:{
				selector: '//*[@id="ng-view"]/div[2]/div[1]/ul/li[5]/span',locateStrategy: 'xpath'
			},
			manageUsersHomePage:{
				selector: '//*[@id="ng-view"]/div[1]/div/h2',locateStrategy: 'xpath'
			},
			detailsBtn:{
				selector: '//*[@id="ng-view"]/div[2]/div[1]/ul/li[6]/span',locateStrategy: 'xpath'
			},		
			detailsFirmID:{
				selector: '//span[contains(.,"Firm ID")]',locateStrategy: 'xpath'
			},
			detailsFirmName:{
				selector: '//*[@id="scrollable-area"]/table/thead[1]/tr[1]/th[1]/div/span',locateStrategy: 'xpath'
			}
		//	
		
		}
}