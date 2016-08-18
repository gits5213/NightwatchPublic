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
			
			var adminPage=client.page.editAdminPage();
			adminPage.setToAdmin2(client)
			navigation.logout();
					
			loginPage.userLogin(client);
			
		//User Tab 
		var usersTab = client.page.usersPage();
		usersTab.go(client);	
		usersTab.userTabResultVerify();
		//Edit User
		usersTab.getUsersByDefault(client);
			usersTab.clearValue('@usernameSearch');
			usersTab.click('@usernameSearch');
			usersTab.setValue('@usernameSearch','johnakpan');
			usersTab.api.keys(client.Keys.DOWN_ARROW);
			usersTab.api.keys(client.Keys.ENTER);
			usersTab.api.pause(1000);
			usersTab.waitForElementVisible('@firstRow',5000, 'Verifed the searching result narrowing!');
			usersTab.click('@firstRow');
			usersTab.api.pause(2000);
		
		usersTab.getEditUser();
			usersTab.click('@editUserBtn');
			usersTab.waitForElementVisible('@editUserHomePage',1000, 'Verified Edit Group home page - Edit User');
			usersTab.expect.element('@editUserHomePage').text.to.contain('Edit User');
			
			usersTab.waitForElementVisible('@street2',1000, 'Verified Stree 2 input field visible');
			usersTab.clearValue('@street2');
			usersTab.api.pause(1000);
			usersTab.setValue('@street2','17th floor');
			usersTab.api.pause(1000);
			usersTab.waitForElementVisible('@editUserSave',1000, 'Verified Edit User Save button visible');
			usersTab.click('@editUserSave');
			usersTab.api.pause(2000);	
			
			
			//Edit User-Verification
			usersTab.getUsersByDefault(client);
				usersTab.clearValue('@usernameSearch');
				usersTab.click('@usernameSearch');
				usersTab.setValue('@usernameSearch','johnakpan');
				usersTab.api.keys(client.Keys.DOWN_ARROW);
				usersTab.api.keys(client.Keys.ENTER);
				usersTab.api.pause(1000);
				usersTab.waitForElementVisible('@firstRow',5000, 'Verifed the searching result narrowing!');
				usersTab.click('@firstRow');
				usersTab.api.pause(2000);
			
			usersTab.getEditUser();
				usersTab.click('@editUserBtn');		
				usersTab.api.pause(2000);
				usersTab.verify.valueContains('@street2','17th floor');
				/*usersTab.getText('@street2',function(result){
					console.log("Text contain :"+ result.value);
					
				});*/
				usersTab.api.pause(1000);
				usersTab.clearValue('@street2');
				usersTab.waitForElementVisible('@editUserSave',1000, 'Verified Edit User Save button visible');
				usersTab.click('@editUserSave');
				usersTab.api.pause(1000);
			
			console.log('Test cases Countinuing')
			client.closeWindow();
			client.end();			
		},
		
}