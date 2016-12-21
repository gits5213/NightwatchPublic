module.exports ={
		'Accepting Country and State Names': function(client){
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
				
				usersPage.userNameSearch(client, user1);
				usersPage.selectFirstRow();
				usersPage.editUserTab();
				
				addEditUsersPage.updateUserRecord(client,dateString);
				addEditUsersPage.voiceRecNo();
				addEditUsersPage.verify.value('@country','string:United States')
						 		.verify.value('@state','string:New York');

				client.pause(1000);
				addEditUsersPage.editCountry(client, 'Virgin Islands (British)');
				addEditUsersPage.editState(client, 'Anegada');
				addEditUsersPage.editUserSubmit(client);
				addEditUsersPage.getEditUToMess();
				addEditUsersPage.verify.urlContains('#/users');
				
				usersPage.selectFirstRow();
				usersPage.editUserTab(client);
				addEditUsersPage.verify.value('@country','string:Virgin Islands (British)')
				 		 .verify.value('@state','string:Anegada');

				client.pause(1000);
				addEditUsersPage.editCountry(client, 'Vatican City State (Holy See)');
				addEditUsersPage.editState(client, 'Vatican City State (Holy See)');
				addEditUsersPage.editUserSubmit(client);
				addEditUsersPage.getEditUToMess();
				usersPage.verify.urlContains('#/users');
				
				usersPage.selectFirstRow();
				usersPage.editUserTab(client);
				addEditUsersPage.verify.value('@country','string:Vatican City State (Holy See)');
				addEditUsersPage.verify.value('@state','string:Vatican City State (Holy See)');

				client.pause(1000);
				addEditUsersPage.editCountry(client, 'Man (Isle of)');
				addEditUsersPage.editState(client, 'Castletown');
				addEditUsersPage.editUserSubmit(client);
				addEditUsersPage.getEditUToMess();
				usersPage.verify.urlContains('#/users');
				
				usersPage.selectFirstRow();
				usersPage.editUserTab(client);
				addEditUsersPage.verify.value('@country','string:Man (Isle of)')
				addEditUsersPage.verify.value('@state','string:Castletown');

				client.pause(1000);
				addEditUsersPage.editCountry(client, 'Croatia (Hrvatska)');
				addEditUsersPage.editState(client, 'Bjelovar-Bilogora');
				addEditUsersPage.editUserSubmit(client);
				addEditUsersPage.getEditUToMess();
				usersPage.verify.urlContains('#/users');
				
				usersPage.selectFirstRow();
				usersPage.editUserTab(client);
				addEditUsersPage.verify.value('@country','string:Croatia (Hrvatska)')
				 		 		.verify.value('@state','string:Bjelovar-Bilogora');

				client.pause(1000);
				addEditUsersPage.editCountry(client, "Cote D'Ivoire (Ivory Coast)");
				addEditUsersPage.editState(client, 'Abidjan');
				addEditUsersPage.editUserSubmit(client);
				addEditUsersPage.getEditUToMess();
				usersPage.verify.urlContains('#/users');
				
				usersPage.selectFirstRow();
				usersPage.editUserTab(client);
				addEditUsersPage.verify.value('@country',"string:Cote D'Ivoire (Ivory Coast)")
				 		 		.verify.value('@state','string:Abidjan');

				client.pause(1000);
				addEditUsersPage.editCountry(client, 'Cocos (Keeling) Islands');
				addEditUsersPage.editState(client, 'Cocos (Keeling) Islands');
				addEditUsersPage.editUserSubmit(client);
				addEditUsersPage.getEditUToMess();
				usersPage.verify.urlContains('#/users');
				
				usersPage.selectFirstRow();
				usersPage.editUserTab(client);
				addEditUsersPage.verify.value('@country','string:Cocos (Keeling) Islands')
		 		 		 		.verify.value('@state','string:Cocos (Keeling) Islands');

				client.pause(1000);
				client.end();
				
		}
}