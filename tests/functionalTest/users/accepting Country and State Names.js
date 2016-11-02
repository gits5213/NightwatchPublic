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
				groupsPage.addGrpForFirm(dateString,client);
				client.assert.urlContains('firmId=');
				
				var usersPage = client.page.usersPage();
				usersPage.go();
				
				usersPage.selectFirm(dateString,client);
				var user1 = usersPage.createUser(client);
				usersPage.voiceRecYes();
				usersPage.selectC2C();
				usersPage.userSubmit(client);
				usersPage.addUserSubmit(client);
				
				//var user1 = usersPage.addUserToFirm(dateString,client);
				var userGroupsPage= client.page.editUserGroupsPage();
				userGroupsPage.verify.urlContains('#/editUserGroups')
				userGroupsPage.addGrp2User();
				client.assert.urlContains('firmId=')
				
				usersPage.userNameSearch(client, user1);
				usersPage.firstRow();
				usersPage.editUserTab();
				usersPage.editUserRecord();
				usersPage.voiceRecNo();
				usersPage.verify.value('@country','string:United States')
						 .verify.value('@state','string:New York');

				client.pause(1000);
				usersPage.editCountry(client, 'Virgin Islands (British)');
				usersPage.editState(client, 'Anegada');
				client.pause(500);	
				usersPage.getText('@toastMess',function(errorMes){
					usersPage.verify.equal(errorMes.value,'User Preferences updated successfully.')
					});
				client.pause(7000);
				//usersPage.waitForElementVisible('@toastMess',2000);
				//client.pause(2000);
				usersPage.verify.urlContains('#/users');
				
				/*//usersPage.go();
				usersPage.firstRow();
				usersPage.editUser(client);
				usersPage.verify.value('@country','string:Virgin Islands (British)')
				 		 .verify.value('@state','string:Anegada');

				client.pause(1000);
				usersPage.editCountry(client, 'Vatican City State (Holy See)');
				usersPage.editState(client, 'Vatican City State (Holy See)');
				client.pause(500);	
				usersPage.getText('@toastMess',function(errorMes){
					usersPage.verify.equal(errorMes.value,'User Preferences updated successfully.')
					});
				client.pause(7000);
				usersPage.waitForElementVisible('@UpdateSuccessfull',2000);
				client.pause(2000);
				usersPage.verify.urlContains('#/users');
				
				//usersPage.go();
				usersPage.firstRow();
				usersPage.editUser(client);
				usersPage.verify.value('@country','string:Vatican City State (Holy See)')
						 .verify.value('@state','string:Vatican City State (Holy See)');

				client.pause(1000);
				usersPage.editCountry(client, 'Man (Isle of)');
				usersPage.editState(client, 'Castletown');
				client.pause(500);	
				usersPage.getText('@toastMess',function(errorMes){
					usersPage.verify.equal(errorMes.value,'User Preferences updated successfully.')
					});
				client.pause(7000);
				usersPage.waitForElementVisible('@UpdateSuccessfull',2000);
				client.pause(2000);
				usersPage.verify.urlContains('#/users');
				
				//usersPage.go();
				usersPage.firstRow();
				usersPage.editUser(client);
				usersPage.verify.value('@country','string:Man (Isle of)')
						 .verify.value('@state','string:Castletown');

				client.pause(1000);
				usersPage.editCountry(client, 'Croatia (Hrvatska)');
				usersPage.editState(client, 'Bjelovar-Bilogora');
				client.pause(500);	
				usersPage.getText('@toastMess',function(errorMes){
					usersPage.verify.equal(errorMes.value,'User Preferences updated successfully.')
					});
				client.pause(7000);
				usersPage.waitForElementVisible('@UpdateSuccessfull',2000);
				client.pause(2000);
				usersPage.verify.urlContains('#/users');
				
				//usersPage.go();
				usersPage.firstRow();
				usersPage.editUser(client);
				usersPage.verify.value('@country','string:Croatia (Hrvatska)')
				 		 .verify.value('@state','string:Bjelovar-Bilogora');

				client.pause(1000);
				usersPage.editCountry(client, "Cote D'Ivoire (Ivory Coast)");
				usersPage.editState(client, 'Abidjan');
				client.pause(500);	
				usersPage.getText('@toastMess',function(errorMes){
					usersPage.verify.equal(errorMes.value,'User Preferences updated successfully.')
					});
				client.pause(7000);
				usersPage.waitForElementVisible('@UpdateSuccessfull',2000);
				client.pause(2000);
				usersPage.verify.urlContains('#/users');
				
				//usersPage.go();
				usersPage.firstRow();
				usersPage.editUser(client);
				usersPage.verify.value('@country',"string:Cote D'Ivoire (Ivory Coast)")
				 		 .verify.value('@state','string:Abidjan');

				client.pause(1000);
				usersPage.editCountry(client, 'Cocos (Keeling) Islands');
				usersPage.editState(client, 'Cocos (Keeling) Islands');
				client.pause(500);	
				usersPage.getText('@toastMess',function(errorMes){
					usersPage.verify.equal(errorMes.value,'User Preferences updated successfully.')
					});
				client.pause(7000);
				usersPage.waitForElementVisible('@UpdateSuccessfull',2000);
				client.pause(2000);
				usersPage.verify.urlContains('#/users');
				
				//usersPage.go();
				usersPage.firstRow();
				usersPage.editUser(client);
				usersPage.verify.value('@country','string:Cocos (Keeling) Islands')
		 		 		 .verify.value('@state','string:Cocos (Keeling) Islands');

				client.pause(1000);*/
				client.end();
				
		}
}