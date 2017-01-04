module.exports ={
		'Add 2 new Groups to a new Firm': function(client){
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
			groupsPage.addGroupTab(client);
			
			addEditGroupsPage.selectFirm(dateString, client);
			addEditGroupsPage.addAnotherGrpForFirm(client,dateString);
			addEditGroupsPage.addEditGroupSubmitBtn();
			addEditGroupsPage.addEditGSbmitTosatMess();
			
			groupsPage.selectFirstRow();
			groupsPage.editGroupTab(groupsPage);
			addEditGroupsPage
			.verify.valueContains('@grpNameField','Firm '+dateString+' Grp 1')
			.verify.valueContains('@contactFname', 'Howard')
			.verify.valueContains('@contactLname', 'Hughes')
			.verify.valueContains('@contactEmail', client.globals.email1)
			.verify.valueContains('@street1', '456 Wall Street')
			.verify.valueContains('@street2', 'Suite 100')
			.verify.valueContains('@city', 'Any City')
			.verify.valueContains('@state','NY')
			.verify.valueContains('@zip', 67890)
			.verify.valueContains('@country','USA')
			.verify.valueContains('@website','http://c9tec.com')
			.verify.valueContains('@description','New Group for Testing')
			
			client.end();
		}
}