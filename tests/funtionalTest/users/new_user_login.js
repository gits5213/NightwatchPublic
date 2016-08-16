module.exports ={
		'@tags':['user'],
		'Log in with newly created user': function(client){
			var navigation = client.page.navBar();
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
			//groupsPage.addAnotherGrpForFirm(dateString,client);
			
			var usersPage = client.page.usersPage();
			usersPage.go();
			var user1 = usersPage.addUserToFirm(dateString,client);
			
			var userGroupsPage= client.page.editUserGroupsPage();
			userGroupsPage
			.verify.urlContains('#/editUserGroups')
			.addGrp2User();
			
			var usersPage = client.page.usersPage();
			usersPage.go();
			
			
			usersPage.editAdminInfo(user1[0],client);
			
			var adminPage=client.page.editAdminPage();
			adminPage.disable2fa(client);
			navigation.logout();
			
			var msftPage = client.page.microsoftonline();
//			msftPage.getPassFromEmail(client);
//			client.url(client.launch_url);
//			loginPage = client.page.loginPage();
//			loginPage.newUserLogin('johndoe'+user1, passWord,client);
			
			msftPage.getPassword(client);
			
			//msftPage.getPassword(client, function(client){
				console.log('password in after getPassword: ',client.globals.newPassword);
				console.log(client)
				client.url(client.launch_url);
				loginPage = client.page.loginPage();
				loginPage.newUserLogin('johndoe'+user1, client.globals.newPassword,client);
				//console.log('password in callback',password);
			//});
			
			
			
			/*
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
			
			client.end();
			*/
		}
		
}