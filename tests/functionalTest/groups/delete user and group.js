module.exports ={
		
		'User FirmAdmin2 - ability to delete group': function(client){
			
			var navigation = client.page.navBar();
			var loginPage = client.page.loginPage();
			var usersPage = client.page.usersPage();
			
			client.maximizeWindow();
			client.url(client.launch_url);
			
			loginPage.adminLogin(client);
			usersPage.go();

			usersPage.editAdminInfo(client.globals.nonAdminUser,client);
			usersPage.click('@editAdminBtn');
			
			var adminPage=client.page.editAdminPage();
			adminPage.setToAdmin2(client)
			client.pause(7000);
			navigation.logout();
			
			loginPage.userLogin(client);
						
			var groupsPage = client.page.groupsPage();
			
			var dateString = groupsPage.go(client);
			client.assert.urlContains('#/groups');
			groupsPage.addGroupTab(client);
			
			
			var userGroup = groupsPage.addNewGroup(dateString,client);
			client.assert.urlContains('firmId=');
			
			var usersPage = client.page.usersPage();
			usersPage.go();
			usersPage.addUserTab(client);
					
			var user = usersPage.addNewUser(dateString,client);
			
			var userGroupsPage= client.page.editUserGroupsPage();
			userGroupsPage.verify.urlContains('#/editUserGroups');
			
			userGroupsPage.click('@groupNameSearch');
			userGroupsPage.setValue('@groupNameSearch', 'Firm '+userGroup+' Grp 1')
			
			//userGroupsPage.newGrpAddToUser(userGroup, client);
			userGroupsPage.addGrp2User();
			
			
			client.assert.urlContains('firmId=')
			usersPage.updateFirstRecord(user);
			usersPage.deleteNewUser(user,client);
			
			groupsPage.deleteNewGroup(userGroup,client)
			
			client.end();

			}	
}