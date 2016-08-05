module.exports ={
		'Cloud9 Portal Smoke Test - View Logs': function(client){
			var loginPage = client.page.loginPage();
			client.url(client.globals.qa2_baseUrl);
			client.maximizeWindow();
			
			//Log In 
			loginPage.reportCloud9AdminLogin(client);
			//ViewLogs Tab	
			var viewLogsPage = client.page.viewLogsPage();
			viewLogsPage.portalViewLogsTab(client);
			console.log('Test cases Countinuing')
			client.closeWindow();
			client.end();
			
		},
		
}