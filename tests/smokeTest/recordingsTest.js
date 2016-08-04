module.exports ={
		'Cloud9 Portal Smoke Test - Recordings': function(client){
			var loginPage = client.page.loginPage();
			client.url(client.globals.qa2_baseUrl);
			client.maximizeWindow();
			
			//Log In 
			loginPage.c9AdminLogin(client);
			//Recordings Tab		
			recordingsPage.portalRecordingsTab(client);
			//Print log into console window
			console.log('Test cases Countinuing')
			//current window close
			client.closeWindow();
			//All the window close
			client.end();
			
		},
		
}