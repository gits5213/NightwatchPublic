module.exports ={
		'Admin2- Ability to Edit or Modify OnSIP Config For C2C Feature': function(client){
			
			var navigation = client.page.navBar();
			var loginPage = client.page.loginPage();
			var usersPage = client.page.usersPage();
			client.maximizeWindow();
			
			client.url(client.launch_url);
			loginPage.adminLogin(client);
			usersPage.go();
			
			usersPage.editAdminInfo(client.globals.nonAdminUser,client);
			usersPage.click('@editAdminBtn');
			
			var adminPage=client.page.editAdminPage();
			adminPage.setToAdmin2(client)
			client.pause(7000);
			navigation.logout();
			
			
			loginPage.userLogin(client);
			
			var usersPage = client.page.usersPage();
			usersPage.go();

			usersPage.c2cNameSearch(client.globals.nonAdminUser,client);
						
			usersPage.selectFirstRow();
			usersPage.clickToCallTab(client);
			
			var clickToCallPage = client.page.clickToCallPage(client);
			clickToCallPage.selectProvider('OnSip.com',client);
			clickToCallPage.getDomain(client);
			
			var dateString;
			clickToCallPage.createsSIPSettings(client, dateString); 
			clickToCallPage.onSIPextSett(client, dateString);
			clickToCallPage.expect.element('@domainNamePlus').to.not.be.present;
			clickToCallPage.expect.element('@extSettPlus').to.not.be.present;
			clickToCallPage.click('@outBoundChaOnSip');	
			clickToCallPage.click('@saveSettingsBtn');
			client.pause(500);	
			clickToCallPage.getText('@toastMess',function(errorMes){
				clickToCallPage.verify.equal(errorMes.value,'SIP PBX Settings saved successfully')
				});
			client.pause(7000);
			clickToCallPage.click('@goBackBtnSS');
			client.pause(2000);
						
			usersPage.selectFirstRow();
			usersPage.clickToCallTab(client);
			
			clickToCallPage
			.verify.valueContains('@selectProvider', 'OnSip')
			.verify.valueContains('@domain', client.globals.OnSipDomainName)
			.verify.valueContains('@portNumber','5060')
			.verify.valueContains('@userName','EricT')
			.verify.valueContains('@authId','Tonder')

			
			clickToCallPage.createFavorites(client, dateString); 
			clickToCallPage.SelectDefaultOption(client, 'Mobile');
			clickToCallPage.click('@favoritesPlus');
			client.pause(2000);
			clickToCallPage.click('@favoritesMinis');
			clickToCallPage.saveFavorites();
			client.pause(500);
			clickToCallPage.getText('@toastMess',function(errorMes){
				clickToCallPage.verify.equal(errorMes.value,'Favorites saved successfully')
				});
			client.pause(7000);	
			clickToCallPage.click('@goBackBtnF');
			
			usersPage.selectFirstRow();
			usersPage.clickToCallTab(client);
			
			clickToCallPage.click('@favoritesBtn');
			clickToCallPage
			.verify.valueContains('@businessBtn','19175616551')
			.verify.valueContains('@mobileBtn','19175616552')
			.verify.valueContains('@homeBtn','19175616552')
			.verify.valueContains('@homeBtn','19175616552')
			clickToCallPage.click('@goBackBtnSS');

			var recordingsPage = client.page.recordingsPage();
			recordingsPage.verify.urlContains('#/clickToCall')
			recordingsPage.go(client);
			recordingsPage.verify.urlContains('#/recordings');
			recordingsPage.verify.visible('@callTypeTab');
			recordingsPage.expect.element('@callTypeTab').text.to.not.contain('Click to Call').before(1000);
			
			
		client.end();	
			
			
			
			
			
		}
				
}

