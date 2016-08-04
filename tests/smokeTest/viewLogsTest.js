module.exports ={
		'Cloud9 Portal Smoke Test - View Logs': function(client){
			var loginPage = client.page.c9PortalSloginPagemokeTestPage();
			client.url(client.globals.qa2_baseUrl);
			client.maximizeWindow();
			
			//Log In 
			loginPage.c9AdminLogin(client);
			//ViewLogs Tab		
			viewLogsPage.portalViewLogsTab(client);
			console.log('Test cases Countinuing')
			client.closeWindow();
			client.end();
			
		},
		
}