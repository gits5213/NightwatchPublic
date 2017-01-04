module.exports ={
		'Non-C9 Privileges - Compliance': function(client){
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
			adminPage.setToCompliance(client)
			adminPage.saveConfirm(client);
			adminPage.adminLevelToastMess();
			navigation.logout();
			
			loginPage.userLogin(client)
			navigation.selectSettingGear();
			navigation.getText('@privilege',function(result){
				navigation.verify.equal(result.value, "Privilege : compliance");
			});
			
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