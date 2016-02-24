module.exports ={
		'Add New Firm': function(client){
			var loginPage = client.page.loginPage();
			client.url(client.globals.baseUrl);
			loginPage.adminLogin(client.globals.adminUsername,client.globals.adminPassword);
			
			var firmsPage = client.page.firmsPage();
			firmsPage.go();
			client.assert.containsText('body','Manage your Cloud9 Firms');
			firmsPage.addNewFirm();
			client.end();
		}
}