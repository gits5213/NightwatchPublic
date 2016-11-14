module.exports ={
		'Admin 2 - Create & Modify a new user': function(client){
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
			navigation.logout();
			
			loginPage.userLogin(client);
			
			var groupsPage = client.page.groupsPage();
			groupsPage.go(client);
			client.assert.urlContains('#/groups');
			groupsPage.addGroupTab(client);
			
			var dateString = groupsPage.createNewGroup(dateString,client);
			console.log('Successfully created: New Group '+ dateString);
			client.assert.urlContains('firmId=');
			
			var usersPage = client.page.usersPage();
			usersPage.go();
			usersPage.addUserTab(client);
			var user1 = usersPage.createUser(client);
			console.log('Successfully created: New User '+user1);
			usersPage.voiceRecYes(); 
			usersPage.assert.hidden('@c2cCheckbox');
			usersPage.userSubmit(client);
			usersPage.addUserSubmit(client);
				
			var userGroupsPage= client.page.editUserGroupsPage();
			userGroupsPage.verify.urlContains('#/editUserGroups');
			userGroupsPage.click('@groupNameSearch');
			userGroupsPage.setValue('@groupNameSearch', 'Firm '+dateString+' Grp 1')
			userGroupsPage.addGrp2User();		
			client.assert.urlContains('firmId=')
			
			usersPage.userNameSearch(client, user1);
			usersPage.selectFirstRow();
			usersPage.editUserTab();
			usersPage.updateUserRecord(client, user1);
			usersPage.voiceRecNo();
			usersPage.editUserSubmit();
			
			usersPage.go();
			usersPage.userNameSearch(client, user1);
			usersPage.selectFirstRow();    
			usersPage.editUserTab();
			usersPage
			.verify.valueContains('@username','johndoe'+user1[0])
			.verify.valueContains('@fnameField','Jane')
			.verify.valueContains('@lnameField','Poe'+user1[0])
			.verify.valueContains('@emailField','updateduser@c9tec.com')
			.verify.valueContains('@street1','1 So Amazing Ct')
			.verify.valueContains('@street2','Penthouse')
			.verify.value('@country','string:United States')
			.verify.value('@state','string:New York')
			.verify.valueContains('@city','Real Town')
			.verify.valueContains('@zip',77777)
			.verify.valueContains('@workField','011-234-5294')
			.verify.valueContains('@mobileField','011-234-5555')
			.verify.valueContains('@voiceNo',0)
			.verify.urlContains('#/editUser')
			
			client.end();
			
		
		}
				
}