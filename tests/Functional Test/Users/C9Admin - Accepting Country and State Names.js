module.exports ={
		'Accepting Country and State Names': function(client){
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
				usersPage.selectFirm(dateString,client);
				var user1 = usersPage.createUser(client);
				console.log('Successfully created: New User '+user1);
				usersPage.voiceRecYes();
				usersPage.selectC2C();
				usersPage.userSubmit(client);
				usersPage.addUserSubmit(client);
				
				var userGroupsPage= client.page.editUserGroupsPage();
				userGroupsPage.verify.urlContains('#/editUserGroups')
				userGroupsPage.addGrp2User();
				client.assert.urlContains('firmId=')
				
				usersPage.userNameSearch(client, user1);
				usersPage.selectFirstRow();
				usersPage.editUserTab();
				usersPage.updateUserRecord(client,dateString);
				usersPage.voiceRecNo();
				usersPage.verify.value('@country','string:United States')
						 .verify.value('@state','string:New York');

				client.pause(1000);
				usersPage.editCountry(client, 'Virgin Islands (British)');
				usersPage.editState(client, 'Anegada');
				usersPage.editUserSubmitBtn(client);
				usersPage.verify.urlContains('#/users');
				
				usersPage.selectFirstRow();
				usersPage.editUserTab(client);
				usersPage.verify.value('@country','string:Virgin Islands (British)')
				 		 .verify.value('@state','string:Anegada');

				client.pause(1000);
				usersPage.editCountry(client, 'Vatican City State (Holy See)');
				usersPage.editState(client, 'Vatican City State (Holy See)');
				usersPage.editUserSubmitBtn(client);
				usersPage.verify.urlContains('#/users');
				
				usersPage.selectFirstRow();
				usersPage.editUserTab(client);
				usersPage.verify.value('@country','string:Vatican City State (Holy See)');
				usersPage.verify.value('@state','string:Vatican City State (Holy See)');

				client.pause(1000);
				usersPage.editCountry(client, 'Man (Isle of)');
				usersPage.editState(client, 'Castletown');
				usersPage.editUserSubmitBtn(client);
				usersPage.verify.urlContains('#/users');
				
				usersPage.selectFirstRow();
				usersPage.editUserTab(client);
				usersPage.verify.value('@country','string:Man (Isle of)')
						 .verify.value('@state','string:Castletown');

				client.pause(1000);
				usersPage.editCountry(client, 'Croatia (Hrvatska)');
				usersPage.editState(client, 'Bjelovar-Bilogora');
				usersPage.editUserSubmitBtn(client);
				usersPage.verify.urlContains('#/users');
				
				usersPage.selectFirstRow();
				usersPage.editUserTab(client);
				usersPage.verify.value('@country','string:Croatia (Hrvatska)')
				 		 .verify.value('@state','string:Bjelovar-Bilogora');

				client.pause(1000);
				usersPage.editCountry(client, "Cote D'Ivoire (Ivory Coast)");
				usersPage.editState(client, 'Abidjan');
				usersPage.editUserSubmitBtn(client);
				usersPage.verify.urlContains('#/users');
				
				usersPage.selectFirstRow();
				usersPage.editUserTab(client);
				usersPage.verify.value('@country',"string:Cote D'Ivoire (Ivory Coast)")
				 		 .verify.value('@state','string:Abidjan');

				client.pause(1000);
				usersPage.editCountry(client, 'Cocos (Keeling) Islands');
				usersPage.editState(client, 'Cocos (Keeling) Islands');
				usersPage.editUserSubmitBtn(client);
				usersPage.verify.urlContains('#/users');
				
				usersPage.selectFirstRow();
				usersPage.editUserTab(client);
				usersPage.verify.value('@country','string:Cocos (Keeling) Islands')
		 		 		 .verify.value('@state','string:Cocos (Keeling) Islands');

				client.pause(1000);
				client.end();
				
		}
}