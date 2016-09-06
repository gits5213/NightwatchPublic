module.exports ={
		
	'User Cloud9Admin - add multiple connections to multiple users': function(client){
		
		
	var loginPage = client.page.loginPage();
		client.url(client.launch_url);
		client.windowHandle(function(hand){
			var handle = hand.value;
			client.windowSize(handle,1700,800);
		});
		
		
		loginPage.adminLogin(client);
		
	var firmsPage = client.page.firmsPage();
		firmsPage.go();
		
	var dateString = firmsPage.addNewFirm(client);
		console.log('About to create: Test Firm '+dateString);
		
	var groupsPage = client.page.groupsPage();
		groupsPage.go();
		client.assert.urlContains('#/groups');
		groupsPage.addGrpForFirm(dateString,client);
		client.assert.urlContains('firmId=');

	var usersPage = client.page.usersPage();
		usersPage.go();
	var user1 = usersPage.addUserToFirm(dateString,client);
	var userGroupsPage= client.page.editUserGroupsPage();
		userGroupsPage
			.verify.urlContains('#/editUserGroups')
			.addGrp2User();
			client.assert.urlContains('firmId=')

		usersPage.editFirstRecord();
		
		client.verify.urlContains('#/editUser');
		
		usersPage
			.verify.valueContains('@firmName', 'Test Firm '+dateString)
			.verify.valueContains('@username','johndoe'+user1[0])
			.verify.valueContains('@fnameField','John')
			.verify.valueContains('@lnameField','Doe'+user1[0])
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
			
			//2nd
			groupsPage.go();
		client.assert.urlContains('#/groups');
		groupsPage.addAnotherGrpForFirm(dateString,client);
		client.assert.urlContains('firmId=');
			
		usersPage.go();
	var user1 = usersPage.addUserToFirm(dateString,client);
		
	var userGroupsPage= client.page.editUserGroupsPage();
			userGroupsPage
				.verify.urlContains('#/editUserGroups')
				.done(client);
			
			client.assert.urlContains('firmId=');
			usersPage.click('@firstRow')

			usersPage.editFirstRecord();

			client.verify.urlContains('#/editUser');
			
			usersPage
				.verify.valueContains('@firmName', 'Test Firm '+dateString)
				.verify.valueContains('@username','johndoe'+user1[0])
				.verify.valueContains('@fnameField','John')
				.verify.valueContains('@lnameField','Doe'+user1[0])
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
				

			//Connection Tab
	var conncetionsPage = client.page.connectionsPage();
			
			conncetionsPage.go()
			conncetionsPage.verify.urlContains('#/connections')
			conncetionsPage.addIntConnForFirm(dateString,client)
			conncetionsPage.go()
			conncetionsPage.verify.urlContains('#/connections')
			conncetionsPage.addIntConnForFirm(dateString,client)
			conncetionsPage.connection()
			conncetionsPage.groupUserSelect();
	
			usersPage.go();
			usersPage.click('@firstRow');
			client.pause(1000);
			usersPage.click('@editBtn');
			usersPage.verify.urlContains('#/buttons?');
			client.pause(1000);
			
		client.end();

		}
			
		
	}