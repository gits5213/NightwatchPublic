module.exports ={
		
		'User FirmAdmin - ability to delete group': function(client){
			var loginPage = client.page.loginPage();
			client.url(client.launch_url);
			client.maximizeWindow();
			loginPage.adminLogin(client);
			
			var firmsPage = client.page.firmsPage();
			firmsPage.go();
			
			var dateString = firmsPage.addNewFirm(client);
			console.log('Successfully created: Test Firm '+dateString);
			
			var groupsPage = client.page.groupsPage();
			client.assert.urlContains('#/addGroup');
			groupsPage.selectFirm(dateString, client);
			groupsPage.addGrpForFirm(client,dateString);
			client.assert.urlContains('firmId=');
			
			var usersPage = client.page.usersPage();
			usersPage.go();
			usersPage.addUserTab(client);
			usersPage.selectFirm(dateString,client);
			var user = usersPage.createUser(client);
			console.log('Successfully created: New Group '+user);
			usersPage.voiceRecYes();
			usersPage.selectC2C();
			usersPage.userSubmit(client);
			usersPage.addUserSubmit(client);
			
			var userGroupsPage= client.page.editUserGroupsPage();
			userGroupsPage.verify.urlContains('#/editUserGroups');		
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
			groupsPage.selectFirstRow(client);
			groupsPage.deleteNewGroup(client);
			client.end();
			
			client.end();
		}
}