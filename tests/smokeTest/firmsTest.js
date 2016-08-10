module.exports ={
		'Cloud9 Portal Smoke Test - Firms': function(client){
			var loginPage = client.page.loginPage();
			client.url(client.launch_url);
			client.windowHandle(function(hand){
				var handle = hand.value;
				client.windowSize(handle,1700,800);
			});
			
			//Log In 
			loginPage.adminLogin(client);

			//Firm Tab.................................
			var firmsPage = client.page.firmsPage();
			firmsPage.portalFirmsTab();
			firmsPage.firmTabResultVerify();
			
			//Edit Firm Button
			firmsPage.getFirm_ByName(client);
			firmsPage.getEditFirmByChangingAddress();

			//Manage Group Button
			firmsPage.getFirm_ByName(client);
			firmsPage.manageGroupBtn(client);
			
			//Manage Connections Button
			firmsPage.portalFirmsTab();
			firmsPage.getFirm_ByName(client);
			firmsPage.manageConnectionsBtn(client);
			
			//Manage Users
			firmsPage.portalFirmsTab();
			firmsPage.getFirm_ByName(client);
			firmsPage.manageUsersBtn(client);
			
			//Details
			firmsPage.portalFirmsTab();
			firmsPage.getDetailsBtn(client);
			
			
			console.log('Test cases Countinuing')
			client.closeWindow();
			client.end();
			
		},
		
}