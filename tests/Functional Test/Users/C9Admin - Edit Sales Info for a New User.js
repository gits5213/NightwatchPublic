module.exports ={
		'@tags':['user'],
		'Edit Sales Info for a new user':function(client){
			var loginPage = client.page.loginPage();
			client.url(client.launch_url);
			client.maximizeWindow();
			
			loginPage.adminLogin(client);
			
			var firmsPage = client.page.firmsPage();
			firmsPage.go();
			
			var dateString = firmsPage.addNewFirm(client);
			console.log('About to create: Test Firm '+dateString);
			
			var groupsPage = client.page.groupsPage();
			client.assert.urlContains('#/addGroup');
			groupsPage.selectFirm(dateString, client);
			groupsPage.addGrpForFirm(client,dateString);
			client.assert.urlContains('firmId=');
			
			var usersPage = client.page.usersPage();
			usersPage.go();
			usersPage.addUserTab(client);
			usersPage.selectFirm(dateString,client);
			var user1 = usersPage.createUser(client);
			console.log('Successfully created: New User '+user1);
			usersPage.voiceRecYes();
			usersPage.selectC2C();
			usersPage.userSubmit(client);
			usersPage.addUserSubmit(client);
						
			var userGroupsPage= client.page.editUserGroupsPage();
			userGroupsPage.verify.urlContains('#/editUserGroups');
			userGroupsPage.addGrp2User();
			client.assert.urlContains('firmId=');
				
			var salesPage =client.page.editSalesInfoPage();
			usersPage.selectFirstRow();   
			usersPage.editSalesInfoTab();

			salesPage
			.verify.containsText('body','Edit Sales Info for johndoe'+user1[0])
			.verify.valueContains('@firmName','Test Firm '+dateString)
			.verify.valueContains('@firstName','John')
			.verify.valueContains('@lastName','Doe'+user1[0])
			.cancelSalesInfo();
			salesPage.verify.urlContains('/#/editSalesInfo?firmId=');
			
			salesPage.getValue('@salesPerson1Bar',function(result){
				salesPage.verify.equal(result.value,'None')
			});
			salesPage.getValue('@salesPerson2Bar',function(result){
				salesPage.verify.equal(result.value,'None')
			});
			
			salesPage.getValue('@billStartBar',function(result){
				salesPage.verify.equal(result.value,'string:')
			});
			salesPage.getValue('@billStopBar',function(result){
				salesPage.verify.equal(result.value,'string:')
			});
			
			//should not save while "Bill Start Date" is "Trial"
			salesPage.saveSalesInfo();
			salesPage.waitForElementVisible('@error1',2000);
			salesPage.getText('@error1',function(result){
				salesPage.verify.equal(result.value,'Unable to change sales Info.\nsalesPerson is missing')
			});
			
			client.verify.urlContains('#/editSalesInfo?firmId=');
			client.end();
		}
		
}