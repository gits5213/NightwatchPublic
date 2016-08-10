module.exports ={
		'Cloud9 Portal Smoke Test - Connections': function(client){
			var loginPage = client.page.loginPage();
			client.url(client.launch_url);
			client.windowHandle(function(hand){
				var handle = hand.value;
				client.windowSize(handle,1700,800);
			});
			
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