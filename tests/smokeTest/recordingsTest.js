module.exports ={
		'Cloud9 Portal Smoke Test - Recordings': function(client){
			var navigation = client.page.navBar();
			var loginPage = client.page.loginPage();
			var usersPage = client.page.usersPage();
			client.windowHandle(function(hand){
				var handle = hand.value;
				client.windowSize(handle,1700,800);
			});
			client.url(client.launch_url);
			
			loginPage.adminLogin(client);
			
			
			usersPage.go();
			
			
			usersPage.editAdminInfo(client.globals.nonAdminUser,client);
			
			var adminPage=client.page.editAdminPage();
			adminPage.setToAdmin2(client)
			navigation.logout();
			
			
			
			loginPage.userLogin(client);
			
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