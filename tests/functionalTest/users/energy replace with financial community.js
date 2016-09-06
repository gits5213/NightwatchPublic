module.exports ={
		'Energy Community Replace with Financial Community': function(client){
			var loginPage = client.page.loginPage();
			client.url(client.launch_url);
			client.windowHandle(function(hand){
				var handle = hand.value;
				client.windowSize(handle,1700,800);
			});
			loginPage.adminLogin(client);
			
			var groupsPage = client.page.groupsPage();
			groupsPage.go();
			groupsPage.click('@addGroupBtn');
			client.pause(1000);
			
			groupsPage.setValue('@communityBar','Financial');
			client.pause(1000);
			groupsPage.verify.valueContains('@communityBar', '3');

			
			client.end();
		}
}