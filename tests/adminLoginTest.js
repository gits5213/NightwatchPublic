module.exports ={
		//'@disabled': true,
		'Admin User Login Test': function(client){
			var loginPage = client.page.loginPage();
			console.log("\n",client.globals.baseUrl,'\n');
			client.url(client.globals.baseUrl);
			loginPage.adminLogin(client);
			client.assert.containsText('body', 'Welcome to the Cloud9 Portal')
			.end();
		}
}