module.exports ={
		'Cloud9 Portal Smoke Test - Users': function(client){
			var navigation = client.page.navBar();
			var loginPage = client.page.loginPage();
			var usersPage = client.page.usersPage();
			client.maximizeWindow();
			client.url(client.launch_url);
							
			loginPage.userLogin(client);
			
			var usersPage = client.page.usersPage();
			usersPage.go(client);
			client.pause(2000);
			client.elements('xpath','//*[@id="scrollable-area"]/table/tbody/tr',function(result){
				client.verify.notEqual(result.value.length, 20, 'There should be more than 25 groups on this page');
			});
			client.pause(1000);

			usersPage.userNameSearch(client, client.globals.nonAdminUser);
			usersPage.selectFirstRow();
			usersPage.editUserTab();
			
			usersPage.waitForElementVisible('@editUserHomePage',1000, 'Verified Edit Group home page - Edit User');
			usersPage.expect.element('@editUserHomePage').text.to.contain('Edit User');
			usersPage.waitForElementVisible('@street2',1000, 'Verified address stree2 input field visible');
			usersPage.clearValue('@street2');
			usersPage.setValue('@street2','17th floor');
			usersPage.voiceRecNo();
			usersPage.editUserSubmit();
			
			usersPage.userNameSearch(client, client.globals.nonAdminUser);
			usersPage.selectFirstRow();
			usersPage.editUserTab();
			
			usersPage.verify.valueContains('@street2','17th floor');
			usersPage.editUserSubmit();
				 
			client.closeWindow();
			client.end();			
		}
		
}