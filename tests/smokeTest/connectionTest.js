module.exports ={
		'Cloud9 Portal Smoke Test - Connections': function(client){
			var loginPage = client.page.loginPage();
			client.url(client.globals.qa2_baseUrl);
			client.maximizeWindow();
			
			//Log In 
			loginPage.c9AdminLogin(client);

			//Connections Tab		
			connectionsPage.portalConnectionsTab(client);
			console.log('Test cases Countinuing')
			client.closeWindow();
			client.end();

		},
		
}