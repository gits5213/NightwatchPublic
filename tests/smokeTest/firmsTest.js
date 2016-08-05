module.exports ={
		'Cloud9 Portal Smoke Test - Firms': function(client){
			var loginPage = client.page.loginPage();
			client.url(client.globals.qa2_baseUrl);
			client.maximizeWindow();
			
			//Log In 
			loginPage.reportCloud9AdminLogin(client);

			//Firm Tab.................................
			var firmsPage = client.page.firmsPage();
			firmsPage.portalFirmsTab();
			firmsPage.firmTabResultVerify();
			
			//Edit Firm Button
			firmsPage.getFirmByName(client);
			firmsPage.getEditFirmByChangingAddress();

			//Manage Group Button
			firmsPage.getFirmByName(client);
			firmsPage.manageGroupBtn(client);
			
			//Manage Connections Button
			firmsPage.portalFirmsTab();
			firmsPage.getFirmByName(client);
			firmsPage.manageConnectionsBtn(client);
			
			//Manage Users
			firmsPage.portalFirmsTab();
			firmsPage.getFirmByName(client);
			firmsPage.manageUsersBtn(client);
			
			//Details
			firmsPage.portalFirmsTab();
			firmsPage.getDetailsBtn(client);
			
			
			console.log('Test cases Countinuing')
			client.closeWindow();
			client.end();
			
		},
		
}