module.exports ={
		'C9Admin- Ability to Edit or Modify OnSIP Config For C2C Feature': function(client){
			var loginPage = client.page.loginPage();
			client.url(client.launch_url);
			client.maximizeWindow();
					
			loginPage.adminLogin(client);
			
			var firmsPage = client.page.firmsPage();
			firmsPage.go();
			
			var dateString = firmsPage.addNewFirm(client);
			console.log('About to create: Test Firm '+dateString);  
			
			var groupsPage = client.page.groupsPage();
			groupsPage.addGrpForFirm(dateString,client);
			client.assert.urlContains('firmId=');
			
			client.pause(1000);
			var usersPage = client.page.usersPage();
			usersPage.go();
					
			usersPage.selectFirm(dateString,client);
			var user1 = usersPage.createUser(client);
			usersPage.voiceRecYes();
			usersPage.selectC2C();
			usersPage.userSubmit(client);
			usersPage.addUserSubmit(client);
			
			var userGroupsPage= client.page.editUserGroupsPage();
			userGroupsPage.verify.urlContains('#/editUserGroups');
			userGroupsPage.addGrp2User();
			client.assert.urlContains('firmId=')
			
			usersPage.firstRow();
			usersPage.clickToCallTab(client);
			
			var clickToCallPage = client.page.clickToCallPage();
			clickToCallPage.selectProvider('OnSip.com',client)
			clickToCallPage.getDomain(client, client.globals.domainName);
			
			clickToCallPage.createsSIPSettings(client, user1);  
			clickToCallPage.onSIPextSett(client, user1);
			clickToCallPage.click('@saveSettingsBtn');
			
			client.pause(500);	
			clickToCallPage.getText('@toastMess',function(errorMes){
				clickToCallPage.verify.equal(errorMes.value,'SIP PBX Settings saved successfully')
				});
			
			client.pause(7000);
			clickToCallPage.click('@goBackBtnSS');
			
			usersPage.firstRow();
			usersPage.clickToCallTab(client);
			
			clickToCallPage
			.verify.valueContains('@selectProvider', 'OnSip')
			.verify.valueContains('@domain', client.globals.OnSipDomainName)
			.verify.valueContains('@portNumber','5060')
			.verify.valueContains('@userName','EricT'+user1[0])
			.verify.valueContains('@authId','Tonder'+user1[0])
			.verify.valueContains('@authPaswd','AbCa_12@'+user1[0]);
			
			client.pause(1000);
			clickToCallPage.click('@goBackBtnSS');	
			
			var recordingsPage = client.page.recordingsPage();
			recordingsPage.verify.urlContains('#/users')
			recordingsPage.go(client);
			recordingsPage.verify.urlContains('#/recordings');
			
			recordingsPage.callType(client)
			recordingsPage.click('@detailsBtn');
			recordingsPage.textVerify(client);

		client.end();	
			
			
			
			
			
		}
				
}

