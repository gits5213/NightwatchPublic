module.exports ={
		
'Non-C9 Privileges - Compliance': function(client){
			
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
			adminPage.setToCompliance(client)
			navigation.logout();
			
			//this.waitForElementNotVisible('@logoff',5000,'User logoff was successful');
			
			loginPage.userLogin(client)
			
			client.verify.containsText('body', 'Welcome to the Cloud9 Portal')
			
			var navigation = client.page.navBar();
			navigation.expect.element('@firms').to.not.be.visible
			navigation.expect.element('@groups').to.not.be.visible
			navigation.expect.element('@users').to.not.be.visible
			navigation.expect.element('@connections').to.not.be.visible
			navigation.verify.visible('@recordings')
			.verify.visible('@help')
			navigation.expect.element('@viewLogs').to.not.be.visible;
			navigation.click('@firms');
			
			navigation.click('@recordings');
			navigation.api.pause(1000);
			
			var recPage=client.page.recordingsPage();
			recPage
			.verify.visible('@backBtn','Backward button is visible')
			.verify.visible('@playBtn','Play button is visible')
			.verify.visible('@forwardBtn','Forward button is visible')
			.verify.visible('@speedBtn', 'Speed button is visible')
			.verify.visible('@slider','Slider is visible')
			.verify.visible('@viewQosBtn','Qos button is visible')
			.verify.visible('@detailsBtn', 'Details button is visible')
			.verify.visible('@exportBtn','Export button is visible')
			.verify.visible('@downloadBtn','Download button is visible')
			.verify.visible('@callType','Calltype dropdown is visible')
			.verify.visible('@show','Show drowdown is visible')
			
			navigation.click('@cog');
			navigation.api.pause(1000);
			navigation.getText('@privilege',function(result){
				navigation.verify.equal(result.value, "Privilege : compliance");
			})
			
			var navigation = client.page.navBar()
			navigation.logout();
			
			client.end();
			
		}
			
}