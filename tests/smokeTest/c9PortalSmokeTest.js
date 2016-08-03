module.exports ={
		'Cloud9 Portal Smoke Test': function(client){
			var c9PortalSmokeTestPage = client.page.c9PortalSmokeTestPage();
			client.url(client.globals.qa2_baseUrl);
			client.maximizeWindow();
			
			//Log In 
			c9PortalSmokeTestPage.c9AdminLogin(client);
			
			//Firm Tab.................................
			c9PortalSmokeTestPage.portalFirmsTab();
			c9PortalSmokeTestPage.firmTabResultVerify();
			
			//Edit Firm Button
			c9PortalSmokeTestPage.getFirmByName(client);
			c9PortalSmokeTestPage.getEditFirmByChangingAddress();

			//Manage Group Button
			c9PortalSmokeTestPage.getFirmByName(client);
			c9PortalSmokeTestPage.manageGroupBtn(client);
			
			//Manage Connections Button
			c9PortalSmokeTestPage.portalFirmsTab();
			c9PortalSmokeTestPage.getFirmByName(client);
			c9PortalSmokeTestPage.manageConnectionsBtn(client);
			
			//Manage Users
			c9PortalSmokeTestPage.portalFirmsTab();
			c9PortalSmokeTestPage.getFirmByName(client);
			c9PortalSmokeTestPage.manageUsersBtn(client);
			
			//Details
			c9PortalSmokeTestPage.portalFirmsTab();
			c9PortalSmokeTestPage.getDetailsBtn(client);
			
			//Groups Tab ............................			
			c9PortalSmokeTestPage.portalGroupsTab(client);
			
			//Edit Group
			c9PortalSmokeTestPage.getGroupByName(client);
			c9PortalSmokeTestPage.getEditGroup();
			
			//Edit Group Users
			c9PortalSmokeTestPage.getGroupByName(client);
			c9PortalSmokeTestPage.getEditGroupUsers();
			
			//Group Details
			c9PortalSmokeTestPage.groupDetailsBtn();
			
			
			
			
			console.log('Test cases Countinuing')
			client.closeWindow();
			client.end();
			
			
			
			
			
			
			
			
			
			
			
			
			
			/*var reportPage = client.page.reportPage();
			reportPage.c9reports(client);
			//reportPage.selectFirm(client);
			reportPage.cloud9Usage(client);
			reportPage.userButtonRport(client);
			reportPage.firmButtonReport(client);
			reportPage.weekButton();
			reportPage.monthButton();
			
			console.log('Test cases Countinuing')
			client.closeWindow();
			client.end();*/
			
		},
		
}