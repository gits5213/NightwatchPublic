module.exports ={
		'Non-C9 Privileges - Sales': function(client){
			var navigation = client.page.navBar();
			var loginPage = client.page.loginPage();
			var usersPage = client.page.usersPage();
			client.maximizeWindow();
			client.url(client.launch_url);
			loginPage.adminLogin(client);
			usersPage.go();
			
			usersPage.selectFirmAll(client, client.globals.adminFirm);
			usersPage.userNameSearchAll(client.globals.nonAdminUser,client);
			usersPage.selectFirstRow();
			usersPage.editAdminLevelTab();
			
			var adminPage=client.page.editAdminPage();
			adminPage.setToSales(client)
			adminPage.saveConfirm(client);
			adminPage.adminLevelToastMess();
			navigation.logout();
			
			loginPage.userLogin(client)
			navigation.selectSettingGear();
			navigation.getText('@privilege',function(result){
				navigation.verify.equal(result.value, "Privilege : cloud9Sales");
			});
			
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
			navigation.api.pause(1000);
			
			var firmsPage= client.page.firmsPage();
			
			firmsPage.expect.element('@editFirmBtn').to.not.be.visible
			firmsPage.verify.visible('@manageGrpBtn')
			.verify.visible('@manageConnBtn')
			.verify.visible('@manageUsersBtn')
			.verify.visible('@detailsBtn')
			.verify.visible('@exportBtn')
			firmsPage.expect.element('@addFirmBtn').to.not.be.visible
			
			navigation.click('@groups')
			navigation.api.pause(1000);
			
			var groupsPage=client.page.groupsPage();
			groupsPage.expect.element('@addGroupBtn').to.not.be.visible
			groupsPage.verify.visible('@editGrpBtn')
			groupsPage.expect.element('@editGrpUsersBtn').to.not.be.visible
			groupsPage.verify.visible('@viewGrpConnBtn')
			groupsPage.expect.element('@delGrpBtn').to.not.be.visible
			groupsPage.verify.visible('@detailsBtn')
			.verify.visible('@exportBtn')
			
			navigation.click('@users')
			navigation.api.pause(1000);
			
			var usersPage=client.page.usersPage();
			
			usersPage.expect.element('@editUserBtn').to.not.be.visible
			usersPage.expect.element('@addUserBtn').to.not.be.visible
			usersPage.expect.element('@editAdminBtn').to.not.be.visible
			usersPage.verify.visible('@editBtn')
			usersPage.expect.element('@editGrpsBtn').to.not.be.visible
			usersPage.expect.element('@resetPassBtn').to.not.be.visible
			usersPage.expect.element('@deleteUserBtn').to.not.be.visible
			usersPage.verify.visible('@detailsBtn')
			.verify.visible('@exportBtn')
			.verify.visible('@editNeighBtn')
			.verify.visible('@editSalesUserBtn')
			
			navigation.click('@connections');
			navigation.api.pause(1000);
			
			var connPage=client.page.connectionsPage();
			connPage
			.verify.visible('@addConnBtn')
			.verify.visible('@editConnBtn')
			connPage.expect.element('@delConnBtn').to.not.be.visible
			connPage.verify.visible('@detailsBtn')
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
			.verify.visible('@show');
				
			client.end();
			
		}
}