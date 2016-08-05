module.exports ={
		'Cloud9 Portal Smoke Test - Reporters': function(client){
			var loginPage = client.page.loginPage();
			client.url(client.globals.qa2_baseUrl);
			client.maximizeWindow();
			
			//Log In 
			loginPage.reportCloud9AdminLogin(client);
			//Reporters Tab	
			var reportPage = client.page.reportPage();
			reportPage.portalReportsTab(client);
			console.log('Test cases Countinuing')
			client.closeWindow();
			client.end();
	
		},
		
}