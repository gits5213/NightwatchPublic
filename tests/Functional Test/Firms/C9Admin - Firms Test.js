module.exports ={
		'Add New Firm': function(client){
			var loginPage = client.page.loginPage();
			client.url(client.launch_url);
			client.maximizeWindow();
			loginPage.adminLogin(client);
			
			var firmsPage = client.page.firmsPage();
			firmsPage.go();
			
			client.pause(2000);
			client.assert.containsText('body','Manage your Cloud9 Firms');
			var dateString = firmsPage.addNewFirm(client);
			client.assert.urlContains('#/addGroup');
			console.log('About to create - Test Firm '+dateString);
			
			firmsPage.getFirmByName('Test Firm '+dateString, client);
			
			firmsPage.click('@editFirmBtn');
			client.pause(2000);
			client.assert.urlContains('#/editFirm');
			client.pause(2000);
			
			firmsPage
			.verify.valueContains('@firmNameForAdd','Test Firm '+dateString)
			.verify.valueContains('@street1', '123 Main Street')
			.verify.valueContains('@street2', '17th Flr')
			.verify.valueContains('@city', 'Any City')
			.verify.value('@country','string:United States')
			.verify.value('@state','string:New York')
			.verify.valueContains('@zip', 12345)
			.verify.valueContains('@pfname','Erique')
			.verify.valueContains('@plname','Martinez')
			.verify.valueContains('@pemail',client.globals.email1)
			.verify.valueContains('@pwork', 123456789)
			.verify.valueContains('@pmobile',234567890)
			
			.verify.valueContains('@billStr1', '123 Main Street')
			.verify.valueContains('@billStr2', '17th Flr')
			.verify.valueContains('@billCity', 'Any City')
			.verify.value('@billCountry','string:United States')
			.verify.value('@billState','string:New York')
			.verify.valueContains('@zip', 12345)
			.verify.valueContains('@billFname','Erique')
			.verify.valueContains('@billLname','Martinez')
			.verify.valueContains('@billEmail',client.globals.email1)
			.verify.valueContains('@billWork', 123456789)
			.verify.valueContains('@billMobile',234567890)
			 client.pause(2000);
			 
			client.end();
			
		}
}