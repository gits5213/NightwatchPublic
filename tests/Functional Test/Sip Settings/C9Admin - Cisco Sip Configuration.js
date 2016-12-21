module.exports ={
		'C9Admin- Ability to Edit or Modify Cisco SIP Config For C2C Feature': function(client){
			var loginPage = client.page.loginPage();
			client.url(client.launch_url);
			client.maximizeWindow();		
			loginPage.adminLogin(client);
			
			var firmsPage = client.page.firmsPage();
			var addEditFirmsPage = client.page.addEditFirmsPage();
			firmsPage.go();
			firmsPage.addFirmTab();
			
			var dateString = addEditFirmsPage.addNewFirm(client);
			addEditFirmsPage.addEditSubmitBtn();
			addEditFirmsPage.addEditSubToastMess();
			console.log('About to create: Test Firm '+dateString);
			
			var groupsPage = client.page.groupsPage();
			client.assert.urlContains('#/addGroup');
			groupsPage.selectFirm(client, dateString);
			
			var addEditGroupsPage = client.page.addEditGroupsPage();
			addEditGroupsPage.addGrpForFirm(client,dateString);
			addEditGroupsPage.addEditGroupSubmitBtn();
			addEditGroupsPage.addEditGSbmitTosatMess();
			client.assert.urlContains('firmId=');

			var usersPage = client.page.usersPage();
			usersPage.go();
			usersPage.addUserTab(client);
			
			var addEditUsersPage = client.page.addEditUsersPage();
			addEditUsersPage.selectFirm(dateString,client);
			
			var user1 = addEditUsersPage.createUser(client);
			console.log('Successfully created: New User '+user1);
			addEditUsersPage.voiceRecYes();
			addEditUsersPage.selectC2C();
			addEditUsersPage.userSubmit(client);
			addEditUsersPage.addUserSubmit(client);
			addEditUsersPage.getAddUToMess();
			
			var userGroupsPage= client.page.addEditGroupsPage();
			userGroupsPage.verify.urlContains('#/editUserGroups')
			addEditGroupsPage.selectFirstGroup();
			addEditGroupsPage.addG2UBtn();
			addEditGroupsPage.doneButton();
			client.assert.urlContains('firmId=')

			usersPage.selectFirstRow();
			usersPage.clickToCallTab(client);
			
			var clickToCallPage = client.page.clickToCallPage(client);
			clickToCallPage.selectProvider('Cisco Call Manager 10.x',client);
			clickToCallPage.getDomain1(client, client.globals.CiscoDomainName1);
			
			clickToCallPage.createsSIPSettings(client, user1); 
			client.pause(1000);
			clickToCallPage.ciscoCallExtSett(client, user1);
			
			clickToCallPage.domainPlus(client);
			clickToCallPage.extenSetPlus(client, user1);
			clickToCallPage.click('@saveSettingsBtn');
			
			client.pause(500);	
			clickToCallPage.getText('@toastMess',function(errorMes){
				clickToCallPage.verify.equal(errorMes.value,'SIP PBX Settings saved successfully')
				});
			clickToCallPage.click('@goBackBtnSS');
				
			usersPage.selectFirstRow();
			usersPage.clickToCallTab(client);
			
			clickToCallPage.click('@domainNameMinus');
			client.pause(2000);
			clickToCallPage.click('@extSettMinis');
			client.pause(2000);
			clickToCallPage.click('@saveSettingsBtn');
			client.pause(500);	
			clickToCallPage.getText('@toastMess',function(errorMes){
				clickToCallPage.verify.equal(errorMes.value,'SIP PBX Settings saved successfully')
				});
			client.pause(7000);
			clickToCallPage.click('@goBackBtnSS');
			
			usersPage.selectFirstRow();
			usersPage.clickToCallTab(client);
			
			clickToCallPage
			.verify.valueContains('@selectProvider', 'CiscoCallManager')
			.verify.valueContains('@domainName1','173.226.129.163')
			.verify.valueContains('@portNumber','5060')
			.verify.valueContains('@userName','EricT'+user1[0])
			.verify.valueContains('@authId','Tonder'+user1[0])
			.verify.valueContains('@authPaswd','AbCa_12@'+user1[0])
	
			clickToCallPage.createFavorites(client, user1);
			clickToCallPage.SelectDefaultOption(client,'Mobile');
			client.pause(500);	
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
			client.pause(1000);
			clickToCallPage.click('@goBackBtnSS');
		
			var recordingsPage = client.page.recordingsPage();
			recordingsPage.go(client);
			recordingsPage.verify.urlContains('#/recordings');
			
			recordingsPage.callType(client)
			recordingsPage.click('@detailsBtn');
			//recordingsPage.textVerify(client);	
		client.end();	
			
		}
				
}

