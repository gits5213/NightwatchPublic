module.exports ={
		'Non-admin Privileges - None': function(client){
			var navigation = client.page.navBar();
			var loginPage = client.page.loginPage();
			client.maximizeWindow();
			client.url(client.launch_url);
			loginPage.adminLogin(client);
			var usersPage = client.page.usersPage();
			usersPage.go();
			
			usersPage.selectFirmAll(client, client.globals.adminFirm);
			usersPage.userNameSearchAll(client.globals.nonAdminUser,client);
			usersPage.selectFirstRow();
			usersPage.editAdminLevelTab();
			
			var adminPage=client.page.editAdminPage();
			adminPage.setToNone(client);
			adminPage.click('@tfa_No');
			adminPage.saveConfirm(client);
			adminPage.adminLevelToastMess();
			
			usersPage.selectFirstRow();
			usersPage.click('@editAdminBtn');
			adminPage.setToNone(client);
			adminPage.click('@tfa_Yes');
			adminPage.saveConfirm(client);
			adminPage.adminLevelToastMess();
			navigation.logout();
			
			loginPage.userLoginFail(client.globals.nonAdminUser,client.globals.nonAdminPass)
			loginPage.getText('@loginFail1',function(result){
				loginPage.verify.equal(result.value,'Login failed, check your username and password and try again.')
			});
			client.end();
			
		}
		
}