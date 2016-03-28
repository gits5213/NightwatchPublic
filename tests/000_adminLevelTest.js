module.exports ={
		//'@disabled': true,
		/*
		'C9 Admin User Login Test': function(client){
			var loginPage = client.page.loginPage();
			console.log("\n",client.globals.baseUrl,'\n');
			client.url(client.globals.baseUrl);
			loginPage.adminLogin(client);
			client.assert.containsText('body', 'Welcome to the Cloud9 Portal')
			
			var navigation = client.page.navBar();
			//check that entire navigation options are available to admin
			navigation
			.verify.visible('@firms')
			.verify.visible('@groups')
			.verify.visible('@users')
			.verify.visible('@connections')
			.verify.visible('@recordings')
			.verify.visible('@viewLogs')
			.verify.visible('@help')
			.click('@firms')
			
			var firmsPage= client.page.firmsPage();
			firmsPage
			.verify.visible('@addFirmBtn')
			.verify.visible('@editFirmBtn')
			.verify.visible('@manageGrpBtn')
			.verify.visible('@manageConnBtn')
			.verify.visible('@manageUsersBtn')
			.verify.visible('@buttonsRptBtn')
			.verify.visible('@detailsBtn')
			.verify.visible('@exportBtn')
			
			navigation.click('@groups')
			navigation.api.pause(1000);
			
			var groupsPage=client.page.groupsPage();
			groupsPage
			.verify.visible('@addGroupBtn')
			.verify.visible('@editGrpBtn')
			.verify.visible('@editGrpUsersBtn')
			.verify.visible('@viewGrpConnBtn')
			.verify.visible('@delGrpBtn')
			.verify.visible('@detailsBtn')
			.verify.visible('@exportBtn')
			
			navigation.click('@users')
			navigation.api.pause(1000);
			
			var usersPage=client.page.usersPage();
			usersPage
			.verify.visible('@editUserBtn')
			.verify.visible('@addUserBtn')
			.verify.visible('@editSalesUserBtn')
			.verify.visible('@editAdminBtn')
			.verify.visible('@editBtn')
			.verify.visible('@editGrpsBtn')
			.verify.visible('@resetPassBtn')
			.verify.visible('@deleteUserBtn')
			.verify.visible('@salesRptBtn')
			.verify.visible('@detailsBtn')
			.verify.visible('@exportBtn')
			.verify.visible('@editNeighBtn')
			
			navigation.click('@connections');
			navigation.api.pause(1000);
			
			var connPage=client.page.connectionsPage();
			connPage
			.verify.visible('@addConnBtn')
			.verify.visible('@editConnBtn')
			.verify.visible('@delConnBtn')
			.verify.visible('@detailsBtn')
			.verify.visible('@exportBtn')
			
			navigation.click('@recordings');
			navigation.api.pause(1000);
			
			var recPage=client.page.recordingsPage();
			recPage
			.verify.visible('@backBtn')
			.verify.visible('@playBtn')
			.verify.visible('@forwardBtn')
			.verify.visible('@speedBtn')
			.verify.visible('@slider')
			.verify.visible('@viewQosBtn')
			.verify.visible('@detailsBtn')
			.verify.visible('@exportBtn')
			.verify.visible('@downloadBtn')
			.verify.visible('@callType')
			.verify.visible('@show')
			
			navigation.click('@cog');
			navigation.api.pause(1000);
			navigation.getText('@privilege',function(result){
				navigation.verify.equal(result.value, "Privilege : cloud9");
			})
			
			client.end();
		},
		*/
		
		'Admin Privileges for non Cloud 9 users': function(client){
			var loginPage = client.page.loginPage();
			client.url(client.globals.baseUrl);
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
			.done();
			
			
			var adminPage = client.page.editAdminPage();
			usersPage.editAdminInfo();
			
			adminPage
			.verify.urlContains('#/editAdminLevel?firmId=')
			//.verify.valueContains('body', 'Select Administraotr Privilege for johndoe'+user1)
			adminPage
			.verify.valueContains('@firmName', 'Test Firm '+dateString)
			.verify.valueContains('@firstName', 'John')
			.verify.valueContains('@lastName',"Doe"+user1)
			.getValue('@adminPriv',function(result){
				adminPage.verify.equal(result.value,"string:none")
			})
			.verify.valueContains('@mobile',234567890)
			.getValue('@tfa_Yes',function(result){
				adminPage.verify.equal(result.value,1)
			})
			.getValue('@tfa_No',function(result){
				adminPage.verify.equal(result.value,0)
			})
			
			/*
			salesPage
			.verify.containsText('body','Edit Sales Info for johndoe'+user1)
			.verify.valueContains('@firmName','Test Firm '+dateString)
			.verify.valueContains('@firstName','John')
			.verify.valueContains('@lastName','Doe'+user1)
			
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
			
			salesPage
			.saveSalesInfo()
			salesPage.waitForElementVisible('@error1',2000);
			salesPage.getText('@error1',function(result){
				salesPage.verify.equal(result.value,'Unable to change sales Info.\nsalesPerson is missing')
			});
			
			client.verify.urlContains('#/editSalesInfo?firmId=');
			
			client.end();
			*/
		}
}