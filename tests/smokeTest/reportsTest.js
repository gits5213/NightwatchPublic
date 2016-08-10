module.exports ={
		'Cloud9 Portal Smoke Test - Reporters': function(client){
			var loginPage = client.page.loginPage();
			client.url(client.launch_url);
			client.windowHandle(function(hand){
				var handle = hand.value;
				client.windowSize(handle,1700,800);
			});
			
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