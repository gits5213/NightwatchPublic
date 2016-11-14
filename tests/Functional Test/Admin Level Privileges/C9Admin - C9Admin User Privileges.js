module.exports ={
		
		'C9 Admin User  Privileges': function(client){
			var loginPage = client.page.loginPage();
			console.log("\n",client.launch_url,'\n');
			client.maximizeWindow();
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
				client.verify.equal(result.value.length, 25, 'There should be less than 25 groups on this page');
			});
			
			
			navigation.click('@users')
			navigation.api.pause(1000);
						
			var usersPage=client.page.usersPage();
			usersPage
			.verify.visible('@editUserBtn')
			.verify.visible('@addUserBtn')
			.verify.visible('@editSalesUserBtn')
			.verify.visible('@editAdminBtn')
			.verify.visible('@editBtn')
			.verify.visible('@editGrpsBtn')
			.verify.visible('@resetPassBtn')
			.verify.visible('@deleteUserBtn')
			.verify.visible('@salesRptBtn')
			.verify.visible('@detailsBtn')
			.verify.visible('@exportBtn')
			.verify.visible('@editNeighBtn')
			
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
			.verify.visible('@exportBtn')
			.verify.visible('@downloadBtn')
			.verify.visible('@callTypeTab')
			.verify.visible('@show')
			
			navigation.click('@cog');
			navigation.api.pause(1000);
			navigation.getText('@privilege',function(result){
				navigation.verify.equal(result.value, "Privilege : cloud9");
			})
			
			client.end();
		}
		
}