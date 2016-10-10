module.exports ={
		'OnSip - Ability to Add and Edit User with SIP_Ext_Favorites Settings For Click To Call Feature': function(client){
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
			
			var dateString = usersPage.selectFirm('000 Firm A', client);  //dateString
			
			client.pause(2000);
			var user1 = usersPage.createUser(client);
			usersPage.voiceRecYes();
			usersPage.selectC2C();
			usersPage.userSubmit(client);
			usersPage.addUserSubmit(client);
			
			
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
			client.pause(3000);
			
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
			
			var clickToCallPage = client.page.clickToCallPage();
			clickToCallPage.selectProvider('OnSip.com',client)
			clickToCallPage.getDomain(client, dateString);
			clickToCallPage.createsSIPSettings(client, dateString);
			clickToCallPage.onSIPextSett(client, dateString);
			
			clickToCallPage.click('@saveSettingsBtn');
			client.pause(2000);
			clickToCallPage.click('@goBackBtnSS');
			client.pause(3000);
			
			usersPage.firstRow();
			usersPage.clickToCall_Button(client);
			client.pause(2000);
			
			clickToCallPage
			.verify.valueContains('@selectProvider', 'OnSip')
			.verify.valueContains('@domain','c9tec.onsip.com')
			.verify.valueContains('@portNumber','5060')
			.verify.valueContains('@userName','Eric'+user1[0])
			.verify.valueContains('@authId','Tonder'+user1[0])
			.verify.valueContains('@authPaswd','AbC@'+user1[0]);
			
			client.pause(1000);
			clickToCallPage.click('@goBackBtnSS');	
			client.pause(2000);
			
			var recordingsPage = client.page.recordingsPage();
			recordingsPage
				.verify.urlContains('#/users')
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

