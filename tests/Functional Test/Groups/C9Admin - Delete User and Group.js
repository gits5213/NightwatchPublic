module.exports ={
		
		'User FirmAdmin - ability to delete group': function(client){
			var loginPage = client.page.loginPage();
			client.url(client.launch_url);
			client.maximizeWindow();
			loginPage.adminLogin(client);
			
			var firmsPage = client.page.firmsPage();
			var addEditFirmsPage = client.page.addEditFirmsPage();
			firmsPage.go();
			firmsPage.addFirmTab();
			
			var dateString = addEditFirmsPage.addNewFirm(client);
			addEditFirmsPage.addEditSubmitBtn();
			addEditFirmsPage.addEditSubToastMess();
			console.log('About to create: Test Firm '+dateString);
			
			var groupsPage = client.page.groupsPage();
			client.assert.urlContains('#/addGroup');
			groupsPage.selectFirm(client,dateString);
			
			var addEditGroupsPage = client.page.addEditGroupsPage();
			addEditGroupsPage.addGrpForFirm(client,dateString);
			addEditGroupsPage.addEditGroupSubmitBtn();
			addEditGroupsPage.addEditGSbmitTosatMess();
			client.assert.urlContains('firmId=');
			
			var usersPage = client.page.usersPage();
			usersPage.go();
			usersPage.addUserTab(client);
			
			var addEditUsersPage = client.page.addEditUsersPage();
			addEditUsersPage.selectFirm(dateString,client);
			
			var user = addEditUsersPage.createUser(client);
			console.log('Successfully created: New User '+user);
			addEditUsersPage.voiceRecYes();
			addEditUsersPage.selectC2C();
			addEditUsersPage.userSubmit(client);
			addEditUsersPage.addUserSubmit(client);
			addEditUsersPage.getAddUToMess();
			
			var userGroupsPage= client.page.addEditGroupsPage();
			userGroupsPage.verify.urlContains('#/editUserGroups')
			addEditGroupsPage.selectFirstGroup();
			addEditGroupsPage.addG2UBtn();
			addEditGroupsPage.doneButton();
			client.assert.urlContains('firmId=')
			
			usersPage.userNameSearch(client, user);
			usersPage.selectFirstRow();
			usersPage.editUserTab();
			
			addEditUsersPage.updateUserRecord(client, user);
			addEditUsersPage.voiceRecNo();
			addEditUsersPage.editUserSubmit();
			addEditUsersPage.getEditUToMess();
			
			usersPage.go();
			usersPage.userNameSearch(client, user);
			usersPage.selectFirstRow();
			usersPage.deleteUserTab(client);
			usersPage.deleteCancelBtn(client);
			usersPage.deleteUserTab(client);
			usersPage.deleteOkBtn(client);
			
			groupsPage.go(client);
			groupsPage.selectFirstRow(client);
			groupsPage.deleteGroupTab();
			groupsPage.deleteCancelBtn();
			groupsPage.deleteGroupTab();
			groupsPage.deleteOklBtn();
			groupsPage.deleteGroupToastMess();

			client.end();

		}
}