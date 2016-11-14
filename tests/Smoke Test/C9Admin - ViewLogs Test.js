module.exports ={
		'Cloud9 Portal Smoke Test - View Logs': function(client){
			var navigation = client.page.navBar();
			var loginPage = client.page.loginPage();
			var usersPage = client.page.usersPage();
			client.maximizeWindow();
			client.url(client.launch_url);
			
			loginPage.userLogin(client);
			
			var viewLogsPage = client.page.viewLogsPage();
			viewLogsPage.portalViewLogsTab(client);
				viewLogsPage.click('@viewLogTab');
				client.elements('xpath','//*[@id="scrollable-area"]/table/tbody/tr',function(result){
					client.verify.notEqual(result.value.length, 25, 'There should be more than 25 audit logs on this page');
				});
				client.assert.urlContains('#/auditlogs');	
				client.pause(2000);
			
			client.closeWindow();
			client.end();
			
		}
}