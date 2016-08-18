module.exports ={
		'Cloud9 Portal Smoke Test - View Logs': function(client){
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
			//ViewLogs Tab	
			var viewLogsPage = client.page.viewLogsPage();
			viewLogsPage.portalViewLogsTab(client);
				viewLogsPage.click('@viewLogTab');
				viewLogsPage.verify.visible('@viewLogsHomePage', 'Verified Connections Home Page -   View Audit Logs');	
				viewLogsPage.api.pause(2000);
			
			
			
			console.log('Test cases Countinuing')
			client.closeWindow();
			client.end();
			
		},
		
}