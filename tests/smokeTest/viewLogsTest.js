module.exports ={
		'Cloud9 Portal Smoke Test - View Logs': function(client){
			var loginPage = client.page.loginPage();
			client.url(client.globals.qa2_baseUrl);
			client.maximizeWindow();
			
			//Log In 
			loginPage.adminLogin(client);
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