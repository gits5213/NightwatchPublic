module.exports ={
		'Add New Firm': function(client){
			var loginPage = client.page.loginPage();
			client.url(client.launch_url);
			client.maximizeWindow();
			loginPage.adminLogin(client);
			
			var firmsPage = client.page.firmsPage();
			var addEditFirmsPage = client.page.addEditFirmsPage();
			firmsPage.go();
			client.assert.containsText('body','Manage your Cloud9 Firms');
			firmsPage.addFirmTab();
			
			var NewFirm = addEditFirmsPage.addNewFirm(client);
			console.log('About to create: Test Firm '+ NewFirm);
			addEditFirmsPage.addEditSubmitBtn();
			addEditFirmsPage.addEditSubToastMess();
			client.assert.urlContains('#/addGroup');
			
			//firmsPage.getFirmByName('Test Firm '+dateString, client);
			firmsPage.go();
			firmsPage.firmNameSrch('Test Firm '+ NewFirm, client);
			firmsPage.selectFirstRow();
			firmsPage.editFirmTab();
			client.assert.urlContains('#/editFirm');
			
			addEditFirmsPage
			.verify.valueContains('@firmNameForAdd','Test Firm '+ NewFirm)
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