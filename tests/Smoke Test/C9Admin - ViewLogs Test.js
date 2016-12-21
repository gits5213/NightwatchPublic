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
			viewLogsPage.getText('@viewLogsPageResult' ,function(result){
				viewLogsPage.verify.notEqual(result.value.length, 20, 'There should be more than 25 audit logs on this page');
			});
			client.assert.urlContains('#/auditlogs');	
			
			client.end();
			
			
		}
}