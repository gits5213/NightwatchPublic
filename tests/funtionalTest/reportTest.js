module.exports ={
		'Customer Reporting': function(client){
			var loginPage = client.page.loginPage();
			client.url(client.launch_url);
			loginPage.adminLogin(client);
			
			var reportPage = client.page.reportPage();
			reportPage.go(client);
			console.log('Test cases passed')
			
			
			
			client.closeWindow();
			
			/*var firmsPage = client.page.firmsPage();
			firmsPage.go();
			
			var dateString = firmsPage.addNewFirm(client);
			console.log('Successfully created: Test Firm '+dateString);
			
			var groupsPage = client.page.groupsPage();
			groupsPage.go();
			client.assert.urlContains('#/groups');
			groupsPage.addGrpForFirm(dateString,client);
			client.assert.urlContains('firmId=');
			groupsPage.addAnotherGrpForFirm(dateString,client);
			groupsPage.editFirstRecord();
			
			groupsPage
			.verify.valueContains('@grpNameField','Firm '+dateString+' Grp 1')
			//community validation here
			.verify.valueContains('@contactFname', 'Howard')
			.verify.valueContains('@contactLname', 'Hughes')
			.verify.valueContains('@contactEmail', client.globals.email1)
			//default group validation here
			.verify.valueContains('@street1', '456 Wall Street')
			.verify.valueContains('@street2', 'Suite 100')
			.verify.valueContains('@city', 'Any City')
			.verify.valueContains('@state','NY')
			.verify.valueContains('@zip', 67890)
			.verify.valueContains('@country','USA')
			.verify.valueContains('@website','http://c9tec.com')
			.verify.valueContains('@description','New Group for Testing')
			
			client.end();*/
		}
}