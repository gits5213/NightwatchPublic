module.exports ={
		
		'User FirmAdmin2 - ability to delete group': function(client){
			
			var navigation = client.page.navBar();
			var loginPage = client.page.loginPage();
			var usersPage = client.page.usersPage();
			client.windowHandle(function(hand){
				var handle = hand.value;
				client.windowSize(handle,1700,800);
			});
			client.url(client.launch_url);
			
			loginPage.adminLogin(client);
			
			
			usersPage.go();
			
			
			usersPage.editAdminInfo(client.globals.nonAdminUser,client);
			usersPage.click('@editAdminBtn');
			
			var adminPage=client.page.editAdminPage();
			adminPage.setToAdmin2(client)
			navigation.logout();
			
			
			
			loginPage.userLogin(client);
						
			var groupsPage = client.page.groupsPage();
			
			var dateString = groupsPage.go(client);
			client.assert.urlContains('#/groups');
			
			var user = groupsPage.addNewGroup(dateString,client);
			client.assert.urlContains('firmId=');
			
			var usersPage = client.page.usersPage();
			usersPage.go();
			var user1 = usersPage.addNewUser(dateString,client);
			
			var userGroupsPage= client.page.editUserGroupsPage();
			userGroupsPage.verify.urlContains('#/editUserGroups');
			userGroupsPage.newGrpAddToUser(client, user);
			userGroupsPage.addGrp2User();
			
			
			client.assert.urlContains('firmId=')
			usersPage.updateFirstRecord(user1);
			usersPage.deleteNewUser(user1,client);
			
			groupsPage.deleteNewGroup(user,client)
			
			client.end();

			}	
		}