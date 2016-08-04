module.exports ={
		'Cloud9 Portal Smoke Test - Reporters': function(client){
			var loginPage = client.page.loginPage();
			client.url(client.globals.qa2_baseUrl);
			client.maximizeWindow();
			
			//Log In 
			loginPage.c9AdminLogin(client);
			//Reporters Tab		
			reportPage.portalReportsTab(client);
			console.log('Test cases Countinuing')
			client.closeWindow();
			client.end();
	
		},
		
}