module.exports ={
		'OnSIP Configuration - Required Input Field Validation': function(client){
		
			var loginPage = client.page.loginPage();
			client.url(client.launch_url);
			client.maximizeWindow();
					
			loginPage.adminLogin(client);
			
			var firmsPage = client.page.firmsPage();
			firmsPage.go();
			
			var dateString = firmsPage.addNewFirm(client);
			console.log('About to create: Test Firm '+dateString);  
			
			var groupsPage = client.page.groupsPage();
			client.assert.urlContains('#/addGroup');
			groupsPage.selectFirm(dateString, client);
			groupsPage.addGrpForFirm(client,dateString);
			client.assert.urlContains('firmId=');
			
			var usersPage = client.page.usersPage();
			usersPage.go();
			usersPage.addUserTab(client);
			usersPage.selectFirm(dateString,client);
			var user1 = usersPage.createUser(client);
			console.log('Successfully created: New User '+user1);
			usersPage.voiceRecYes();
			usersPage.selectC2C();
			usersPage.userSubmit(client);
			usersPage.addUserSubmit(client);
			
			var userGroupsPage= client.page.editUserGroupsPage();
			userGroupsPage.verify.urlContains('#/editUserGroups');
			userGroupsPage.addGrp2User();
			client.assert.urlContains('firmId=')
			
			//Domain is not valid
			usersPage.selectFirstRow();
			usersPage.clickToCallTab(client);
			
			var clickToCallPage = client.page.clickToCallPage(client);
			client.pause(1000);
			clickToCallPage.verifyTextLevel(client);
			clickToCallPage.verifyOnSipDomainLevel(client);
			clickToCallPage.selectProvider('OnSip.com',client);

			clickToCallPage.createsSIPSettings(client, user1); 
			clickToCallPage.onSIPextSett(client, user1);
			clickToCallPage.expect.element('@domainNamePlus').to.not.be.present;
			clickToCallPage.expect.element('@extSettPlus').to.not.be.present;
			clickToCallPage.click('@outBoundChaOnSip');
			clickToCallPage.click('@saveSettingsBtn');
			
			client.pause(1500);	
			clickToCallPage.getText('@toastMess',function(errorMes){
				clickToCallPage.verify.equal(errorMes.value,'domain is not valid')
			});
			client.pause(7000);
			//Port is not valid
			clickToCallPage.click('@goBackBtnSS');
			client.pause(2000);
			usersPage.selectFirstRow();
			usersPage.clickToCallTab(client);
			
			clickToCallPage.selectProvider('OnSip.com',client);
			clickToCallPage.getDomain(client);
			clickToCallPage.clearValue('@portNumber');
			//this.setValue('@portNumber','5060');
			var dateString;
			clickToCallPage.clearValue('@userName');
			clickToCallPage.setValue('@userName', 'John'+user1);
			clickToCallPage.clearValue('@authId');
			clickToCallPage.setValue('@authId','Doe'+user1);
			clickToCallPage.clearValue('@authPaswd');
			clickToCallPage.setValue('@authPaswd','AbCa_12@'+user1);
			clickToCallPage.click('@outBoundChaOnSip');
			clickToCallPage.click('@saveSettingsBtn');
			client.pause(500);
			
			clickToCallPage.getText('@toastMess',function(errorMes){
				clickToCallPage.verify.equal(errorMes.value,'port is not valid')
			});
			client.pause(7000);
			//AuthUsername is not valid
			clickToCallPage.click('@goBackBtnSS');
			client.pause(2000);
			usersPage.selectFirstRow();
			usersPage.clickToCallTab(client);
			
			clickToCallPage.selectProvider('OnSip.com',client);
			clickToCallPage.getDomain(client);
			clickToCallPage.clearValue('@portNumber');
			clickToCallPage.setValue('@portNumber','5060');
			var dateString;
			clickToCallPage.clearValue('@userName');
			//clickToCallPage.setValue('@userName', 'Eric'+dateString);
			clickToCallPage.clearValue('@authId');
			clickToCallPage.setValue('@authId','Doe'+user1);
			clickToCallPage.clearValue('@authPaswd');
			clickToCallPage.setValue('@authPaswd','AbCa_12@'+user1);
			clickToCallPage.click('@outBoundChaOnSip');
			clickToCallPage.click('@saveSettingsBtn');
			client.pause(500);
			
			clickToCallPage.getText('@toastMess',function(errorMes){
				clickToCallPage.verify.equal(errorMes.value,'Username is not valid')
			});
			client.pause(7000);
			//AuthId is not valid
			clickToCallPage.click('@goBackBtnSS');
			client.pause(2000);
			usersPage.selectFirstRow();
			usersPage.clickToCallTab(client);
			
			clickToCallPage.selectProvider('OnSip.com',client);
			clickToCallPage.getDomain(client);
			clickToCallPage.clearValue('@portNumber');
			clickToCallPage.setValue('@portNumber','5060');
			var dateString;
			clickToCallPage.clearValue('@userName');
			clickToCallPage.setValue('@userName', 'John'+user1);
			clickToCallPage.clearValue('@authId');
			//clickToCallPage.setValue('@authId','Tonder'+dateString);
			clickToCallPage.clearValue('@authPaswd');
			clickToCallPage.setValue('@authPaswd','AbCa_12@'+user1);
			clickToCallPage.click('@outBoundChaOnSip');
			clickToCallPage.click('@saveSettingsBtn');
			client.pause(500);
			
			clickToCallPage.getText('@toastMess',function(errorMes){
				clickToCallPage.verify.equal(errorMes.value,'authId is not valid')
			});
			
			//AuthPassword is not valid
			clickToCallPage.click('@goBackBtnSS');
			client.pause(2000);
			usersPage.selectFirstRow();
			usersPage.clickToCallTab(client);
			
			clickToCallPage.selectProvider('OnSip.com',client);
			clickToCallPage.getDomain(client);
			clickToCallPage.clearValue('@portNumber');
			clickToCallPage.setValue('@portNumber','5060');
			
			var dateString;
			clickToCallPage.clearValue('@userName');
			clickToCallPage.setValue('@userName', 'John'+user1);
			clickToCallPage.clearValue('@authId');
			clickToCallPage.setValue('@authId','Doe'+user1);
			clickToCallPage.clearValue('@authPaswd');
			//clickToCallPage.setValue('@authPaswd','AbCa_12@'+dateString);
			clickToCallPage.click('@outBoundChaOnSip');
			clickToCallPage.click('@saveSettingsBtn');
			client.pause(500);
			
			clickToCallPage.getText('@toastMess',function(errorMes){
				clickToCallPage.verify.equal(errorMes.value,'authPassword is not valid')
			});
			client.pause(7000);
			clickToCallPage.click('@goBackBtnSS');
			client.pause(2000);
			usersPage.selectFirstRow();
			usersPage.clickToCallTab(client);
			client.pause(1000);
			
			clickToCallPage.selectProvider('Cisco Call Manager 10.x',client);
			clickToCallPage.verifyCiscoDomainLevel(client);
			
			clickToCallPage.click('@goBackBtnSS');
			client.pause(2000);
			usersPage.selectFirstRow();
			usersPage.clickToCallTab(client);
			client.pause(2000);
			
			clickToCallPage.click('@favoritesBtn');
			clickToCallPage.verifyTextLevelFav(client);
			client.pause(1000);
			//Favorites FirstName is not valid
			clickToCallPage.clearValue('@firstNameBtn');
			//clickToCallPage.setValue('@firstNameBtn', 'Eric'+dateString);
			client.pause(2000);
			clickToCallPage.clearValue('@lastNameBtn');
			clickToCallPage.setValue('@lastNameBtn','Doe'+user1);
			client.pause(1000);
			clickToCallPage.SelectDefaultOption(client, 'Mobile');
			
			//clickToCallPage.click('@defaultBtn');
			clickToCallPage.saveFavorites();
			client.pause(500);
			
			clickToCallPage.getText('@toastMess',function(errorMes){
				clickToCallPage.verify.equal(errorMes.value,'Please correct errors')
			});
			
			client.pause(7000);
			clickToCallPage.click('@goBackBtnF');
			client.pause(2000);
			usersPage.selectFirstRow();
			usersPage.clickToCallTab(client);
			
			client.pause(2000);
			clickToCallPage.click('@favoritesBtn');
			client.pause(2000);
			
			//Favorites LastName is not valid
			var dataString;
			clickToCallPage.clearValue('@firstNameBtn');
			clickToCallPage.setValue('@firstNameBtn', 'John'+user1);
			clickToCallPage.clearValue('@lastNameBtn');
			client.pause(2000);
			clickToCallPage.SelectDefaultOption(client, 'Mobile');
			//clickToCallPage.setValue('@lastNameBtn','Tonder'+dateString);
			clickToCallPage.saveFavorites();
			client.pause(500);
			
			clickToCallPage.getText('@toastMess',function(errorMes){
				clickToCallPage.verify.equal(errorMes.value,'Please correct errors')
			});
			
			client.pause(7000);
			clickToCallPage.click('@goBackBtnF');
			
		client.end();	
			
		}
				
}

