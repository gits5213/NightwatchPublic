module.exports ={
		'Cloud9 Portal Smoke Test - Recordings': function(client){
			var navigation = client.page.navBar();
			var loginPage = client.page.loginPage();
			var usersPage = client.page.usersPage();
			client.maximizeWindow();
			client.url(client.launch_url);
						
			loginPage.userLogin(client);
			
			//Recordings Tab
			var recordingsPage = client.page.recordingsPage();
			recordingsPage.go(client);
			recordingsPage.click('@recordingsTab');
			client.elements('xpath','//*[@id="scrollable-area"]/table/tbody/tr',function(result){
				client.verify.notEqual(result.value.length, 20, 'There should be less than 25 groups on this page');
			});
			client.assert.urlContains('#/recordings');
			client.pause(2000);

			client.end();
			
		}
		
}