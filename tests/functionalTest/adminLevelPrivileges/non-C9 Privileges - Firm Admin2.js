module.exports ={
		
		'Non-C9 Privileges - Firm Admin2': function(client){
			
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
			adminPage.setToAdmin2(client)
			navigation.logout();
			
			loginPage.userLogin(client)
			
			client.verify.containsText('body', 'Welcome to the Cloud9 Portal')
			
			var navigation = client.page.navBar();
			navigation
			.verify.visible('@firms')
			.verify.visible('@groups')
			.verify.visible('@users')
			.verify.visible('@connections')
			.verify.visible('@recordings')
			.verify.visible('@viewLogs')
			.verify.visible('@help')
			.click('@firms')
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
			.verify.elementNotPresent('@selectFirmBarsearch2','Firm selection bar is not visible Admin2 user');
			
			
			navigation.click('@users')
			navigation.api.pause(2000);
			
			client.elements('xpath','//*[@id="scrollable-area"]/table/tbody/tr',function(result){
				client.verify.equal(result.value.length, 25, 'There should be less than 25 groups on this page');  //notEqual
			});
			
			var usersPage=client.page.usersPage();
			usersPage
			.verify.visible('@editUserBtn')
			.verify.visible('@addUserBtn')
			.verify.visible('@editAdminBtn')
			.verify.visible('@editBtn')
			.verify.visible('@editGrpsBtn')
			.verify.visible('@resetPassBtn')
			.verify.visible('@deleteUserBtn')
			.verify.visible('@detailsBtn')
			.verify.visible('@exportBtn')
			.verify.visible('@editNeighBtn')
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
			.verify.visible('@backBtn')
			.verify.visible('@playBtn')
			.verify.visible('@forwardBtn')
			.verify.visible('@speedBtn')
			.verify.visible('@slider')
			.verify.visible('@viewQosBtn')
			.verify.visible('@detailsBtn')
			.verify.visible('@callTypeBtn')
			.verify.visible('@downloadBtn')
			.verify.visible('')
			.verify.visible('@show')
			
			navigation.click('@cog');
			navigation.api.pause(1000);
			navigation.getText('@privilege',function(result){
				navigation.verify.equal(result.value, "Privilege : firmAdmin2");
			})
			
			client.end();
			
		},
		
}