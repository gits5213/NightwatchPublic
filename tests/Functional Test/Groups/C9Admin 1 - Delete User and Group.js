module.exports ={
		
		'User FirmAdmin1 - ability to delete group': function(client){
			
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
			adminPage.setToAdmin1(client)
			client.pause(7000);
			navigation.logout();
			
			loginPage.userLogin(client);
						
			var groupsPage = client.page.groupsPage();
			var dateString = groupsPage.go(client);
			client.assert.urlContains('#/groups');
			groupsPage.addGroupTab(client);
			var userGroup = groupsPage.createNewGroup(dateString,client);
			console.log('Successfully created: New Group '+userGroup);
			client.assert.urlContains('firmId=');
			
			var usersPage = client.page.usersPage();
			usersPage.go();
			client.pause(1000);
			usersPage.addUserTab(client);
			var user = usersPage.createUser(client);
			console.log('Successfully created: New User '+user);
			usersPage.voiceRecYes();
			usersPage.assert.hidden('@c2cCheckbox');
			usersPage.userSubmit(client);
			usersPage.addUserSubmit(client);
			
			var userGroupsPage= client.page.editUserGroupsPage();
			userGroupsPage.verify.urlContains('#/editUserGroups');
			userGroupsPage.click('@groupNameSearch');
			userGroupsPage.setValue('@groupNameSearch', 'Firm '+userGroup+' Grp 1')
			userGroupsPage.addGrp2User();
			client.assert.urlContains('firmId=')
			
			usersPage.userNameSearch(client, user);
			usersPage.selectFirstRow();
			usersPage.editUserTab();
			usersPage.updateUserRecord(client, user);
			usersPage.voiceRecNo();
			usersPage.editUserSubmit();
			
			usersPage.go();
			usersPage.userNameSearch(client, user);
			usersPage.selectFirstRow();
			usersPage.deleteUserTab(client);
			usersPage.deleteCancelBtn(client);
			usersPage.deleteUserTab(client);
			usersPage.deleteOkBtn(client);
			
			groupsPage.go(client);
			groupsPage.click('@groupNameSearch');
			groupsPage.setValue('@groupNameSearch', 'Firm '+userGroup+' Grp 1')
			groupsPage.selectFirstRow(client);
			groupsPage.deleteNewGroup(client);
			client.end();

			}	
}