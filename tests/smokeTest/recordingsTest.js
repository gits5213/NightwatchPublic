module.exports ={
		'Cloud9 Portal Smoke Test - Recordings': function(client){
			var loginPage = client.page.loginPage();
			client.url(client.globals.qa2_baseUrl);
			client.maximizeWindow();
			
			//Log In 
			loginPage.adminLogin(client);
			
			//Recordings Tab
			var recordingsPage = client.page.recordingsPage();
			recordingsPage.portalRecordingsTab(client);
			recordingsPage
				.click('@recordingsTab')
				.verify.visible('@recordingsHomePage', 'Verified Connections Home Page - Manage your Cloud9 Recordings')
			recordingsPage.api.pause(2000);

			
			console.log('Test cases Countinuing')
			client.closeWindow();
			client.end();
			
		},
		
}