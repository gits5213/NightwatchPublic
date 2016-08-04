module.exports ={
		'Cloud9 Portal Smoke Test - Help': function(client){
			var loginPage = client.page.loginPage();
			client.url(client.globals.qa2_baseUrl);
			client.maximizeWindow();
			
			//Log In 
			loginPage.c9AdminLogin(client);
			//Help Tab		
			helpPage.portalHelpTab(client);
			console.log('Test cases Countinuing')
			client.closeWindow();
			client.end();	
		},
		
}