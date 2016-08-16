module.exports ={
		'Cloud9 Portal Smoke Test - Recordings': function(client){
			var loginPage = client.page.loginPage();
			client.url(client.launch_url);
			client.windowHandle(function(hand){
				var handle = hand.value;
				client.windowSize(handle,1700,800);
			});
			
			//Log In 
			loginPage.prodAdmin2Login(client);
			
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