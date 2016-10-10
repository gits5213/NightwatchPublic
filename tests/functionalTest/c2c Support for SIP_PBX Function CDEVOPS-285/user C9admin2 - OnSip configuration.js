module.exports ={
		'Admin2- Ability to Edit or Modify Cisco SIP Config For C2C Feature': function(client){
			
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
			
			
			loginPage.userLogin(client);
			client.pause(2000);
			var usersPage = client.page.usersPage();
			usersPage.go();
			
			client.pause(2000);
			usersPage.c2cNameSearch(client.globals.nonAdminUser,client);
			
			usersPage.firstRow();
			usersPage.editUserButton();
			usersPage.expect.element('@clicToCall').text.to.not.equal('Click to Call');
			usersPage
			.verify.valueContains('@firmName', 'C9 Technologies')
			.verify.valueContains('@username','testadmin2')
			.verify.valueContains('@fnameField','Tonder')
			.verify.valueContains('@lnameField','Ericundefined')
			.verify.valueContains('@emailField','updateduser@c9tec.com')
			.verify.valueContains('@street2','')
			.verify.value('@country','string:United States')
			.verify.value('@state','string:New York')
			.verify.valueContains('@city','NY')
			.verify.valueContains('@zip', '10037')
			.verify.valueContains('@workField','011-234-5294')
			.verify.valueContains('@mobileField','011-234-5294')
			.verify.valueContains('@voiceNo',0)
			.verify.urlContains('#/editUser');
			
			usersPage.editUserSubmit();
			
			client.pause(2000);
			usersPage.firstRow();
			usersPage.clickToCall_Button(client);
			
			var clickToCallPage = client.page.clickToCallPage(client);
			clickToCallPage.selectProvider('OnSip.com',client);
			clickToCallPage.getDomain(client, client.globals.domainName);
			
			var dateString = clickToCallPage.createsSIPSettings(client, dateString); 
			clickToCallPage.onSIPextSett(client, dateString);
			clickToCallPage.expect.element('@domainNamePlus').to.not.be.present;
			clickToCallPage.expect.element('@extSettPlus').to.not.be.present;
			clickToCallPage.click('@outBoundChaOnSip');
						
			clickToCallPage.click('@saveSettingsBtn');
			clickToCallPage.click('@goBackBtnSS');
			client.pause(2000);
						
			usersPage.firstRow();
			usersPage.clickToCall_Button(client);
			
			clickToCallPage
			.verify.valueContains('@selectProvider', 'OnSip')
			.verify.valueContains('@domain','c9tec.onsip.com')
			.verify.valueContains('@portNumber','5060')
			.verify.valueContains('@userName','Eric')
			.verify.valueContains('@authId','Tonder')
			.verify.valueContains('@authPaswd','AbC@')
	
			clickToCallPage.createFavorites(client, dateString); //, dateString
			clickToCallPage.selectDefault('Mobile',client);
			
			clickToCallPage.click('@favoritesPlus');
			client.pause(2000);
			clickToCallPage.click('@favoritesMinis');
			
		
			clickToCallPage.saveFavorites();
			client.pause(2000);
		
			clickToCallPage.click('@goBackBtnF');
			client.pause(3000);
			
			usersPage.firstRow();
			usersPage.clickToCall_Button(client);
			
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
			recordingsPage
				.verify.urlContains('#/clickToCall')
				.go(client);
			recordingsPage.verify.urlContains('#/recordings');
			recordingsPage.callType(client);
			recordingsPage.expect.element('@clickToCallDM').text.to.not.equal('Click to Call');
			
			
		client.end();	
			
			
			
			
			
		}
				
}

