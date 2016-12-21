module.exports ={
		'OnSIP Configuration - Required Input Field Validation': function(client){
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
				clickToCallPage.verify.equal(errorMes.value,'domains is not valid')  //should be domain
			});
			client.pause(7000);
			//Port is not valid
			clickToCallPage.click('@goBackBtnSS');
			client.pause(1000);
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
			client.pause(1500);
			
			clickToCallPage.getText('@toastMess',function(errorMes){
				clickToCallPage.verify.equal(errorMes.value,'port is not valid')
			});
			client.pause(7000);
			//AuthUsername is not valid
			clickToCallPage.click('@goBackBtnSS');
			client.pause(1000);
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
			client.pause(1500);
			clickToCallPage.getText('@toastMess',function(errorMes){
				clickToCallPage.verify.equal(errorMes.value,'authUsername is not valid')
			});
			client.pause(7000);
			//AuthId is not valid
			clickToCallPage.click('@goBackBtnSS');
			client.pause(1000);
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
			client.pause(1500);
			clickToCallPage.getText('@toastMess',function(errorMes){
				clickToCallPage.verify.equal(errorMes.value,'AuthId required')
			});
			client.pause(7000);
			//AuthPassword is not valid
			clickToCallPage.click('@goBackBtnSS');
			client.pause(1000);
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
			client.pause(1500);
			clickToCallPage.getText('@toastMess',function(errorMes){
				clickToCallPage.verify.equal(errorMes.value,'AuthPassword required')
			});
			client.pause(7000);
			clickToCallPage.click('@goBackBtnSS');
			client.pause(1000);
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
			client.pause(1500);
			clickToCallPage.getText('@toastMess',function(errorMes){
				clickToCallPage.verify.equal(errorMes.value,'Please correct errors')
			});
			client.pause(7000);
			clickToCallPage.click('@goBackBtnF');
			client.pause(1000);
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
			client.pause(1500);
			clickToCallPage.getText('@toastMess',function(errorMes){
				clickToCallPage.verify.equal(errorMes.value,'Please correct errors')
			});
			client.pause(7000);
			clickToCallPage.click('@goBackBtnF');
			
		client.end();	
			
		}
				
}

