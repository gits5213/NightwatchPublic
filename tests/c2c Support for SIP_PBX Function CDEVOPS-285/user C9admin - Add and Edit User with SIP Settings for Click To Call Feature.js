module.exports ={
		'Cisco Call Manager - Ability to Add and Edit User with SIP_Ext_Favorites Settings For Click To Call Feature': function(client){
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
			clickToCallPage.getDomain1(client, dateString);
			clickToCallPage.createsSIPSettings(client, dateString);
			clickToCallPage.ciscoCallExtSett(client, dateString);
			
			clickToCallPage.domainPlus(client);
			clickToCallPage.extenSetPlus(dateString);
			
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
			.verify.valueContains('@authPaswd','AbC@'+user1[0])
			.verify.valueContains('@userNameExet','EricTo'+user1[0]);
				
			
			clickToCallPage.createFavorites(dateString);
			clickToCallPage.selectDefault('Mobile',client);
			
			clickToCallPage.click('@favoritesPlus');
			client.pause(2000);
			clickToCallPage.click('@favoritesMinis');
			
			/*clickToCallPage.createFavoritesPlus1(dateString);
			clickToCallPage.selectDefault('Business',client);
			
			clickToCallPage.click('@favoritesPlus1');
			client.pause(3000);
			clickToCallPage.createFavoritesPlus2(dateString);
			clickToCallPage.selectDefault('Home',client);*/
			
			
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
			
			/*.verify.valueContains('@businessPlus1','19175616551')
			.verify.valueContains('@mobilePlus1','19175616552')
			.verify.valueContains('@mobilePlus1','19175616552')
			.verify.valueContains('@homePlus1','19175616552')
			
			.verify.valueContains('@businessPlus2','19175616551')
			.verify.valueContains('@mobilePlus2','19175616552')
			.verify.valueContains('@mobilePlus2','19175616552')
			.verify.valueContains('@homePlus2','19175616552');
			client.pause(1000);
			
			clickToCallPage.click('@favoritesMinis1');
			client.pause(2000);
			clickToCallPage.click('@favoritesMinis');
			client.pause(2000);
			clickToCallPage.saveFavorites();
			client.pause(2000);
			*/
			
		client.end();	
			
			
			
			
			
		}
				
}

