module.exports ={
		'@tags':['user'],	
		'Delete a newly added user': function(client){
			var loginPage = client.page.loginPage();
			client.url(client.launch_url);
			client.maximizeWindow();
			
			loginPage.adminLogin(client);
			
			var firmsPage = client.page.firmsPage();
			firmsPage.go();
			var dateString = firmsPage.addNewFirm(client);
			console.log('About to create: Test Firm '+dateString);
						
			var groupsPage = client.page.groupsPage();
			client.assert.urlContains('#/addGroup');
			groupsPage.selectFirm(dateString, client);
			groupsPage.addGrpForFirm(client,dateString);
			client.assert.urlContains('firmId=');
			
			var usersPage = client.page.usersPage();
			usersPage.go();
			usersPage.addUserTab(client);
			usersPage.selectFirm(dateString,client);
			var user1 = usersPage.createUser(client);
			console.log('Successfully created: New User '+user1);
			usersPage.voiceRecYes();
			usersPage.selectC2C();
			usersPage.userSubmit(client);
			usersPage.addUserSubmit(client);
						
			var userGroupsPage= client.page.editUserGroupsPage();
			userGroupsPage.verify.urlContains('#/editUserGroups');
			userGroupsPage.addGrp2User();
			client.assert.urlContains('firmId=');
			
			usersPage.go();
			usersPage.userNameSearch(client, user1);
			usersPage.selectFirstRow();
			usersPage.deleteUserTab(client);
			usersPage.deleteCancelBtn(client);
			usersPage.deleteUserTab(client);
			usersPage.deleteOkBtn(client);
		
			usersPage.selectFirmForDeleteUser(client);
			usersPage.userNameSearch(client, user1);
			
			usersPage.selectFirstRow();
			usersPage.editUserTab();
			usersPage
			.verify.valueContains('@firmName', 'Limbo Accounts')
			.verify.valueContains('@username','johndoe'+user1+'deleted2016')
			.verify.valueContains('@fnameField','John')
			.verify.valueContains('@lnameField','Doe'+user1)
			.verify.valueContains('@emailField',client.globals.email1)
			.verify.valueContains('@workField',123456789)
			.verify.valueContains('@mobileField',234567890)
			.verify.valueContains('@voiceNo',0)
			.verify.urlContains('#/editUser')
						
			client.end();
		}
			
}