var c9PortalSmokeTestCommand = {
		c9AdminLogin: function(client){
			this.waitForElementVisible('@usernameField',2000, 'Verified UserName Field is enable');
			this.waitForElementVisible('@passwordField',2000, 'Verified PassWord Field is enable');
			this.waitForElementVisible('@signInButton',2000, 'Verified Sign in button is enable and clikable');
			this.setValue('@usernameField',client.globals.adminUsername);
			this.setValue('@passwordField', client.globals.adminPassword);
			this.click('@signInButton');
			this.waitForElementVisible('@alert',5000, 'Verified Modal dialog popup is appear with WARNING header');
			this.assert.containsText('div.modal-header', '**WARNING**');
			this.click('@okButton');
			this.api.pause(1500);
			
			//Portal Home Page Verified
			this.verify.visible('@portalHomePage', 'Verified Portal Home Page - Welcome to the Cloud9 Portal');	
			this.api.pause(2000);
		},	
		portalFirmsTab: function(){
			this.verify.visible('@firmsTab', 'Verified Firms tab button is visible and clikable');
			this.click('@firmsTab');
			this.api.pause(2000);
		},	
		
		firmTabResultVerify: function(){
			this.waitForElementVisible('@showingResult',5000, 'Verified returning firm information result 1 to 25 on the current page');
			this.assert.containsText('@showingResult', 'Showing (1 to 25) of');
		},		
		getFirmByName: function(client){
			this.waitForElementVisible('@firmNameSearch',5000, 'Verified Firms name search field enable');
			this.api.pause(1000);
			this.clearValue('@firmNameSearch');
			//this.api.pause(1000);
			this.click('@firmNameSearch');
			//this.api.pause(2000);
			this.setValue('@firmNameSearch','000 Firm A');
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
		},
		//---------------------------------------------------------------------------------------------------------------------
		portalGroupsTab: function(client){
			this.verify.visible('@groupsTab', 'Verified Groups tab button is visible and clikable');
			this.click('@groupsTab');
			this.api.pause(2000);
		},
			
		getGroupByName: function(client){
			this.waitForElementVisible('@groupNameSearch',5000, 'Verified Firms name search field enable');
			this.api.pause(1000);
			this.clearValue('@groupNameSearch');
			//this.api.pause(1000);
			this.click('@groupNameSearch');
			//this.api.pause(1000);
			this.setValue('@groupNameSearch','Firm A Group X');
			this.api.keys(client.Keys.DOWN_ARROW);
			this.api.keys(client.Keys.ENTER);
			this.api.pause(1000);
			this.waitForElementVisible('@firstRowGroupsData',5000, 'Verifed the searching result narrowing!');
			this.click('@firstRowGroupsData');
			this.api.pause(2000);		
		},	
		getEditGroup: function(){
			this.verify.visible('@editGroupBtn', 'Verified Edit Group button is visible and clikable');
			this.click('@editGroupBtn');
			this.waitForElementVisible('@editGroupHomePage',1000, 'Verified Edit Group home page - Edit Group');
			this.expect.element('@editGroupHomePage').text.to.contain('Edit Group');
			this.waitForElementVisible('@editGroupSave',1000, 'Verified Edit Group Save button enable and clickable');
			this.click('@editGroupSave');
			this.api.pause(2000);				
		},
		getEditGroupUsers: function(){
			this.verify.visible('@editGroupUserBtn', 'Verified Edit Group User button is visible and clikable');
			this.click('@editGroupUserBtn');
			this.waitForElementVisible('@editGroupUserHomePage',1000, 'Verified selected group name on the group home page header');
			this.expect.element('@editGroupHomePage').text.to.contain('Firm A Group X');
			this.waitForElementVisible('@doneBtn',1000, 'Verified Done button enable and clickable');
			this.click('@doneBtn');
			this.api.pause(2000);				
		},
		groupDetailsBtn: function(){
			this.clearValue('@groupNameSearch');
			this.waitForElementVisible('@detailsBtn',1000,'Verified Details button is visible and clikable');
			this.click('@detailsBtn');
			this.waitForElementVisible('@groupDescription',5000, 'Verified Details expand with all information - Description');
			this.verify.visible('@detailsBtn','Verified Details button is visible and clikable');
			this.click('@detailsBtn');
			this.waitForElementVisible('@detailsFirmName',2000, 'Verified Details collapse and go back to the normal page - Group Name');
			this.api.pause(1500);
		},
		//-------------------------------------------------------------------------------------
		
		portalUsersTab: function(client){
			
			
			
			
		},
		portalConnectionsTab: function(client){
			
			
			
			
		},
		portalRecordingsTab: function(client){
			
			
			
			
		},
		portalViewLogsTab: function(client){
			
			
			
			
		},
		portalReportsTab: function(client){
			
			
			
			
		},
		portalHelpTab: function(client){
			
			
			
			
		}
			
	};

	module.exports = {
		commands :[c9PortalSmokeTestCommand],
		elements: {
			//LogIn Home Page
			usernameField:{
				selector: '//*[@id="username"]',
				locateStrategy: 'xpath'
			},
			passwordField:{
				selector: '//*[@id="password"]',
				locateStrategy: 'xpath'
			},
			signInButton: {
				selector: '//*[@id="signin"]',
				locateStrategy: 'xpath'
			},
			alert:{
				selector: 'div.modal-dialog'
			},
			okButton:{
				selector: "(//button[@type='button'])[4]",
				locateStrategy: 'xpath'
			},
			
			portalHomePage:{
				selector: '//*[@id="ng-view"]/div/div[1]/div/div/div/div/h1',
				locateStrategy: 'xpath'
			},
					
			//Firms Tab --------------------------------------------------------------------------------
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
			},
			
			//------------------------------------------------------------------------------------------------------
						
			//Groups Tab 
			groupsTab:{
				selector: '//*[@id="navbar"]/ul[1]/li[2]/a/h4/i',locateStrategy: 'xpath'
			},
			groupNameSearch:{
				selector: '//*[@id="scrollable-area"]/table/thead[1]/tr[2]/th[1]/div/input',locateStrategy: 'xpath'
			},
			firstRowGroupsData:{
				selector: '//*[@id="scrollable-area"]/table/tbody/tr/td[1]',locateStrategy: 'xpath'
			},
			editGroupBtn:{
				selector: '//*[@id="ng-view"]/div[2]/div[1]/ul/li[2]/span',locateStrategy: 'xpath'				      
			},
			editGroupHomePage:{
				selector: '//*[@id="ng-view"]/div/h5',locateStrategy: 'xpath'				      
			},
			editGroupSave:{
				selector: '//*[@id="firmData"]/div[2]/button[2]',locateStrategy: 'xpath'				      
			},
			editGroupUserBtn:{
				selector: '//*[@id="ng-view"]/div[2]/div[1]/ul/li[3]/span',locateStrategy: 'xpath'				      
			},
			editGroupUserHomePage:{
				selector: '//*[@id="ng-view"]/div/h5/span',locateStrategy: 'xpath'				      
			},
			doneBtn:{
				selector: '//*[@id="ng-view"]/div/form/button',locateStrategy: 'xpath'				      
			},		
			groupDescription:{
				selector: '//span[contains(.,"Description")]',locateStrategy: 'xpath'				      
			},		
			//------------------------------------------------------------------------
			
			
			
			
			
			
			
			
			
			
			
			
			
			//Users Tab 
			usersTab:{
				selector: '//*[@id="navbar"]/ul[1]/li[3]/a/h4/i',
				locateStrategy: 'xpath'
			},
			
			//Connections Tab 
			connectionsTab:{
				selector: '//*[@id="navbar"]/ul[1]/li[4]/a/h4/i',
				locateStrategy: 'xpath'
			},
			
			//Recordings Tab 
			recordingsTab:{
				selector: '//*[@id="recordingsNav"]/h4/span',
				locateStrategy: 'xpath'
			},
			
			//View Logs Tab 
			viewLogTab:{
				selector: '//*[@id="auditNav"]/h4/span',
				locateStrategy: 'xpath'
			},

			
			//Reports Tab 
			reportsTab:{
				selector: '//*[@id="reportsNav"]/h4/span',
				locateStrategy: 'xpath'
			},
			
			//Help Tab 
			helpTab:{
				selector: '//*[@id="helpNav"]/h4/span',
				locateStrategy: 'xpath'
			}
			
		}
}