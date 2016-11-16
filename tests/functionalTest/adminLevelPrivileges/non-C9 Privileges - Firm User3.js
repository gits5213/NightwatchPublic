module.exports ={
				
		'Non-C9 Privileges - Firm User3': function(client){
			
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
			usersPage.click('@editAdminBtn');
			
			var adminPage=client.page.editAdminPage();
			adminPage.setToUser3(client)
			navigation.logout();
			
			loginPage.userLogin(client)
			
			client.verify.containsText('body', 'Welcome to the Cloud9 Portal')
			
			var navigation = client.page.navBar();
			
			navigation.expect.element('@firms').to.not.be.visible
			navigation.expect.element('@groups').to.not.be.visible
			navigation.verify.visible('@users')
			navigation.expect.element('@connections').to.not.be.visible
			navigation.verify.visible('@recordings')
			.verify.visible('@help')
			navigation.expect.element('@viewLogs').to.not.be.visible;
			
			navigation.click('@users')
			navigation.api.pause(1000);
			
			var usersPage=client.page.usersPage();
			
			usersPage.verify.visible('@editUserBtn')
			usersPage.expect.element('@addUserBtn').to.not.be.visible
			usersPage.expect.element('@editGrpsBtn').to.not.be.visible;
			usersPage.expect.element('@resetPassBtn').to.not.be.visible;
			usersPage.expect.element('@deleteUserBtn').to.not.be.visible;
			usersPage.expect.element('@detailsBtn').to.not.be.visible;
			usersPage.expect.element('@exportBtn').to.not.be.visible;
			usersPage.expect.element('@editNeighBtn').to.not.be.visible;
			usersPage.expect.element('@editAdminBtn').to.not.be.visible
			usersPage.expect.element('@editSalesUserBtn').to.not.be.visible
			
			navigation.click('@recordings');
			navigation.api.pause(1000);
			
			var recPage=client.page.recordingsPage();
			recPage
			.verify.visible('@backBtn','Back button is visible')
			.verify.visible('@playBtn', 'Play button is visible')
			.verify.visible('@forwardBtn', 'Forward button is visible')
			.verify.visible('@speedBtn', 'Speed button is visible')
			.verify.visible('@slider','Slider is visible')
			.verify.visible('@viewQosBtn','Qos button is visible')
			.verify.visible('@detailsBtn','Details button is visible')
			.verify.visible('@exportBtn', 'Export button is visible')
			.verify.visible('@downloadBtn', 'Download button is visible')
			.verify.visible('@callType', 'Calltype dropdown is visible')
			.verify.visible('@show', 'Show dropdown is visible')
			
			navigation.click('@cog');
			navigation.api.pause(1000);
			navigation.getText('@privilege',function(result){
				navigation.verify.equal(result.value, "Privilege : user3");
			})
			
			var navigation = client.page.navBar()
			navigation.logout();
			client.end();
			
		}
				
}