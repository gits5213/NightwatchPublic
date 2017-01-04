module.exports ={
		'Admin 2 - Create & Modify a new user': function(client){
			var navigation = client.page.navBar();
			var loginPage = client.page.loginPage();
			var usersPage = client.page.usersPage();
			client.maximizeWindow();
			client.url(client.launch_url);
			loginPage.adminLogin(client);
			usersPage.go();

			usersPage.selectFirmAll(client, client.globals.adminFirm);
			usersPage.userNameSearchAll(client.globals.nonAdminUser,client);
			usersPage.selectFirstRow();
			usersPage.editAdminLevelTab();
			
			var adminPage=client.page.editAdminPage();
			adminPage.setToAdmin2(client)
			navigation.logout();
			loginPage.userLogin(client);
			
			var groupsPage = client.page.groupsPage();
			groupsPage.go(client);
			client.assert.urlContains('#/groups');
			groupsPage.addGroupTab(client);
			
			var addEditGroupsPage = client.page.addEditGroupsPage();
			var dateString = addEditGroupsPage.createNewGroup(client, dateString);
			console.log('Successfully created: New Group '+ dateString);
			addEditGroupsPage.addEditGroupSubmitBtn();
			addEditGroupsPage.addEditGSbmitTosatMess();
			client.assert.urlContains('firmId=');
			
			var usersPage = client.page.usersPage();
			usersPage.go();
			usersPage.addUserTab(client);
			
			var addEditUsersPage = client.page.addEditUsersPage();			
			var user1 = addEditUsersPage.createUser(client);
			console.log('Successfully created: New User '+user1);
			addEditUsersPage.voiceRecYes(); 
			addEditUsersPage.assert.hidden('@c2cCheckbox');
			addEditUsersPage.userSubmit(client);
			addEditUsersPage.addUserSubmit(client);
			addEditUsersPage.getAddUToMess();
				
			var addEditGroupsPage= client.page.addEditGroupsPage();
			addEditGroupsPage.verify.urlContains('#/editUserGroups');
			addEditGroupsPage.click('@groupNameSearch');
			addEditGroupsPage.setValue('@groupNameSearch', 'Firm '+dateString+' Grp 1')
			addEditGroupsPage.selectFirstGroup();
			addEditGroupsPage.addG2UBtn();
			addEditGroupsPage.doneButton();
			client.assert.urlContains('firmId=')
			
			usersPage.userNameSearch(client, user1);
			usersPage.selectFirstRow();
			usersPage.editUserTab();
			
			addEditUsersPage.updateUserRecord(client, user1);
			addEditUsersPage.voiceRecNo();
			addEditUsersPage.editUserSubmit();
			addEditUsersPage.getEditUToMess();
			
			usersPage.go();
			usersPage.userNameSearch(client, user1);
			usersPage.selectFirstRow();    
			usersPage.editUserTab();
			addEditUsersPage
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