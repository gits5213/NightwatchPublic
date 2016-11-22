module.exports ={
		'Cloud9 Portal Smoke Test - Groups': function(client){
			var navigation = client.page.navBar();
			var loginPage = client.page.loginPage();
			var usersPage = client.page.usersPage();
			client.maximizeWindow();
			client.url(client.launch_url);
			
			loginPage.userLogin(client);
					
			var groupsPage = client.page.groupsPage();
			groupsPage.go(client);
			client.elements('xpath','//*[@id="scrollable-area"]/table/tbody/tr',function(result){
				client.verify.notEqual(result.value.length, 20, 'There should be less than 25 groups on this page');
			});
			
			groupsPage.getGroupByName(client);
			groupsPage
				.click('@editGroupBtn')
				.waitForElementVisible('@editGroupHomePage',1000, 'Verified Edit Group home page - Edit Group')
				.waitForElementVisible('@editGroupSave',1000, 'Verified Edit Group Save button is enable')
				.click('@editGroupSave')
			groupsPage.api.pause(2000);
			
			groupsPage.getGroupByName(client);
			groupsPage
				.click('@editGroupUserBtn')
				.waitForElementVisible('@editGroupUserHomePage',1000, 'Verified selected group name on the group home page header')
				.waitForElementVisible('@doneBtn',1000, 'Verified Done button is enable')
				.click('@doneBtn')
			groupsPage.api.pause(2000);
			
			groupsPage
				.click('@detailsBtn')
				.waitForElementVisible('@groupDescription',5000, 'Verified Details expand with all information - Description')
				.verify.visible('@detailsBtn','Verified Details button is visible')
				.click('@detailsBtn')
				.waitForElementVisible('@detailsFirmName',2000, 'Verified Details collapse and go back to the normal page - Group Name')
			client.pause(1500);
			
			client.closeWindow();
			client.end();			
		}
		
}