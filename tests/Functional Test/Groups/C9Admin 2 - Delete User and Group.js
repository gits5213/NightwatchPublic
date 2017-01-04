module.exports ={
		'User FirmAdmin2 - ability to delete group': function(client){
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
			adminPage.saveConfirm();
			adminPage.adminLevelToastMess();
			navigation.logout();
			loginPage.userLogin(client);
						
			var groupsPage = client.page.groupsPage();
			var dateString = groupsPage.go(client);
			client.assert.urlContains('#/groups');
			groupsPage.addGroupTab(client);
				
			var addEditGroupsPage = client.page.addEditGroupsPage();
			var userGroup = addEditGroupsPage.createNewGroup(client, dateString);
			console.log('Successfully created: New Group '+ userGroup);
			addEditGroupsPage.addEditGroupSubmitBtn();
			addEditGroupsPage.addEditGSbmitTosatMess();
			client.assert.urlContains('firmId=');
			
			var usersPage = client.page.usersPage();
			usersPage.go();
			usersPage.addUserTab(client);
						
			var addEditUsersPage = client.page.addEditUsersPage();			
			var user = addEditUsersPage.createUser(client);
			console.log('Successfully created: New User '+user);
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
			groupsPage.click('@groupNameSearch');
			groupsPage.setValue('@groupNameSearch', 'Firm '+userGroup+' Grp 1')
			groupsPage.selectFirstRow(client);
			groupsPage.deleteGroupTab();
			groupsPage.deleteCancelBtn();
			groupsPage.deleteGroupTab();
			groupsPage.deleteOklBtn();
			groupsPage.deleteGroupToastMess();
			client.end();
			}	
}