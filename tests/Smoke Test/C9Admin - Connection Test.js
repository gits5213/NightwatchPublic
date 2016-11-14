module.exports ={
		'Cloud9 Portal Smoke Test - Connections': function(client){
			var navigation = client.page.navBar();
			var loginPage = client.page.loginPage();
			var usersPage = client.page.usersPage();
			client.maximizeWindow();
			client.url(client.launch_url);
			
			loginPage.userLogin(client);
			
			//Connections Tab
			var connectionsPage = client.page.connectionsPage();
			connectionsPage.go(client);
			connectionsPage.go();
			connectionsPage.verify.visible('@connectionsHomePage', 'Verified Connections Home Page - Manage your Cloud9 Connections');	
			client.pause(2000);

			client.closeWindow();
			client.end();

		}
		
}