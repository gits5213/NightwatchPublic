module.exports ={
	'User Cloud9Admin - add multiple connections to multiple users': function(client){
		
		var loginPage = client.page.loginPage();
		client.url(client.launch_url);
		client.maximizeWindow();
		
		loginPage.adminLogin(client);
		
		var firmsPage = client.page.firmsPage();
		firmsPage.go();
		
		var dateString = firmsPage.addNewFirm(client);
		console.log('About to create: Test Firm '+dateString);
		
		var groupsPage = client.page.groupsPage();
		groupsPage.selectFirm(dateString, client);
		groupsPage.addGrpForFirm(client,dateString);
		client.assert.urlContains('firmId=');
	
		var usersPage = client.page.usersPage();
		usersPage.go();
		usersPage.addUserTab(client);
		usersPage.selectFirm(dateString,client);
		var user1 = usersPage.createUser(client);
		console.log('Successfully created: New User1 '+user1);
		usersPage.voiceRecYes();
		usersPage.selectC2C();
		usersPage.userSubmit(client);
		usersPage.addUserSubmit(client);
		
		var userGroupsPage= client.page.editUserGroupsPage();
		userGroupsPage.verify.urlContains('#/editUserGroups');
		userGroupsPage.addGrp2User();
		client.assert.urlContains('firmId=');

		usersPage.selectFirstRow();
		usersPage.editUserTab();		
		client.verify.urlContains('#/editUser');
		
		usersPage
			.verify.valueContains('@firmName', 'Test Firm '+dateString)
			.verify.valueContains('@username','johndoe'+user1)
			.verify.valueContains('@fnameField','John')
			.verify.valueContains('@lnameField','Doe'+user1)
			.verify.valueContains('@emailField',client.globals.email1)
			.verify.valueContains('@street1','1 So Amazing Ct')
			.verify.valueContains('@street2','Penthouse')
			.verify.value('@country','string:United States')
			.verify.value('@state','string:New York')
			.verify.valueContains('@city','Real Town')
			.verify.valueContains('@zip',77777)
			.verify.valueContains('@workField',123456789)
			.verify.valueContains('@mobileField',234567890)
			.verify.valueContains('@voiceYes',1)
			.verify.urlContains('#/editUser?firmId=')
			
		groupsPage.go();
		client.assert.urlContains('#/groups');
		groupsPage.addGroupTab(client);
		groupsPage.selectFirm(dateString, client);
		groupsPage.addAnotherGrpForFirm(client,dateString);
		
		usersPage.go();
		usersPage.addUserTab(client);
		usersPage.selectFirm(dateString,client);
		var user2 = usersPage.createUser(client);
		console.log('Successfully created: New User2 '+user2);
		usersPage.voiceRecYes();
		usersPage.selectC2C();
		usersPage.userSubmit(client);
		usersPage.addUserSubmit(client);
		
		var userGroupsPage= client.page.editUserGroupsPage();
		userGroupsPage.verify.urlContains('#/editUserGroups');
		userGroupsPage.done(client);
			
		client.assert.urlContains('firmId=');
		usersPage.selectFirstRow();
		usersPage.editUserTab();
		client.verify.urlContains('#/editUser');
		usersPage
			.verify.valueContains('@firmName', 'Test Firm '+dateString)
			.verify.valueContains('@username','johndoe'+user2)
			.verify.valueContains('@fnameField','John')
			.verify.valueContains('@lnameField','Doe'+user2)
			.verify.valueContains('@emailField',client.globals.email1)
			.verify.valueContains('@street1','1 So Amazing Ct')
			.verify.valueContains('@street2','Penthouse')
			.verify.value('@country','string:United States')
			.verify.value('@state','string:New York')
			.verify.valueContains('@city','Real Town')
			.verify.valueContains('@zip',77777)
			.verify.valueContains('@workField',123456789)
			.verify.valueContains('@mobileField',234567890)
			.verify.valueContains('@voiceYes',1)
			.verify.urlContains('#/editUser?firmId=')
				
		var conncetionsPage = client.page.connectionsPage();
		conncetionsPage.go()
		conncetionsPage.verify.urlContains('#/connections')
		conncetionsPage.addIntConnForFirm(dateString,client)
		conncetionsPage.verify.urlContains('#/connections')
		conncetionsPage.addIntConnForFirm(dateString,client)
		conncetionsPage.connection()
		conncetionsPage.groupUserSelect();
		
		usersPage.go();
		usersPage.selectFirstRow();
		client.pause(1000);
		usersPage.click('@editBtn');
		client.pause(3000);
		usersPage.verify.urlContains('#/buttons?');
	
		client.end();

		}
			
		
	}