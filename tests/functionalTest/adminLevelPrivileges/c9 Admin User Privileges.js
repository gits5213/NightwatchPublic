module.exports ={
		
		'C9 Admin User  Privileges': function(client){
			var loginPage = client.page.loginPage();
			console.log("\n",client.launch_url,'\n');
			client.windowHandle(function(hand){
				var handle = hand.value;
				client.windowSize(handle,1700,800);
			});
			client.url(client.launch_url);
			loginPage.adminLogin(client);
			client.assert.containsText('body', 'Welcome to the Cloud9 Portal')
			
			var navigation = client.page.navBar();
			//check that entire navigation options are available to admin
			navigation
			.verify.visible('@firms')
			.verify.visible('@groups')
			.verify.visible('@users')
			.verify.visible('@connections')
			.verify.visible('@recordings')
			.verify.visible('@viewLogs')
			.verify.visible('@help')
			.click('@firms')
			
			var firmsPage= client.page.firmsPage();
			client.pause(2000);
			firmsPage
			.verify.visible('@addFirmBtn','Add Firm button visible')
			.verify.visible('@editFirmBtn','Edit Firm button visible')
			.verify.visible('@manageGrpBtn','Manage Groups button visible')
			.verify.visible('@manageConnBtn','Manage Connections button visible')
			.verify.visible('@manageUsersBtn', 'Manage Users button visible')
			.verify.visible('@detailsBtn','Details button visible')
			.verify.visible('@exportBtn','Export button visible')
			
			navigation.click('@groups')
			navigation.api.pause(1000);
			
			var groupsPage=client.page.groupsPage();
			groupsPage
			.verify.visible('@addGroupBtn', 'Add Group button is visible')
			.verify.visible('@editGrpBtn', 'Edit Group button is visible')
			.verify.visible('@editGrpUsersBtn','Edit Group Users button is visible')
			.verify.visible('@viewGrpConnBtn', 'View group connections button is visible')
			.verify.visible('@delGrpBtn','Delete button is visible')
			.verify.visible('@detailsBtn', 'Details button is visible')
			.verify.visible('@exportBtn', 'Export button is visible')
			.verify.elementPresent('@selectFirmBarsearch2','Firm selection bar is visible for C9 Admin user');
			
			client.elements('xpath','//*[@id="scrollable-area"]/table/tbody/tr',function(result){
				client.verify.notEqual(result.value.length, 25, 'There should be less than 25 groups on this page');
			});
			
			
			navigation.click('@users')
			navigation.api.pause(1000);
						
			var usersPage=client.page.usersPage();
			usersPage
			.verify.visible('@editUserBtn', 'Edit User button is visible')
			.verify.visible('@addUserBtn', 'Add User button is visible')
			.verify.visible('@editSalesUserBtn', 'Edit sales user button is visible')
			.verify.visible('@editAdminBtn', 'Edit Admin Priv button is visible')
			.verify.visible('@editBtn', 'Edit User button is visible')
			.verify.visible('@editGrpsBtn', 'Edit Group button is visible')
			.verify.visible('@resetPassBtn', 'Password Reset button is visible')
			.verify.visible('@deleteUserBtn', 'Delete User button is visible')
			.verify.visible('@salesRptBtn', 'Sales Report button is visible')
			.verify.visible('@detailsBtn', 'Details button button is visible')
			.verify.visible('@exportBtn', 'Export button is visible')
			.verify.visible('@editNeighBtn', 'Edit Neighbors button is visible')
			
			navigation.click('@connections');
			navigation.api.pause(1000);
			
			var connPage=client.page.connectionsPage();
			connPage
			.verify.visible('@addConnBtn', 'Add Connection button is visible')
			.verify.visible('@editConnBtn','Edit Connection button is visible')
			.verify.visible('@delConnBtn', 'Delete Connection button is visible')
			.verify.visible('@detailsBtn','Details button is visible')
			.verify.visible('@exportBtn','Export button is visible')
			
			navigation.click('@recordings');
			navigation.api.pause(1000);
			
			var recPage=client.page.recordingsPage();
			recPage
			.verify.visible('@backBtn',"Backward button is visible")
			.verify.visible('@playBtn', 'Play button is visible')
			.verify.visible('@forwardBtn', 'Forward button is visible')
			.verify.visible('@speedBtn', 'Speed button is visible')
			.verify.visible('@slider', 'Slider is visible')
			.verify.visible('@viewQosBtn','Qos button is visible')
			.verify.visible('@detailsBtn', 'Details button is visible')
			.verify.visible('@exportBtn','Export button is visible')
			.verify.visible('@downloadBtn','Download button is visible')
			.verify.visible('@callType','Calltype dropdown is visible')
			.verify.visible('@show','Show button is visible')
			
			navigation.click('@cog');
			navigation.api.pause(1000);
			navigation.getText('@privilege',function(result){
				navigation.verify.equal(result.value, "Privilege : cloud9");
			})
			
			var navigation = client.page.navBar()
			navigation.logout();
			
			client.end();
		}
		
}