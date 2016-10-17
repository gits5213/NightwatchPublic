module.exports ={
		'OnSIP Configuration - Required Input Field Validation': function(client){
		
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
			//groupsPage.go(client);
			//client.assert.urlContains('/#/addGroups');
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
			
			//Domain is not valid
			usersPage.firstRow();
			usersPage.clickToCall_Button(client);
			
			var clickToCallPage = client.page.clickToCallPage(client);
			clickToCallPage.selectProvider('OnSip.com',client);

			clickToCallPage.createsSIPSettings(client, user1); 
			clickToCallPage.onSIPextSett(client, user1);
			clickToCallPage.expect.element('@domainNamePlus').to.not.be.present;
			clickToCallPage.expect.element('@extSettPlus').to.not.be.present;
			clickToCallPage.click('@outBoundChaOnSip');
			clickToCallPage.click('@saveSettingsBtn');
			
			client.pause(1500);	
			clickToCallPage.getText('@ErrorMes',function(errorMes){
				clickToCallPage.verify.equal(errorMes.value,'domain is not valid')
			});
			client.pause(7000);
			//Port is not valid
			clickToCallPage.click('@goBackBtnSS');
			client.pause(2000);
			usersPage.firstRow();
			usersPage.clickToCall_Button(client);
			
			clickToCallPage.selectProvider('OnSip.com',client);
			clickToCallPage.getDomain(client, client.globals.domainName);
			clickToCallPage.clearValue('@portNumber');
			//this.setValue('@portNumber','5060');
			var dateString;
			clickToCallPage.clearValue('@userName');
			clickToCallPage.setValue('@userName', 'EricT'+user1);
			clickToCallPage.clearValue('@authId');
			clickToCallPage.setValue('@authId','Tonder'+user1);
			clickToCallPage.clearValue('@authPaswd');
			clickToCallPage.setValue('@authPaswd','AbCa_12@'+user1);
			clickToCallPage.click('@outBoundChaOnSip');
			clickToCallPage.click('@saveSettingsBtn');
			client.pause(500);
			
			clickToCallPage.getText('@ErrorMes',function(errorMes){
				clickToCallPage.verify.equal(errorMes.value,'port is not valid')
			});
			client.pause(7000);
			//AuthUsername is not valid
			clickToCallPage.click('@goBackBtnSS');
			client.pause(2000);
			usersPage.firstRow();
			usersPage.clickToCall_Button(client);
			
			clickToCallPage.selectProvider('OnSip.com',client);
			clickToCallPage.getDomain(client, client.globals.domainName);
			clickToCallPage.clearValue('@portNumber');
			clickToCallPage.setValue('@portNumber','5060');
			var dateString;
			clickToCallPage.clearValue('@userName');
			//clickToCallPage.setValue('@userName', 'Eric'+dateString);
			clickToCallPage.clearValue('@authId');
			clickToCallPage.setValue('@authId','Tonder'+user1);
			clickToCallPage.clearValue('@authPaswd');
			clickToCallPage.setValue('@authPaswd','AbCa_12@'+user1);
			clickToCallPage.click('@outBoundChaOnSip');
			clickToCallPage.click('@saveSettingsBtn');
			client.pause(500);
			
			clickToCallPage.getText('@ErrorMes',function(errorMes){
				clickToCallPage.verify.equal(errorMes.value,'authUsername is not valid')
			});
			client.pause(7000);
			//AuthId is not valid
			clickToCallPage.click('@goBackBtnSS');
			client.pause(2000);
			usersPage.firstRow();
			usersPage.clickToCall_Button(client);
			
			clickToCallPage.selectProvider('OnSip.com',client);
			clickToCallPage.getDomain(client, client.globals.domainName);
			clickToCallPage.clearValue('@portNumber');
			clickToCallPage.setValue('@portNumber','5060');
			var dateString;
			clickToCallPage.clearValue('@userName');
			clickToCallPage.setValue('@userName', 'EricT'+user1);
			clickToCallPage.clearValue('@authId');
			//clickToCallPage.setValue('@authId','Tonder'+dateString);
			clickToCallPage.clearValue('@authPaswd');
			clickToCallPage.setValue('@authPaswd','AbCa_12@'+user1);
			clickToCallPage.click('@outBoundChaOnSip');
			clickToCallPage.click('@saveSettingsBtn');
			client.pause(500);
			
			clickToCallPage.getText('@ErrorMes',function(errorMes){
				clickToCallPage.verify.equal(errorMes.value,'authId is not valid')
			});
			
			//AuthPassword is not valid
			clickToCallPage.click('@goBackBtnSS');
			client.pause(2000);
			usersPage.firstRow();
			usersPage.clickToCall_Button(client);
			
			clickToCallPage.selectProvider('OnSip.com',client);
			clickToCallPage.getDomain(client, client.globals.domainName);
			clickToCallPage.clearValue('@portNumber');
			clickToCallPage.setValue('@portNumber','5060');
			
			var dateString;
			clickToCallPage.clearValue('@userName');
			clickToCallPage.setValue('@userName', 'EricT'+user1);
			clickToCallPage.clearValue('@authId');
			clickToCallPage.setValue('@authId','Tonder'+user1);
			clickToCallPage.clearValue('@authPaswd');
			//clickToCallPage.setValue('@authPaswd','AbCa_12@'+dateString);
			clickToCallPage.click('@outBoundChaOnSip');
			clickToCallPage.click('@saveSettingsBtn');
			client.pause(500);
			
			clickToCallPage.getText('@ErrorMes',function(errorMes){
				clickToCallPage.verify.equal(errorMes.value,'authPassword is not valid')
			});
			client.pause(7000);
			clickToCallPage.click('@goBackBtnSS');
			client.pause(2000);
			usersPage.firstRow();
			usersPage.clickToCall_Button(client);
			client.pause(2000);
			clickToCallPage.click('@favoritesBtn');
			client.pause(2000);
			
			//Favorites FirstName is not valid
			clickToCallPage.clearValue('@firstNameBtn');
			//clickToCallPage.setValue('@firstNameBtn', 'Eric'+dateString);
			client.pause(2000);
			clickToCallPage.clearValue('@lastNameBtn');
			clickToCallPage.setValue('@lastNameBtn','Tonder'+user1);
			client.pause(1000);
			clickToCallPage.SelectDefaultOption(client, 'Mobile');
			
			//clickToCallPage.click('@defaultBtn');
			clickToCallPage.saveFavorites();
			client.pause(500);
			
			clickToCallPage.getText('@ErrorMes',function(errorMes){
				clickToCallPage.verify.equal(errorMes.value,'Please correct errors')
			});
			
			client.pause(7000);
			clickToCallPage.click('@goBackBtnF');
			client.pause(2000);
			usersPage.firstRow();
			usersPage.clickToCall_Button(client);
			
			client.pause(2000);
			clickToCallPage.click('@favoritesBtn');
			client.pause(2000);
			
			//Favorites LastName is not valid
			var dataString;
			clickToCallPage.clearValue('@firstNameBtn');
			clickToCallPage.setValue('@firstNameBtn', 'Eric'+user1);
			clickToCallPage.clearValue('@lastNameBtn');
			client.pause(2000);
			clickToCallPage.SelectDefaultOption(client, 'Mobile');
			//clickToCallPage.setValue('@lastNameBtn','Tonder'+dateString);
			clickToCallPage.saveFavorites();
			client.pause(500);
			
			clickToCallPage.getText('@ErrorMes',function(errorMes){
				clickToCallPage.verify.equal(errorMes.value,'Please correct errors')
			});
			
			client.pause(7000);
			clickToCallPage.click('@goBackBtnF');
			
		client.end();	
			
		}
				
}

