module.exports ={
		'C9Admin- Ability to Edit or Modify Cisco SIP Config For C2C Feature': function(client){
			var loginPage = client.page.loginPage();
			client.url(client.launch_url);
			client.windowHandle(function(hand){
				var handle = hand.value;
				client.windowSize(handle,1700,800);
			});
					
			loginPage.adminLogin(client);
			
			client.pause(2000);
			var usersPage = client.page.usersPage();
			usersPage.go();
			
			client.pause(2000);
			usersPage.selectFirm('000 Firm A', client);  
			
			var user1 = usersPage.createUser(client);
			usersPage.voiceRecYes();
			usersPage.selectC2C();
			usersPage.userSubmit(client);
			usersPage.addUserSubmit(client);
			
			client.pause(5000);
			var userGroupsPage= client.page.editUserGroupsPage();
			userGroupsPage.verify.urlContains('#/editUserGroups');
			userGroupsPage.addGrp2User();
			client.assert.urlContains('firmId=')

			usersPage.go();
			usersPage.userNameSearch(user1);
			usersPage.firstRow();
			usersPage.editUserButton();
			usersPage.editUserRecord(user1);
			usersPage.voiceRecNo();
			usersPage.editUserSubmit();
			
			usersPage.firstRow();
			usersPage.editUserButton();
			
			usersPage
			.verify.valueContains('@firmName', '000 Firm A')
			.verify.valueContains('@username','erict'+user1)
			.verify.valueContains('@fnameField','Tonder')
			.verify.valueContains('@lnameField','Eric'+user1[0])
			.verify.valueContains('@emailField','updateduser@c9tec.com')
			
			.verify.valueContains('@street1','1 So Amazing Ct')
			.verify.valueContains('@street2','Penthouse')
			.verify.value('@country','string:United States')
			.verify.value('@state','string:New York')
			.verify.valueContains('@city','Real Town')
			.verify.valueContains('@zip',77777)
			
			.verify.valueContains('@workField','011-234-5294')
			.verify.valueContains('@mobileField','011-234-5555')
			.verify.valueContains('@voiceNo',0)
			.verify.urlContains('#/editUser')
			usersPage.editUserSubmit();
			
			
			
			usersPage.firstRow();
			usersPage.clickToCall_Button(client);
			
			var clickToCallPage = client.page.clickToCallPage(client);
			clickToCallPage.selectProvider('Cisco Call Manager 10.x',client);
			clickToCallPage.getDomain1(client, client.globals.domainName);
			
			var dateString = clickToCallPage.createsSIPSettings(client, dateString);  //dateString
			clickToCallPage.ciscoCallExtSett(client, dateString);
			
			clickToCallPage.domainPlus(client);
			clickToCallPage.extenSetPlus(client, dateString);
			
			clickToCallPage.click('@saveSettingsBtn');
			clickToCallPage.click('@goBackBtnSS');
			client.pause(3000);
			
			usersPage.firstRow();
			usersPage.clickToCall_Button(client);
			
			
			clickToCallPage.click('@domainNameMinus');
			client.pause(3000);
			clickToCallPage.click('@extSettMinis');
			client.pause(3000);
			clickToCallPage.click('@saveSettingsBtn');
			client.pause(3000);
			clickToCallPage.click('@goBackBtnSS');
			client.pause(3000);
			
			usersPage.firstRow();
			usersPage.clickToCall_Button(client);
			
			clickToCallPage
			.verify.valueContains('@selectProvider', 'CiscoCallManager')
			.verify.valueContains('@domainName1','c9tec.onsip.com')
			.verify.valueContains('@portNumber','5060')
			.verify.valueContains('@userName','Eric'+user1[0])
			.verify.valueContains('@authId','Tonder'+user1[0])
			.verify.valueContains('@authPaswd','AbCa_12@'+user1[0])
	
			clickToCallPage.createFavorites(client, dateString);
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
			recordingsPage.callType(client)
			recordingsPage.getVerifyC2C(client);
			recordingsPage.expect.element('@usernameBtn').text.to.equal('Username');
			recordingsPage.expect.element('@firmIDBtn').text.to.equal('Firm ID');
			recordingsPage.expect.element('@firmNameBtn').text.to.equal('Firm Name');
			recordingsPage.expect.element('@extNumBtn').text.to.equal('Extension Number');
			recordingsPage.expect.element('@farEndUserNameBtn').text.to.equal('Far End Username');
			recordingsPage.expect.element('@durationBtn').text.to.equal('Duration');
			recordingsPage.expect.element('@startTimeBtn').text.to.equal('Start Time');
			recordingsPage.expect.element('@stopTimeBtn').text.to.equal('Stop Time');
			recordingsPage.expect.element('@startActionBtn').text.to.equal('Start Action');
			recordingsPage.expect.element('@stopReBtn').text.to.equal('Stop Reason');
			recordingsPage.expect.element('@recordingFiBtn').text.to.equal('Recording Filename');
			recordingsPage.expect.element('@dialTelBtn').text.to.equal('Dialing Tel #');
			
		client.end();	
			
			
			
			
			
		}
				
}

