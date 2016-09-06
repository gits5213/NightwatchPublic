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
			
			//------------editAdminInfo
			usersPage.edit_AdminInfo(user1,client,function(){
				console.log('User - johndoe'+user1+' is being created');
			});
			usersPage.click('@editAdminBtn');
			
			var adminPage=client.page.editAdminPage();
			
			adminPage.disable2fa(client);
			navigation.logout();
			
			var msftPage = client.page.microsoftonline();
			var password = msftPage.getPassFromEmail(client);
			
			client.url(client.launch_url);
			client.pause(2000);
			
			// Pause needed here to enable proper update of client object used in login below
			client.pause(5000,function(){
				client.globals.newUser = 'johndoe'+user1;
				loginPage.newUserLogin('johndoe'+user1,client.globals.newPassword);
				
			});
			
			client.pause(2000);
			var loginPage2 = new client.page.loginPage();
			loginPage2.getText('@changePassText', function(result){
				this.verify.equal(result.value, "Your password has been reset.\nPlease enter a new password.")
			})
			.changePassword(client);
			
			client.pause(1000);
			navigation.logout();
			client.end();
		
		},
		'Forgot Password - generation': function(client){
			var navigation = client.page.navBar();
			var loginPage = client.page.loginPage();
			client.url(client.launch_url);
			client.windowHandle(function(hand){
				var handle = hand.value;
				client.windowSize(handle,1700,800);
			});

			
			client.pause(1000);
			loginPage.resetPassword(client,client.globals.newUser)
			
			var loginPage2 = new client.page.loginPage();
			client.pause(4000)
			loginPage2.getText('@passResetSuccess', function(result){
				this.verify.equal(result.value, 'Your password has been reset. Please check your email for a temporary password to sign-in.')
			});
			
			// closing browser here in order to discard existing email authentication and generate another token later.  Will need huge code refactoring
			// in order to avoid doing this
			
			client.end()
			
		},
		
		'Forgot Password - retrieval' : function(client){
			var loginPage = client.page.loginPage();
			client.url(client.launch_url);
			client.windowHandle(function(hand){
				var handle = hand.value;
				client.windowSize(handle,1700,800);
			});
			

			var msftPage = client.page.microsoftonline();
			msftPage.getPassFromEmail(client);
			
			client.url(client.launch_url);
			client.pause(2000);
			
			// Pause needed here to enable proper update of client object used in login below
			client.pause(5000,function(){
				loginPage.newUserLogin(client.globals.newUser,client.globals.newPassword);
			});
			
			var loginPage2 = new client.page.loginPage();
			loginPage2.getText('@changePassText', function(result){
				this.verify.equal(result.value, "Your password has been reset.\nPlease enter a new password.")
			})
			.changePassword(client);
			
			client.pause(1000);
			client.end();
			

		}
		
}