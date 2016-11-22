module.exports ={
		'@tags':['connections'],
		'Add a new Internal Connection to a new Firm': function(client){
			var loginPage = client.page.loginPage();
			client.url(client.launch_url);
			client.maximizeWindow();
			
			loginPage.adminLogin(client);
			
			var firmsPage = client.page.firmsPage();
			firmsPage.go();
			
			var dateString = firmsPage.addNewFirm(client);
			console.log('About to create: Test Firm '+dateString);
			
			var groupsPage = client.page.groupsPage();
			groupsPage.selectFirm(dateString, client);
			groupsPage.addGrpForFirm(client,dateString);
			client.assert.urlContains('groups?firmId=');
			
			var usersPage = client.page.usersPage();
			usersPage.go();
			client.pause(2000);
			usersPage.addUserTab(client);
			usersPage.selectFirm(dateString,client);
			var user1 = usersPage.createUser(client);
			console.log('Successfully created: New User1 '+user1);
			usersPage.voiceRecYes();
			usersPage.selectC2C();
			usersPage.userSubmit(client);
			usersPage.addUserSubmit(client);
			
			var connectionsPage = client.page.connectionsPage();
			connectionsPage.go();
			connectionsPage.addIntConnForFirm(dateString,client);
			client.assert.urlContains('#/connections');
			
			connectionsPage.selectFirstRow();
			connectionsPage.editConTab();
			client.assert.urlContains('#/editConnection');
			
			connectionsPage
			.verify.value('@firmNameField','Test Firm '+dateString)
			.verify.value('@commNameField', 'Financial')  //Energy
			.verify.value('@btnLabelField',dateString+'IntraFirmShout')
			.verify.valueContains('@connIdField','sPK-')
			.verify.value('@description', 'Connection within Test Firm '+dateString)
			.verify.value('@createdByField',client.globals.adminUsername);
			
			
			client.end();
		}
}