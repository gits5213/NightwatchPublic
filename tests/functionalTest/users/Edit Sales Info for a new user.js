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
			groupsPage.go();
			client.assert.urlContains('#/groups');
			groupsPage.addGrpForFirm(dateString,client);
			client.verify.urlContains('firmId=');
			
			var usersPage = client.page.usersPage();
			usersPage.go();
			var user1 = usersPage.addUserToFirm(dateString,client);
			var userGroupsPage= client.page.editUserGroupsPage();
			userGroupsPage
			.verify.urlContains('#/editUserGroups')
			.addGrp2User();
			var salesPage =client.page.editSalesInfoPage();
			usersPage.editSalesInfo();
			
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
			salesPage
			.saveSalesInfo()
			salesPage.waitForElementVisible('@error1',2000);
			salesPage.getText('@error1',function(result){
				salesPage.verify.equal(result.value,'Unable to change sales Info.\nsalesPerson is missing')
			});
			
			client.verify.urlContains('#/editSalesInfo?firmId=');
			
			client.end();
		}
		
}