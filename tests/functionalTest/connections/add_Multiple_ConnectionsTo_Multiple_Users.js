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
		client.assert.urlContains('#/addGroup');
		
		groupsPage.addGrpForFirm(dateString,client);
		client.assert.urlContains('firmId=');
	
		var usersPage = client.page.usersPage();
		usersPage.go();
		client.pause(2000);

		usersPage.selectFirm(dateString,client);
		var user1 = usersPage.createUser(client);
		usersPage.voiceRecYes();
		usersPage.selectC2C();
		usersPage.userSubmit(client);
		usersPage.addUserSubmit(client);
		
		client.pause(3000);
		var userGroupsPage= client.page.editUserGroupsPage();
		userGroupsPage.verify.urlContains('#/editUserGroups');
		
		userGroupsPage.addGrp2User();
		client.assert.urlContains('firmId=')

		usersPage.firstRow();
		usersPage.editUserTab();
		//usersPage.editFirstRecord();
		
		
		
		/*var user1 = usersPage.addUserToFirm(dateString,client);
		var userGroupsPage= client.page.editUserGroupsPage();
	
		userGroupsPage
			.verify.urlContains('#/editUserGroups')
			.addGrp2User();
			client.assert.urlContains('firmId=')

		usersPage.editFirstRecord();*/
		
		client.verify.urlContains('#/editUser');
		
		usersPage
			.verify.valueContains('@firmName', 'Test Firm '+dateString)
			.verify.valueContains('@username','ericttonder'+user1[0])
			.verify.valueContains('@fnameField','Erict')
			.verify.valueContains('@lnameField','Tonder'+user1[0])
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
		client.pause(2000);

		usersPage.selectFirm(dateString,client);
		var user2 = usersPage.createUser(client);
		usersPage.voiceRecYes();
		usersPage.selectC2C();
		usersPage.userSubmit(client);
		usersPage.addUserSubmit(client);
		
		client.pause(3000);
		var userGroupsPage= client.page.editUserGroupsPage();
		userGroupsPage.verify.urlContains('#/editUserGroups');
		userGroupsPage.done(client);
			
		
		
	/*	usersPage.go();
	var user1 = usersPage.addUserToFirm(dateString,client);
		
	var userGroupsPage= client.page.editUserGroupsPage();
			userGroupsPage
				.verify.urlContains('#/editUserGroups')
				.done(client);
				*/
			
			
			
			
			
			client.assert.urlContains('firmId=');
			usersPage.click('@secondRow');
			//usersPage.firstRow(); click('@firstRow')

			usersPage.editUserTab();
			//usersPage.editFirstRecord();
			

			client.verify.urlContains('#/editUser');
			
			usersPage
				.verify.valueContains('@firmName', 'Test Firm '+dateString)
				.verify.valueContains('@username','ericttonder'+user2[0])
				.verify.valueContains('@fnameField','Erict')
				.verify.valueContains('@lnameField','Tonder'+user2[0])
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
			//conncetionsPage.go()
			conncetionsPage.verify.urlContains('#/connections')
			conncetionsPage.addIntConnForFirm(dateString,client)
			
			conncetionsPage.connection()
			conncetionsPage.groupUserSelect();
	
			usersPage.go();
			usersPage.firstRow();
			//usersPage.click('@firstRow');
			client.pause(1000);
			usersPage.click('@editBtn');
			client.pause(3000);
			usersPage.verify.urlContains('#/buttons?');
	
			
		client.end();

		}
			
		
	}