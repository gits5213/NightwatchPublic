module.exports ={
		'Accepting Country and State Names': function(client){
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
				usersPage.editUser(user1[0],client);
				
				usersPage.verify.value('@country','string:United States')
						 .verify.value('@state','string:New York');

				 client.pause(1000);
				 
				usersPage.editCountry(client, 'Virgin Islands (British)');
				usersPage.editState(client, 'Anegada');
				usersPage.waitForElementVisible('@UpdateSuccessfull',2000);
				client.pause(2000);
				usersPage.verify.urlContains('#/users');
				
				usersPage.go();
				usersPage.editUser(user1[0],client);
				
				usersPage.verify.value('@country','string:Virgin Islands (British)')
				 		 .verify.value('@state','string:Anegada');

				client.pause(1000);
				
				usersPage.editCountry(client, 'Vatican City State (Holy See)');
				usersPage.editState(client, 'Vatican City State (Holy See)');
				usersPage.waitForElementVisible('@UpdateSuccessfull',2000);
				client.pause(2000);
				usersPage.verify.urlContains('#/users');
				
				usersPage.go();
				usersPage.editUser(user1[0],client);
				
				usersPage.verify.value('@country','string:Vatican City State (Holy See)')
						 .verify.value('@state','string:Vatican City State (Holy See)');

				client.pause(1000);
		
				usersPage.editCountry(client, 'Man (Isle of)');
				usersPage.editState(client, 'Castletown');
				usersPage.waitForElementVisible('@UpdateSuccessfull',2000);
				client.pause(2000);
				usersPage.verify.urlContains('#/users');
				
				usersPage.go();
				usersPage.editUser(user1[0],client);
				
				usersPage.verify.value('@country','string:Man (Isle of)')
						 .verify.value('@state','string:Castletown');

				client.pause(1000);
		
				usersPage.editCountry(client, 'Croatia (Hrvatska)');
				usersPage.editState(client, 'Bjelovar-Bilogora');
				usersPage.waitForElementVisible('@UpdateSuccessfull',2000);
				client.pause(2000);
				usersPage.verify.urlContains('#/users');
				
				usersPage.go();
				usersPage.editUser(user1[0],client);
				
				usersPage.verify.value('@country','string:Croatia (Hrvatska)')
				 		 .verify.value('@state','string:Bjelovar-Bilogora');

				client.pause(1000);
		
				usersPage.editCountry(client, "Cote D'Ivoire (Ivory Coast)");
				usersPage.editState(client, 'Abidjan');
				usersPage.waitForElementVisible('@UpdateSuccessfull',2000);
				client.pause(2000);
				usersPage.verify.urlContains('#/users');
				
				usersPage.go();
				usersPage.editUser(user1[0],client);
				
				usersPage.verify.value('@country',"string:Cote D'Ivoire (Ivory Coast)")
				 		 .verify.value('@state','string:Abidjan');

				client.pause(1000);
				
				usersPage.editCountry(client, 'Cocos (Keeling) Islands');
				usersPage.editState(client, 'Cocos (Keeling) Islands');
				usersPage.waitForElementVisible('@UpdateSuccessfull',2000);
				client.pause(2000);
				usersPage.verify.urlContains('#/users');
				
				usersPage.go();
				usersPage.editUser(user1[0],client);
				
				usersPage.verify.value('@country','string:Cocos (Keeling) Islands')
		 		 		 .verify.value('@state','string:Cocos (Keeling) Islands');

				client.pause(1000);
				
				client.end();
				
		}
}