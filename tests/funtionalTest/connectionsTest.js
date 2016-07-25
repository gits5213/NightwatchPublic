module.exports ={
		'@tags':['connections'],
		'Add a new Internal Connection to a new Firm': function(client){
			var loginPage = client.page.loginPage();
			client.url(client.globals.baseUrl);
			loginPage.adminLogin(client);
			
			var firmsPage = client.page.firmsPage();
			firmsPage.go();
			
			var dateString = firmsPage.addNewFirm(client);
			console.log('About to create: Test Firm '+dateString);
			
			var groupsPage = client.page.groupsPage();
			groupsPage.go();
			client.assert.urlContains('#/groups');
			groupsPage.addGrpForFirm(dateString,client);
			client.assert.urlContains('firmId=');
			
			//groupsPage.addAnotherGrpForFirm(dateString,client);
			
			var usersPage = client.page.usersPage();
			usersPage.go();
			var user1 = usersPage.addUserToFirm(dateString,client);
			var connectionsPage = client.page.connectionsPage();
			connectionsPage.go();
			connectionsPage.addIntConnForFirm(dateString,client);
			
			client.assert.urlContains('#/connections');
			
			connectionsPage.editFirstRecord();
			client.assert.urlContains('#/editConnection');
			
			connectionsPage
			.verify.value('@firmNameField','Test Firm '+dateString)
			.verify.value('@commNameField', 'Equities')
			//.verify.valueContains('@grpNameField','Firm '+dateString+' Grp 1')
			.verify.value('@btnLabelField',dateString+'IntraFirmShout')
			.verify.valueContains('@connIdField','sPK-')
			.verify.value('@description', 'Connection within Test Firm '+dateString)
			.verify.value('@createdByField',client.globals.adminUsername);
			
			
			client.end();
		}
}