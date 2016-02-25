module.exports ={
		'Add New Firm': function(client){
			var loginPage = client.page.loginPage();
			client.url(client.globals.baseUrl);
			loginPage.adminLogin(client);
			
			var firmsPage = client.page.firmsPage();
			firmsPage.go();
			
			client.assert.containsText('body','Manage your Cloud9 Firms');
			var dateString = firmsPage.addNewFirm(client);
			client.assert.urlContains('#/addGroup');
			console.log('Successfully created: Test Firm '+dateString);
			
			firmsPage.getFirmByName('Test Firm '+dateString);
			client.assert.urlContains('#/editFirm');
			
			firmsPage
			.verify.valueContains('@firmNameForAdd','Test Firm '+dateString)
			.verify.valueContains('@street1', '123 Main Street')
			.verify.valueContains('@street2', '17th Flr')
			.verify.valueContains('@city', 'Any City')
			.verify.valueContains('@state','NY')
			.verify.valueContains('@zip', 12345)
			.verify.valueContains('@pfname','Erique')
			.verify.valueContains('@plname','Martinez')
			.verify.valueContains('@pemail',client.globals.email1)
			.verify.valueContains('@pwork', 123456789)
			.verify.valueContains('@pmobile',234567890)
			
			
			//client.end();
		}
}