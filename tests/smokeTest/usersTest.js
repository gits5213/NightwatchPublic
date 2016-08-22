module.exports ={
		'Cloud9 Portal Smoke Test - Users': function(client){
			var navigation = client.page.navBar();
			var loginPage = client.page.loginPage();
			var usersPage = client.page.usersPage();
			client.windowHandle(function(hand){
				var handle = hand.value;
				client.windowSize(handle,1700,800);
			});
			client.url(client.launch_url);
			loginPage.adminLogin(client);
					
			usersPage.go();
			usersPage.editAdminInfo(client.globals.nonAdminUser,client);
			usersPage.click('@editAdminBtn');
			
			var adminPage=client.page.editAdminPage();
			adminPage.setToAdmin2(client)
			navigation.logout();
					
			loginPage.userLogin(client);
			
		//User Tab 
		var usersPage = client.page.usersPage();
		usersPage.go(client);
			client.pause(2000);
			client.elements('xpath','//*[@id="scrollable-area"]/table/tbody/tr',function(result){
			client.verify.notEqual(result.value.length, 25, 'There should be less than 25 groups on this page');
				});
			client.pause(1000);

			usersPage
				.clearValue('@usernameSearch')
				.click('@usernameSearch')
				.setValue('@usernameSearch','johnakpan')
				 usersPage.api.keys(client.Keys.DOWN_ARROW);
				 usersPage.api.keys(client.Keys.ENTER);
				 client.pause(1000);
			 usersPage
				.click('@secondRow')   //firstRow
				 client.pause(2000);
			 usersPage
				.click('@editUserBtn')
				usersPage.waitForElementVisible('@editUserHomePage',1000, 'Verified Edit Group home page - Edit User')
				usersPage.expect.element('@editUserHomePage').text.to.contain('Edit User')
				usersPage.waitForElementVisible('@street2',1000, 'Verified Stree 2 input field visible')
				usersPage.clearValue('@street2')
				 client.pause(1000);
			 usersPage
				.setValue('@street2','17th floor')
				 client.pause(1000);
			 usersPage
				.waitForElementVisible('@editUserSave',1000, 'Verified Edit User Save button visible')
				.click('@editUserSave')
				 client.pause(2000);	
			
			 usersPage
				.clearValue('@usernameSearch')
				.click('@usernameSearch')
				.setValue('@usernameSearch','johnakpan')
				 usersPage.api.keys(client.Keys.DOWN_ARROW);
			 	 usersPage.api.keys(client.Keys.ENTER);
				 client.pause(1000);
			usersPage
				.click('@secondRow')  //firstRow
				 client.pause(2000);
			
			usersPage
				.click('@editUserBtn')
				 client.pause(2000);
			usersPage
				.verify.valueContains('@street2','17th floor')
				 client.pause(1000);
			usersPage
				.clearValue('@street2')
				.waitForElementVisible('@editUserSave',1000, 'Verified Edit User Save button visible')
				.click('@editUserSave')
				 
			console.log('Test cases Countinuing')
			client.closeWindow();
			client.end();			
		},
		
}