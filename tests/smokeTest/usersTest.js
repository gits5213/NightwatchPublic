module.exports ={
		'Cloud9 Portal Smoke Test - Users': function(client){
			var loginPage = client.page.loginPage();
			client.url(client.globals.qa2_baseUrl);
			client.maximizeWindow();
			
			
			
			
			//Log In 
			loginPage.reportCloud9AdminLogin(client);
			
			//User Tab 
			usersPage.portalUsersTab(client);	
			usersPage.userTabResultVerify();
			
			
			//Edit User
			usersPage.getUsersByDefault(client);
			usersPage.getEditUser();
			
			//Edit Sales Info
			usersPage.getUsersByName(client);
			usersPage.getEditSalesInfoUser(client);
			usersPage.selectSalesPerson(client);
			usersPage.editSalesInfoNotes(client);
			usersPage.editSalesInfoSaveChanges(client);
			
			//Edit Sales Info remove
			usersPage.getUsersByNameClear(client);
			usersPage.getEditSalesInfoUser(client);
			usersPage.selectSalesPersonRemove(client);
			usersPage.editSalesInfoNotesRemove(client);
			usersPage.editSalesInfoSaveChanges(client);
		
			console.log('Test cases Countinuing')
			client.closeWindow();
			client.end();			
		},
		
}