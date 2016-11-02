module.exports ={
				
		'Non-admin Privileges - None': function(client){
			
			var navigation = client.page.navBar();
			var loginPage = client.page.loginPage();
			client.maximizeWindow();
			client.url(client.launch_url);
			loginPage.adminLogin(client);
			
			var usersPage = client.page.usersPage();
			usersPage.go();
			
			
			usersPage.editAdminInfo(client.globals.nonAdminUser,client);
			usersPage.click('@editAdminBtn');
			
			var adminPage=client.page.editAdminPage();
			adminPage.setToNone(client)
			navigation.logout();
			
			loginPage.userLoginFail(client.globals.nonAdminUser,client.globals.nonAdminPass)
			loginPage.getText('@loginFail1',function(result){
				loginPage.verify.equal(result.value,'Login failed, check your username and password and try again.')
			})
			client.end();
			
		}
		
}