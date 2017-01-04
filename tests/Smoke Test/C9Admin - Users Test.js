module.exports ={
		'Cloud9 Portal Smoke Test - Users': function(client){
			var navigation = client.page.navBar();
			var loginPage = client.page.loginPage();
			var usersPage = client.page.usersPage();
			var addEditUsersPage = client.page.addEditUsersPage(); 
			client.maximizeWindow();
			client.url(client.launch_url);
							
			loginPage.userLogin(client);
			
			var usersPage = client.page.usersPage();
			usersPage.go(client);
			usersPage.getText('@userPageResult',function(result){
				usersPage.verify.notEqual(result.value.length, 20, 'There should be more than 25 groups on this page');
			});

			usersPage.userNameSearch(client, client.globals.nonAdminUser);
			usersPage.selectFirstRow();
			usersPage.editUserTab();
			
			addEditUsersPage.waitForElementVisible('@editUserHomePage',1000, 'Verified Edit Group home page - Edit User');
			addEditUsersPage.expect.element('@editUserHomePage').text.to.contain('Edit User');
			addEditUsersPage.waitForElementVisible('@street2',1000, 'Verified address stree2 input field visible');
			addEditUsersPage.clearValue('@street2');
			addEditUsersPage.setValue('@street2','17th floor');
			addEditUsersPage.voiceRecNo();
			addEditUsersPage.editUserSubmit();
			
			usersPage.userNameSearch(client, client.globals.nonAdminUser);
			usersPage.selectFirstRow();
			usersPage.editUserTab();
			
			addEditUsersPage.verify.valueContains('@street2','17th floor');
			addEditUsersPage.editUserSubmit();
				 
			client.end();			
		}
		
}