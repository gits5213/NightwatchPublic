module.exports ={
		'Cloud9 Portal Smoke Test - Groups': function(client){
			var loginPage = client.page.loginPage();
			var groupsPage = client.page.groupsPage();
			var addEditGroupsPage = client.page.addEditGroupsPage();
			client.maximizeWindow();
			client.url(client.launch_url);
			loginPage.userLogin(client);
				
			groupsPage.go(client);
			groupsPage.getText('@groupPageResult',function(result){
				groupsPage.verify.notEqual(result.value.length, 20, 'There should be less than 25 groups on this page');
			});
			groupsPage.grpNameSearchAll(client);
			groupsPage.selectFirstRow(client);
			
			
			//groupsPage.grpNameSearchAll(client);
			//groupsPage.selectFirstRow(client);
			groupsPage.editGroupTab(client);
			
			addEditGroupsPage.waitForElementVisible('@editGroupHomePage',1000, 'Verified Edit Group home page - Edit Group')
			addEditGroupsPage.addEditGroupSubmitBtn();
			addEditGroupsPage.addEditGUpSbmitTosatMess();
			
			groupsPage.grpNameSearchAll(client);
			groupsPage.selectFirstRow(client);
			groupsPage.editGroupUsersTab(client);
			
			addEditGroupsPage.waitForElementVisible('@editGroupUserHomePage',1000, 'Verified selected group name on the group home page header')
			addEditGroupsPage.doneButton();
	
			groupsPage.detailsTab();
			groupsPage
				.waitForElementVisible('@groupDescription',5000, 'Verified Details expand with all information - Description')
				.verify.visible('@detailsBtn','Verified Details button is visible')

			client.end();			
		}
		
}