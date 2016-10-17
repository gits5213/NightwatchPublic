module.exports ={
		'C9Admin- Ability to Edit or Modify OnSIP Config For C2C Feature': function(client){
			var loginPage = client.page.loginPage();
			client.url(client.launch_url);
			client.windowHandle(function(hand){
				var handle = hand.value;
				client.windowSize(handle,1700,800);
			});
					
			loginPage.adminLogin(client);
			
			var firmsPage = client.page.firmsPage();
			firmsPage.go();
			
			var dateString = firmsPage.addNewFirm(client);
			console.log('About to create: Test Firm '+dateString);  
			
			var groupsPage = client.page.groupsPage();
			groupsPage.go(client);
			client.assert.urlContains('#/addGroup');
			groupsPage.addGrpForFirm(dateString,client);
			client.assert.urlContains('firmId=');
			
			client.pause(1000);
			var usersPage = client.page.usersPage();
			usersPage.go();
			client.pause(2000);
			
			usersPage.selectFirm(dateString,client);
			var user1 = usersPage.createUser(client);
			usersPage.voiceRecYes();
			usersPage.selectC2C();
			usersPage.userSubmit(client);
			usersPage.addUserSubmit(client);
			
			client.pause(3000);
			var userGroupsPage= client.page.editUserGroupsPage();
			userGroupsPage.verify.urlContains('#/editUserGroups');
			userGroupsPage.addGrp2User();
			client.assert.urlContains('firmId=')
			
			usersPage.firstRow();
			usersPage.clickToCall_Button(client);
			
			var clickToCallPage = client.page.clickToCallPage();
			clickToCallPage.selectProvider('OnSip.com',client)
			clickToCallPage.getDomain(client, client.globals.domainName);
			
			clickToCallPage.createsSIPSettings(client, user1);  //dateString
			clickToCallPage.onSIPextSett(client, user1);
			clickToCallPage.click('@saveSettingsBtn');
			
			client.pause(500);	
			clickToCallPage.getText('@ErrorMes',function(errorMes){
				clickToCallPage.verify.equal(errorMes.value,'SIP PBX Settings saved successfully')
				});
			
			client.pause(7000);
			clickToCallPage.click('@goBackBtnSS');
			client.pause(3000);
			
			usersPage.firstRow();
			usersPage.clickToCall_Button(client);
			client.pause(2000);
			
			clickToCallPage
			.verify.valueContains('@selectProvider', 'OnSip')
			.verify.valueContains('@domain','c9tec.onsip.com')
			.verify.valueContains('@portNumber','5060')
			.verify.valueContains('@userName','EricT'+user1[0])
			.verify.valueContains('@authId','Tonder'+user1[0])
			.verify.valueContains('@authPaswd','AbCa_12@'+user1[0]);
			
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

