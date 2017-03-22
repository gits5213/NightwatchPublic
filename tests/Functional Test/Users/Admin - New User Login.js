module.exports ={
		'@tags':['user'],
		'Log in with newly created user': function(client){
			var navigation = client.page.navBar();
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
			
			var usersPage = client.page.usersPage();
			usersPage.go();
			
		//------------editAdminInfo
			usersPage.userNameSearchAll(user1,client);
			usersPage.selectFirstRow();
			usersPage.editAdminLevelTab();

			var adminPage=client.page.editAdminPage();
			adminPage.setToUser3(client);
			adminPage.saveConfirm(client);
			adminPage.adminLevelToastMess();
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
			client.maximizeWindow();
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
			client.maximizeWindow();
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