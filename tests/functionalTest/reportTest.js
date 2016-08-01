module.exports ={
		'User FirmAdmin2 - ability to view customer reporting': function(client){
			var report_LoginPage = client.page.report_LoginPage();
			client.url(client.globals.qa2_baseUrl);
			client.maximizeWindow();
			report_LoginPage.reportFirmAdmin2Login(client);
			
			var reportPage = client.page.reportPage();
			reportPage.c9reports(client);
			//reportPage.selectFirm(client);
			reportPage.cloud9Usage(client);
			reportPage.userButtonRport(client);
			reportPage.firmButtonReport(client);
			reportPage.weekButton();
			reportPage.monthButton();
			
			console.log('Test cases Countinuing')
			client.closeWindow();
			client.end();
			
		},


		'User Cloud9Admin - ability to view customer reporting': function(client){
		var report_LoginPage = client.page.report_LoginPage();
			client.url(client.globals.qa2_baseUrl);
			client.maximizeWindow();
			report_LoginPage.reportCloud9AdminLogin(client);
			
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
		},


		'User Cloud9Sales - ability to view customer reporting': function(client){
			var report_LoginPage = client.page.report_LoginPage();
			client.url(client.globals.qa2_baseUrl);
			client.maximizeWindow();
			report_LoginPage.reportCloud9SalesLogin(client);
			
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
		},
	
}