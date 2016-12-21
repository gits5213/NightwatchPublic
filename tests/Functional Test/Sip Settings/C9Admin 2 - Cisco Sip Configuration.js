module.exports ={
		'Admin2- Ability to Edit or Modify Cisco SIP Config For C2C Feature': function(client){
			
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
			adminPage.setToAdmin2(client)
			adminPage.saveConfirm(client);
			adminPage.adminLevelToastMess();
			navigation.logout();
			loginPage.userLogin(client);
			
			var usersPage = client.page.usersPage();
			usersPage.go();
			
			usersPage.userNameSearchAll(client.globals.nonAdminUser,client);
			usersPage.selectFirstRow();
			usersPage.clickToCallTab(client);
			
			var clickToCallPage = client.page.clickToCallPage(client);
			clickToCallPage.selectProvider('Cisco Call Manager 10.x',client);
			clickToCallPage.getDomain1(client);
			
			var dateString = clickToCallPage.createsSIPSettings(client, dateString); 
			clickToCallPage.ciscoCallExtSett(client, dateString);  
			clickToCallPage.domainPlus(client);
			clickToCallPage.extenSetPlus(client, dateString);  
			clickToCallPage.click('@saveSettingsBtn');
			client.pause(1500);	
			clickToCallPage.getText('@toastMess',function(errorMes){
				clickToCallPage.verify.equal(errorMes.value,'SIP PBX Settings saved successfully')
				});
			client.pause(7000);
			clickToCallPage.click('@goBackBtnSS');
			client.pause(2000);
			
			usersPage.selectFirstRow();
			usersPage.clickToCallTab(client);
			
			clickToCallPage.click('@domainNameMinus');
			client.pause(3000);
			clickToCallPage.click('@extSettMinis');
			client.pause(3000);
			clickToCallPage.click('@saveSettingsBtn');
			client.pause(3000);
			clickToCallPage.click('@goBackBtnSS');
			client.pause(3000);
			
			usersPage.selectFirstRow();
			usersPage.clickToCallTab(client);
			
			clickToCallPage
			.verify.valueContains('@selectProvider', 'CiscoCallManager')
			.verify.valueContains('@domainName1',client.globals.CiscoDomainName1)
			.verify.valueContains('@portNumber','5060')
			.verify.valueContains('@userName','EricT')
			.verify.valueContains('@authId','Tonder')
	
			clickToCallPage.createFavorites(client, dateString); //, dateString
			clickToCallPage.SelectDefaultOption(client, 'Mobile');
			client.pause(2000);
			clickToCallPage.click('@favoritesPlus');
			client.pause(1000);
			clickToCallPage.click('@favoritesMinis');
			client.pause(1000);
			clickToCallPage.saveFavorites();
			client.pause(1500);
			clickToCallPage.getText('@toastMess',function(errorMes){
				clickToCallPage.verify.equal(errorMes.value,'Favorites saved successfully')
				});
			client.pause(7000);	
			clickToCallPage.click('@goBackBtnF');
			client.pause(2000);

			usersPage.selectFirstRow();
			usersPage.clickToCallTab(client);
			
			clickToCallPage.click('@favoritesBtn');
			client.pause(2000);
			
			clickToCallPage
			.verify.valueContains('@businessBtn','19175616551')
			.verify.valueContains('@mobileBtn','19175616552')
			.verify.valueContains('@homeBtn','19175616552')
			.verify.valueContains('@homeBtn','19175616552')
			client.pause(1000);
			
			clickToCallPage.click('@goBackBtnSS');
			client.pause(2000);
		
			var recordingsPage = client.page.recordingsPage();
			recordingsPage.go(client);
			recordingsPage.verify.urlContains('#/recordings');
			recordingsPage.callType(client)
			recordingsPage.click('@detailsBtn');

		client.end();	
			
			
			
			
			
		}
				
}

