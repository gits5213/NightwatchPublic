module.exports ={
		'OnSIP Configuration - Required Input Field Validation': function(client){
		
			var loginPage = client.page.loginPage();
			client.url(client.launch_url);
			client.windowHandle(function(hand){
				var handle = hand.value;
				client.windowSize(handle,1700,800);
			});
					
			loginPage.adminLogin(client);
			client.pause(1000);
			var usersPage = client.page.usersPage();
			usersPage.go();
			
			client.pause(1000);
			usersPage.c2cNameSearch(client.globals.nonAdminUser,client);
			
			
			//Domain is not valid
			usersPage.firstRow();
			client.pause(1000);
			usersPage.clickToCall_Button(client);

			var clickToCallPage = client.page.clickToCallPage(client);
			clickToCallPage.selectProvider('OnSip.com',client);
			//clickToCallPage.getDomain(client, domain);
			var dateString = clickToCallPage.createsSIPSettings(client, dateString); 
			clickToCallPage.onSIPextSett(client, dateString);
			clickToCallPage.expect.element('@domainNamePlus').to.not.be.present;
			clickToCallPage.expect.element('@extSettPlus').to.not.be.present;
			clickToCallPage.click('@outBoundChaOnSip');
			clickToCallPage.click('@saveSettingsBtn');
			client.pause(1500);	
			clickToCallPage.getText('@ErrorMes',function(errorMes){
				clickToCallPage.verify.equal(errorMes.value,'domain is not valid')
			});
			
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
			clickToCallPage.setValue('@userName', 'Eric'+dateString);
			clickToCallPage.clearValue('@authId');
			clickToCallPage.setValue('@authId','Tonder'+dateString);
			clickToCallPage.clearValue('@authPaswd');
			clickToCallPage.setValue('@authPaswd','AbCa_12@'+dateString);
			
			clickToCallPage.click('@saveSettingsBtn');
			client.pause(500);
			
			clickToCallPage.getText('@ErrorMes',function(errorMes){
				clickToCallPage.verify.equal(errorMes.value,'port is not valid')
			});
			
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
			clickToCallPage.setValue('@authId','Tonder'+dateString);
			clickToCallPage.clearValue('@authPaswd');
			clickToCallPage.setValue('@authPaswd','AbCa_12@'+dateString);
			
			clickToCallPage.click('@saveSettingsBtn');
			client.pause(500);
			
			clickToCallPage.getText('@ErrorMes',function(errorMes){
				clickToCallPage.verify.equal(errorMes.value,'authUsername is not valid')
			});
			
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
			clickToCallPage.setValue('@userName', 'Eric'+dateString);
			clickToCallPage.clearValue('@authId');
			//clickToCallPage.setValue('@authId','Tonder'+dateString);
			clickToCallPage.clearValue('@authPaswd');
			clickToCallPage.setValue('@authPaswd','AbCa_12@'+dateString);
			
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
			clickToCallPage.setValue('@userName', 'Eric'+dateString);
			clickToCallPage.clearValue('@authId');
			clickToCallPage.setValue('@authId','Tonder'+dateString);
			clickToCallPage.clearValue('@authPaswd');
			//clickToCallPage.setValue('@authPaswd','AbCa_12@'+dateString);
			
			clickToCallPage.click('@saveSettingsBtn');
			client.pause(500);
			
			clickToCallPage.getText('@ErrorMes',function(errorMes){
				clickToCallPage.verify.equal(errorMes.value,'authPassword is not valid')
			});

			clickToCallPage.click('@goBackBtnSS');
			client.pause(2000);
			usersPage.firstRow();
			usersPage.clickToCall_Button(client);
			client.pause(2000);
			clickToCallPage.click('@favoritesBtn');
			client.pause(2000);
			
			//Favorites FirstName is not valid
			var dataString;
			clickToCallPage.clearValue('@firstNameBtn');
			//clickToCallPage.setValue('@firstNameBtn', 'Eric'+dateString);
			client.pause(2000);
			clickToCallPage.clearValue('@lastNameBtn');
			clickToCallPage.setValue('@lastNameBtn','Tonder'+dateString);
			client.pause(1000);
			clickToCallPage.selectDefault('Mobile',client);
			clickToCallPage.saveFavorites();
			client.pause(500);
			
			clickToCallPage.getText('@ErrorMes',function(errorMes){
				clickToCallPage.verify.equal(errorMes.value,'Please correct errors')
			});
			
			client.pause(2000);
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
			clickToCallPage.setValue('@firstNameBtn', 'Eric'+dateString);
			clickToCallPage.clearValue('@lastNameBtn');
			client.pause(2000);
			//clickToCallPage.setValue('@lastNameBtn','Tonder'+dateString);
			clickToCallPage.saveFavorites();
			client.pause(500);
			
			clickToCallPage.getText('@ErrorMes',function(errorMes){
				clickToCallPage.verify.equal(errorMes.value,'Please correct errors')
			});
			
			client.pause(2000);
			clickToCallPage.click('@goBackBtnF');
			
			

			
		
		client.end();	
			
		}
				
}

