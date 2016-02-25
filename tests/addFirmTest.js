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
			
			//client.end();
		}
}