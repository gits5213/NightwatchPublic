module.exports ={
		'Cloud9 Portal Smoke Test - Connections': function(client){
			var navigation = client.page.navBar();
			var loginPage = client.page.loginPage();
			var usersPage = client.page.usersPage();
			client.windowHandle(function(hand){
				var handle = hand.value;
				client.windowSize(handle,1700,800);
			});
			client.url(client.launch_url);
			
			loginPage.adminLogin(client);
			
			
			usersPage.go();
			
			
			usersPage.editAdminInfo(client.globals.nonAdminUser,client);
			
			var adminPage=client.page.editAdminPage();
			adminPage.setToAdmin2(client)
			navigation.logout();
			
			
			
			loginPage.userLogin(client);
			

			//Connections Tab
			var connectionsPage = client.page.connectionsPage();
			connectionsPage.portalConnectionsTab(client);
			connectionsPage.go();
			connectionsPage.verify.visible('@connectionsHomePage', 'Verified Connections Home Page - Manage your Cloud9 Connections');	
			connectionsPage.api.pause(2000);
			console.log('Test cases Countinuing')
			client.closeWindow();
			client.end();

		},
		
}