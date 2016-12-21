module.exports ={
		'@tags':['connections'],
		'Add a new Internal Connection to a new Firm': function(client){
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
			groupsPage.selectFirm(client,dateString);
			
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
			
			var connectionsPage = client.page.connectionsPage();
			connectionsPage.go();
			connectionsPage.verify.urlContains('#/connections')
			connectionsPage.addConTab();
			connectionsPage.assert.containsText('body','Add Connection');
			
			var addEditConnectionsPage = client.page.addEditConnectionsPage(); 
			//conncetionsPage.addIntConnForFirm(dateString,client)
			addEditConnectionsPage.selectFirm(client, dateString);
			addEditConnectionsPage.internalRadioYes();
			addEditConnectionsPage.createConFrom(client);
			addEditConnectionsPage.myFirmBtnLevel(client, dateString);
			addEditConnectionsPage.addConSubmit();
			addEditConnectionsPage.getAddConMess();
			
			
			//connectionsPage.addIntConnForFirm(dateString,client);
			client.assert.urlContains('#/connections');
			
			connectionsPage.selectFirstRow();
			connectionsPage.editConTab();
			addEditConnectionsPage.assert.urlContains('#/editConnection');
			
			addEditConnectionsPage
			.verify.value('@firmNameField','Test Firm '+dateString)
			.verify.value('@commNameField', 'Financial')  //Energy
			.verify.value('@btnLabelField',dateString+'IntraFirmShout')
			.verify.valueContains('@connIdField','sPK-')
			.verify.value('@description', 'Connection within Test Firm '+dateString)
			.verify.value('@createdByField',client.globals.adminUsername);
			
			
			client.end();
		}
}