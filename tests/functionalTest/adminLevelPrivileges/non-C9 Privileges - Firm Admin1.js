module.exports ={
		
		'Non-C9 Privileges - Firm Admin1': function(client){
			
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
			adminPage.setToAdmin1(client)
			navigation.logout();
			
			loginPage.userLogin(client)
			
			client.verify.containsText('body', 'Welcome to the Cloud9 Portal')
			
			var navigation = client.page.navBar();
			navigation
			.verify.visible('@firms')
			.verify.visible('@groups')
			.verify.visible('@users')
			.verify.visible('@connections')
			.verify.visible('@recordings');
			navigation.verify.visible('@help');
			navigation.expect.element('@viewLogs').to.not.be.visible;
			navigation.click('@firms');
			client.pause(1000);
			
			var firmsPage= client.page.firmsPage();
			firmsPage
			.verify.visible('@editFirmBtn')
			.verify.visible('@manageGrpBtn')
			.verify.visible('@manageConnBtn')
			.verify.visible('@manageUsersBtn')
			.verify.visible('@detailsBtn')
			.verify.visible('@exportBtn')
			firmsPage.expect.element('@addFirmBtn').to.not.be.visible
			
			navigation.click('@groups')
			navigation.api.pause(1000);
			
			var groupsPage=client.page.groupsPage();
			groupsPage
			.verify.visible('@addGroupBtn')
			.verify.visible('@editGrpBtn')
			.verify.visible('@editGrpUsersBtn')
			.verify.visible('@viewGrpConnBtn')
			.verify.visible('@delGrpBtn')
			.verify.visible('@detailsBtn')
			.verify.visible('@exportBtn')
			.verify.elementNotPresent('@selectFirmBarsearch2','Firm selection bar is not visible for Admin1 user');
			
			client.elements('xpath','//*[@id="scrollable-area"]/table/tbody/tr',function(result){
				client.verify.notEqual(result.value.length, 25, 'There should be at less than 25 groups on this page');
			});
			
			navigation.click('@users')
			navigation.api.pause(1000);
			
			var usersPage=client.page.usersPage();
			usersPage
			.verify.visible('@editUserBtn')
			.verify.visible('@addUserBtn')
			.verify.visible('@editBtn')
			.verify.visible('@editGrpsBtn')
			.verify.visible('@resetPassBtn')
			.verify.visible('@deleteUserBtn')
			.verify.visible('@detailsBtn')
			.verify.visible('@exportBtn')
			.verify.visible('@editNeighBtn')
			usersPage.expect.element('@editAdminBtn').to.not.be.visible
			usersPage.expect.element('@editSalesUserBtn').to.not.be.visible
			
			navigation.click('@connections');
			navigation.api.pause(1000);
			
			var connPage=client.page.connectionsPage();
			connPage
			.verify.visible('@addConnBtn')
			.verify.visible('@editConnBtn')
			.verify.visible('@delConnBtn')
			.verify.visible('@detailsBtn')
			.verify.visible('@exportBtn')
			
			navigation.click('@recordings');
			navigation.api.pause(1000);
			
			var recPage=client.page.recordingsPage();
			recPage
			.verify.visible('@backBtn','Backward button is visible')
			.verify.visible('@playBtn', 'Play button is visible')
			.verify.visible('@forwardBtn','Forward button is visible')
			.verify.visible('@speedBtn','Speed button is visible')
			.verify.visible('@slider','Slider is visible')
			.verify.visible('@viewQosBtn', 'Qos button is visible')
			.verify.visible('@detailsBtn','Details button is visible')
			.verify.visible('@exportBtn', 'Export button is visible')
			.verify.visible('@downloadBtn','Download button is visible')
			.verify.visible('@callType', 'Calltype dropdown is visble')
			.verify.visible('@show','Show dropdown is visible')
			
			navigation.click('@cog');
			navigation.api.pause(1000);
			navigation.getText('@privilege',function(result){
				navigation.verify.equal(result.value, "Privilege : firmAdmin1");
			})
			
			client.end();
			
		}
				
}