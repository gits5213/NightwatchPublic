module.exports ={
		'User FirmAdmin2 - ability to view customer reporting': function(client){
			var navigation = client.page.navBar();
			var loginPage = client.page.loginPage();
			var usersPage = client.page.usersPage();
			client.maximizeWindow();
			client.url(client.launch_url);
			
			loginPage.adminLogin(client);
			usersPage.go();
			
			usersPage.editAdminInfo(client.globals.nonAdminUser,client);
			usersPage.click('@editAdminBtn');
			
			var adminPage=client.page.editAdminPage();
			adminPage.setToAdmin2(client)
			navigation.logout();
			
			loginPage.userLogin(client);	
			var reportPage = client.page.reportPage();
			reportPage.c9reports(client);
			reportPage.cloud9Usage(client);
			reportPage.userButtonRport(client);
			reportPage.firmButtonReport(client);
			reportPage.weekButton();
			reportPage.monthButton();
			
			client.closeWindow();
			client.end();
			
		}
}
