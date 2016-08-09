module.exports ={
		'Cloud9 Portal Smoke Test - Reporters': function(client){
			var loginPage = client.page.loginPage();
			client.url(client.globals.qa2_baseUrl);
			client.maximizeWindow();
			
			//Log In 
			loginPage.adminLogin(client);
			//Reporters Tab	
			var reportPage = client.page.reportPage();
			reportPage.portalReportsTab(client);
			reportPage
				.click('@reportsTab')
				.verify.visible('@reportsHomePage', 'Verified Connections Home Page - Cloud9 Usage')	
			reportPage.api.pause(2000);
			
		
			console.log('Test cases Countinuing')
			client.closeWindow();
			client.end();
	
		},
		
}