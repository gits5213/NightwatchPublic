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
			groupsPage.go(client);
			client.assert.urlContains('#/groups');
			groupsPage.addGrpForFirm(dateString,client);
			client.assert.urlContains('firmId=');
			//groupsPage.addAnotherGrpForFirm(dateString,client);
			
			var usersPage = client.page.usersPage();
			usersPage.go();
			var user1 = usersPage.addUserToFirm(dateString,client);
			var userGroupsPage= client.page.editUserGroupsPage();
			userGroupsPage
			.verify.urlContains('#/editUserGroups')
			.addGrp2User();
			client.assert.urlContains('firmId=')
			//usersPage.editFirstRecord();
			usersPage.updateFirstRecord(user1[0]);
			
			//client.verify.urlContains('#/editUser');
			
			usersPage.editFirstRecord();
			
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