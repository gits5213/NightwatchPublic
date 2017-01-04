module.exports ={
		'Cloud9 Portal Smoke Test - Connections': function(client){
			var navigation = client.page.navBar();
			var loginPage = client.page.loginPage();
			var usersPage = client.page.usersPage();
			client.maximizeWindow();
			client.url(client.launch_url);
			loginPage.userLogin(client);
			
			var connectionsPage = client.page.connectionsPage();
			connectionsPage.go();
			connectionsPage.verifyConBtnLevel();
			
			client.end();

		}
		
}