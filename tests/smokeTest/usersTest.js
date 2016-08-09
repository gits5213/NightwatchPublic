module.exports ={
		'Cloud9 Portal Smoke Test - Users': function(client){
			var loginPage = client.page.loginPage();
			client.url(client.globals.qa2_baseUrl);
			client.maximizeWindow();
			
		//Log In 
		loginPage.adminLogin(client);
			
		//User Tab 
		var usersTab = client.page.usersPage();
		usersTab.portalUsersTab(client);	
		usersTab.userTabResultVerify();
		//Edit User
		usersTab.getUsersByDefault(client);
			usersTab.clearValue('@UserNameSearch');
			usersTab.click('@UserNameSearch');
			usersTab.setValue('@UserNameSearch',' ');
			usersTab.api.keys(client.Keys.DOWN_ARROW);
			usersTab.api.keys(client.Keys.ENTER);
			usersTab.api.pause(1000);
			usersTab.waitForElementVisible('@firstRowGroupsData',5000, 'Verifed the searching result narrowing!');
			usersTab.click('@firstRowGroupsData');
			usersTab.api.pause(2000);
		
		
		
		
		usersTab.getEditUser();
			usersTab.click('@editUser');
			usersTab.waitForElementVisible('@editUserHomePage',1000, 'Verified Edit Group home page - Edit User');
			usersTab.expect.element('@editUserHomePage').text.to.contain('Edit User');
			usersTab.waitForElementVisible('@editUserSave',1000, 'Verified Edit User Save button enable and clickable');
			usersTab.click('@editUserSave');
			usersTab.api.pause(2000);
			
		//Edit Sales Info
		usersTab.getUsersByName(client);
			usersTab.clearValue('@UserNameSearch');
			usersTab.setValue('@UserNameSearch','md');
			usersTab.api.keys(client.Keys.DOWN_ARROW);
			usersTab.api.keys(client.Keys.ENTER);
			usersTab.api.pause(1000);
			usersTab.waitForElementVisible('@firstRowGroupsData',5000, 'Verifed the searching result narrowing!');
			usersTab.click('@firstRowGroupsData');
			usersTab.api.pause(2000);
		
		
		usersTab.getEditSalesInfoUser(client);
		usersTab.selectSalesPerson(client);
			usersTab.click('@selectSalesPerson');
			usersTab.api.pause(3000);
			usersTab.setValue('@selectSalesPerson','danastarr');
			usersTab.api.keys(client.Keys.DOWN_ARROW);
			usersTab.api.keys(client.Keys.ENTER);
			usersTab.api.pause(3000);
		
		
		usersTab.editSalesInfoNotes(client);
		usersTab.editSalesInfoSaveChanges(client);
		//Edit Sales Info remove
		usersTab.getUsersByNameClear(client);
			usersTab.clearValue('@UserNameSearch');
			usersTab.setValue('@UserNameSearch','md');
			usersTab.api.keys(client.Keys.DOWN_ARROW);
			usersTab.api.pause(1000);
			usersTab.api.keys(client.Keys.ENTER);
			usersTab.api.pause(1000);
			usersTab.waitForElementVisible('@firstRowGroupsData',5000, 'Verifed the searching result narrowing!');
			usersTab.click('@firstRowGroupsData');
			usersTab.api.pause(3000);
		
		
		
		usersTab.getEditSalesInfoUser(client);
		usersTab.selectSalesPersonRemove(client);
			usersTab.setValue('@selectSalesPerson','erictonder');
			usersTab.api.keys(client.Keys.DOWN_ARROW);
			usersTab.api.pause(1000);
			usersTab.api.keys(client.Keys.ENTER);
			usersTab.api.pause(5000);
			
			
		usersTab.editSalesInfoNotesRemove(client);
			usersTab.verify.visible('@notesInputText', false);
			usersTab.getText('@notesInputText', function(testResult){
				console.log("This contains: "+testResult.value);
			});
			usersTab.api.pause(1000);
			usersTab.clearValue('@notesInputText');
			usersTab.api.pause(2000);
			
		usersTab.editSalesInfoSaveChanges(client);
			
		
			console.log('Test cases Countinuing')
			client.closeWindow();
			client.end();			
		},
		
}