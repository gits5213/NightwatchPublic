module.exports ={
		'Accepting Country Names- VirginIsland(US) from the Country Dropdown': function(client){
			var loginPage = client.page.loginPage();
			client.url(client.launch_url);
			client.windowHandle(function(hand){
				var handle = hand.value;
				client.windowSize(handle,1700,800);
			});
			loginPage.adminLogin(client);
			
			var usersPage = client.page.usersPage();
			usersPage.go();
			usersPage.click('@addUserBtn');
			client.pause(1000);
			
			usersPage.click('@countryDropdown');
			usersPage.click('@countrySearch');
			usersPage.api.pause(500);
			usersPage.setValue('@countrySearch','Virgin Islands US');
			usersPage.api.pause(500);
			usersPage.api.keys(client.Keys.ENTER);
					
			client.pause(2000);
			usersPage.verify.value('@country','string:Virgin Islands US')
			client.pause(1000);
			
			client.end();
		}
}