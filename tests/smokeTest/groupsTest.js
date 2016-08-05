module.exports ={
		'Cloud9 Portal Smoke Test - Groups': function(client){
			var loginPage = client.page.loginPage();
			client.url(client.globals.qa2_baseUrl);
			client.maximizeWindow();
			
			//Log In 
			loginPage.reportCloud9AdminLogin(client);
					
			//Groups Tab ............................
			var groupsPage = client.page.groupsPage();
			groupsPage.portalGroupsTab(client);
			
			//Edit Group
			groupsPage.getGroupByName(client);
			groupsPage.getEditGroup();
			
			//Edit Group Users
			groupsPage.getGroupByName(client);
			groupsPage.getEditGroupUsers();
			
			//Group Details
			groupsPage.groupDetailsBtn();	
			
			console.log('Test cases Countinuing')
			client.closeWindow();
			client.end();			
		},
		
}