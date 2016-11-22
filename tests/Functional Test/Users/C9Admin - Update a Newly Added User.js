module.exports ={
		'@tags':['user'],
		'Edit a newly added user': function(client){
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
			
			usersPage.userNameSearch(client, user1);
			usersPage.selectFirstRow();
			usersPage.editUserTab();
			usersPage.updateUserRecord(client, user1);
			usersPage.voiceRecNo();
			usersPage.editUserSubmit();

			usersPage.selectFirstRow();    
			usersPage.editUserTab();
			
			usersPage
			.verify.valueContains('@firmName', 'Test Firm '+dateString)
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