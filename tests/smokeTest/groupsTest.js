module.exports ={
		'Cloud9 Portal Smoke Test - Groups': function(client){
			var navigation = client.page.navBar();
			var loginPage = client.page.loginPage();
			var usersPage = client.page.usersPage();
			client.windowHandle(function(hand){
				var handle = hand.value;
				client.windowSize(handle,1700,800);
			});
			client.url(client.launch_url);
			
			loginPage.adminLogin(client);
			
			
			usersPage.go();
			
			
			usersPage.editAdminInfo(client.globals.nonAdminUser,client);
			
			var adminPage=client.page.editAdminPage();
			adminPage.setToAdmin2(client)
			navigation.logout();
			
			
			
			loginPage.userLogin(client);
					
			//Groups Tab ............................
			var groupsPage = client.page.groupsPage();
			groupsPage.go(client);
			
			//Edit Group
			groupsPage.getGroupByName(client);
			groupsPage.getEditGroup();
			groupsPage
				.click('@editGroupBtn')
				.waitForElementVisible('@editGroupHomePage',1000, 'Verified Edit Group home page - Edit Group')
				.waitForElementVisible('@editGroupSave',1000, 'Verified Edit Group Save button enable and clickable')
				.click('@editGroupSave')
			groupsPage.api.pause(2000);
			
			//Edit Group Users
			groupsPage.getGroupByName(client);
			groupsPage.getEditGroupUsers();
			groupsPage
				.click('@editGroupUserBtn')
				.waitForElementVisible('@editGroupUserHomePage',1000, 'Verified selected group name on the group home page header')
				.waitForElementVisible('@doneBtn',1000, 'Verified Done button enable and clickable')
				.click('@doneBtn')
			groupsPage.api.pause(2000);
			
			//Group Details
			groupsPage.groupDetailsBtn();
			groupsPage
				.click('@detailsBtn')
				.waitForElementVisible('@groupDescription',5000, 'Verified Details expand with all information - Description')
				.verify.visible('@detailsBtn','Verified Details button is visible and clikable')
				.click('@detailsBtn')
				.waitForElementVisible('@detailsFirmName',2000, 'Verified Details collapse and go back to the normal page - Group Name')
			groupsPage.api.pause(1500);
			
			console.log('Test cases Countinuing');
			client.closeWindow();
			client.end();			
		},
		
}