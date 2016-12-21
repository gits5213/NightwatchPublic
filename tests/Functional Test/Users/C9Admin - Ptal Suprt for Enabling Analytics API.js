module.exports ={
		'Edit a newly added user': function(client){
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
			groupsPage.selectFirm(client, dateString);
			
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
			
			var user1 = addEditUsersPage.createUser(client);
			console.log('Successfully created: New User '+user1);
			addEditUsersPage.voiceRecYes();
			addEditUsersPage.selectC2C();
			addEditUsersPage.userSubmit(client);
			addEditUsersPage.addUserSubmit(client);
			addEditUsersPage.getAddUToMess();
									
			var addEditGroupsPage= client.page.addEditGroupsPage();
			addEditGroupsPage.verify.urlContains('#/editUserGroups');
			addEditGroupsPage.selectFirstGroup();
			addEditGroupsPage.addG2UBtn();
			addEditGroupsPage.doneButton();
			client.assert.urlContains('firmId=');
			
			usersPage.userNameSearch(client, user1);
			usersPage.selectFirstRow();
			usersPage.editUserTab();
			addEditUsersPage.verify.urlContains('#/editUser');
			addEditUsersPage.verifyEditUserTxtLevel(client);
			addEditUsersPage.verifyUserStngTxtLevel(client);

			addEditUsersPage.voiceRecYes();
			addEditUsersPage.editUserSubmit();
			addEditUsersPage.getEditUToMess();
			
			/*//----------------------------------------
			
			var usersPage = client.page.usersPage();
			var addEditUsersPage = client.page.addEditUsersPage();
			usersPage.go();
			//---------------------------------------
*/			
			usersPage.userNameSearchAll(user1,client);
			usersPage.selectFirstRow();    
			usersPage.editUserTab();
			
			addEditUsersPage.clearValue('@uri');
			addEditUsersPage.voiceRecYes();
			addEditUsersPage.editUserSubmit();
			addEditUsersPage.getEditUToMess(client);
			
			usersPage.userNameSearchAll(user1,client);
			usersPage.selectFirstRow();    
			usersPage.editUserTab();
			
			addEditUsersPage.voiceRecYes();
			addEditUsersPage.selectLocalRecod(client);
			addEditUsersPage.editUserSubmit();
			addEditUsersPage.getUriToastMess(client);
			addEditUsersPage.inputURI(client, client.globals.URI);
			addEditUsersPage.globalRelayDisable(client);
			addEditUsersPage.editUserSubmit();
			addEditUsersPage.getEditUToMess(client);
			
			usersPage.userNameSearchAll(user1,client);
			usersPage.selectFirstRow();    
			usersPage.editUserTab();
			
			addEditUsersPage.selectLocalRecod(client);
			addEditUsersPage.clearValue('@uri');
			addEditUsersPage.voiceRecNo();
			addEditUsersPage.LocalRecodDisable();
			addEditUsersPage.inputURIDisable();
			addEditUsersPage.editUserSubmit();
			addEditUsersPage.getEditUToMess(client);
			
			client.end();
		}
				
}