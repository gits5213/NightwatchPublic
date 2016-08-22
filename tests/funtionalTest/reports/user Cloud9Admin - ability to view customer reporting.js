module.exports ={
		
		'User Cloud9Admin - ability to view customer reporting': function(client){
			
			var loginPage = client.page.loginPage();
		
			client.url(client.launch_url);
			client.windowHandle(function(hand){
				var handle = hand.value;
				client.windowSize(handle,1700,800);
			});

			loginPage.adminLogin(client);
			
			var reportPage = client.page.reportPage();
			reportPage.c9reports(client);
			reportPage.selectFirm(client);
			reportPage.cloud9Usage(client);
			reportPage.userButtonRport(client);
			reportPage.firmButtonReport(client);
			reportPage.weekButton();
			reportPage.monthButton();
					
			console.log('Test cases Countinuing')
			client.closeWindow();
			client.end();
		}
}
