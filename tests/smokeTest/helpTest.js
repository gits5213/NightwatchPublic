module.exports ={
		'Cloud9 Portal Smoke Test - Help': function(client){
			var loginPage = client.page.loginPage();
			client.url(client.launch_url);
			client.windowHandle(function(hand){
				var handle = hand.value;
				client.windowSize(handle,1700,800);
			});
			
			//Log In 
			loginPage.adminLogin(client);
			//Help Tab	
			var helpPage = client.page.helpPage();
			helpPage.portalHelpTab(client);
			console.log('Test cases Countinuing')
			client.closeWindow();
			client.end();	
		},
		
}