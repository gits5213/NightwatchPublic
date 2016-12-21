module.exports ={
	'User Cloud9Admin - add multiple connections to multiple users': function(client){
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
		
		var userGroupsPage= client.page.addEditGroupsPage();
		userGroupsPage.verify.urlContains('#/editUserGroups')
		addEditGroupsPage.selectFirstGroup();
		addEditGroupsPage.addG2UBtn();
		addEditGroupsPage.doneButton();
		client.assert.urlContains('firmId=')

		usersPage.selectFirstRow();
		usersPage.editUserTab();		
		client.verify.urlContains('#/editUser');
		addEditUsersPage
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
	
		addEditUsersPage.selectFirm(dateString,client);
		addEditGroupsPage.addAnotherGrpForFirm(client,dateString);
		addEditGroupsPage.addEditGroupSubmitBtn();
		addEditGroupsPage.addEditGSbmitTosatMess();
		client.assert.urlContains('firmId=');
		
		usersPage.go();
		usersPage.addUserTab(client);
		addEditUsersPage.selectFirm(dateString,client);
		
		var user2 = addEditUsersPage.createUser(client);
		console.log('Successfully created: New User2 '+user2);
		addEditUsersPage.voiceRecYes();
		addEditUsersPage.selectC2C();
		addEditUsersPage.userSubmit(client);
		addEditUsersPage.addUserSubmit(client);
		addEditUsersPage.getAddUToMess();
		addEditUsersPage.verify.urlContains('#/editUserGroups');
		
		addEditGroupsPage.selectSecondtGroup();
		addEditGroupsPage.addG2UBtn();
		addEditGroupsPage.doneButton();
	
		client.assert.urlContains('firmId=');
		usersPage.selectFirstRow();
		usersPage.editUserTab();
		client.verify.urlContains('#/editUser');
		addEditUsersPage
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
		
		conncetionsPage.addConTab();
		client.assert.containsText('body','Add Connection');
		var addEditConnectionsPage = client.page.addEditConnectionsPage(); 
		//conncetionsPage.addIntConnForFirm(dateString,client)
		addEditConnectionsPage.selectFirm(client, dateString);
		addEditConnectionsPage.internalRadioYes();
		addEditConnectionsPage.createConFrom(client);
		addEditConnectionsPage.myFirmBtnLevel(client, dateString);
		addEditConnectionsPage.addConSubmit();
		addEditConnectionsPage.getAddConMess();
		client.assert.urlContains('#/connections');
		
		conncetionsPage.addConTab();
		client.assert.containsText('body','Add Connection');
		var addEditConnectionsPage = client.page.addEditConnectionsPage(); 
		//conncetionsPage.addIntConnForFirm(dateString,client)
		addEditConnectionsPage.selectFirm(client, dateString);
		addEditConnectionsPage.internalRadioYes();
		addEditConnectionsPage.createConFrom(client);
		addEditConnectionsPage.myFirmBtnLevel(client, dateString);
		addEditConnectionsPage.addConSubmit();
		addEditConnectionsPage.getAddConMess();
		client.assert.urlContains('#/connections');
	
		//conncetionsPage.addIntConnForFirm(dateString,client)
		//conncetionsPage.connection()
		conncetionsPage.selectConRow();
		conncetionsPage.addConToGroupTab();
		client.verify.urlContains('#/addGroupConnections?')
		
		addEditConnectionsPage.groupUserSelect();
		addEditConnectionsPage.addConToUSubmit();
		addEditConnectionsPage.getaddConUSubmitToMess();
		
		usersPage.go();
		usersPage.selectFirstRow();
		client.pause(1000);
		usersPage.click('@editBtn');
		client.pause(3000);
		usersPage.verify.urlContains('#/buttons?');
	
		client.end();

		}
			
		
	}