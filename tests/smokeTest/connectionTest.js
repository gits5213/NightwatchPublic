module.exports ={
		'Cloud9 Portal Smoke Test - Connections': function(client){
			var loginPage = client.page.loginPage();
			client.url(client.globals.qa2_baseUrl);
			client.maximizeWindow();
			
			//Log In 
			loginPage.adminLogin(client);
			

			//Connections Tab
			var connectionsPage = client.page.connectionsPage();
			connectionsPage.portalConnectionsTab(client);
			connectionsPage.click('@connectionsTab');
			connectionsPage.verify.visible('@connectionsHomePage', 'Verified Connections Home Page - Manage your Cloud9 Connections');	
			connectionsPage.api.pause(2000);
			console.log('Test cases Countinuing')
			client.closeWindow();
			client.end();

		},
		
}