module.exports ={
		//'@disabled': true,
		
		'C9 Admin User  Privileges': function(client){
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
		
		
		'Non-admin Privileges - None': function(client){
			
			var navigation = client.page.navBar();
			var loginPage = client.page.loginPage();
			client.url(client.globals.baseUrl);
			loginPage.adminLogin(client);
			
			var usersPage = client.page.usersPage();
			usersPage.go();
			
			
			usersPage.editAdminInfo(client.globals.nonAdminUser,client);
			
			var adminPage=client.page.editAdminPage();
			adminPage.setToNone(client)
			navigation.logout();
			
			loginPage.userLoginFail(client.globals.nonAdminUser,client.globals.nonAdminPass)
			
			loginPage.getText('@loginFail1',function(result){
				loginPage.verify.equal(result.value,'Login failed, check your username and password and try again.')
			})
			
			
			client.end();
			
		},
		
		'Non-C9 Privileges - Firm Admin2': function(client){
			
			var navigation = client.page.navBar();
			var loginPage = client.page.loginPage();
			var usersPage = client.page.usersPage();
			client.url(client.globals.baseUrl);
			
			loginPage.adminLogin(client);
			
			
			usersPage.go();
			
			
			usersPage.editAdminInfo(client.globals.nonAdminUser,client);
			
			var adminPage=client.page.editAdminPage();
			adminPage.setToAdmin2(client)
			navigation.logout();
			
			loginPage.userLogin(client)
			
			client.verify.containsText('body', 'Welcome to the Cloud9 Portal')
			
			var navigation = client.page.navBar();
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
			.verify.visible('@editFirmBtn')
			.verify.visible('@manageGrpBtn')
			.verify.visible('@manageConnBtn')
			.verify.visible('@manageUsersBtn')
			.verify.visible('@detailsBtn')
			.verify.visible('@exportBtn')
			firmsPage.expect.element('@buttonsRptBtn').to.not.be.visible
			firmsPage.expect.element('@addFirmBtn').to.not.be.visible
			
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
			.verify.visible('@editAdminBtn')
			.verify.visible('@editBtn')
			.verify.visible('@editGrpsBtn')
			.verify.visible('@resetPassBtn')
			.verify.visible('@deleteUserBtn')
			.verify.visible('@detailsBtn')
			.verify.visible('@exportBtn')
			.verify.visible('@editNeighBtn')
			usersPage.expect.element('@editSalesUserBtn').to.not.be.visible
			usersPage.expect.element('@salesRptBtn').to.not.be.visible
			
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
				navigation.verify.equal(result.value, "Privilege : firmAdmin2");
			})
			
			client.end();
			
		},
		
		'Non-C9 Privileges - Firm Admin1': function(client){
			
			var navigation = client.page.navBar();
			var loginPage = client.page.loginPage();
			var usersPage = client.page.usersPage();
			client.url(client.globals.baseUrl);
			
			loginPage.adminLogin(client);
			
			usersPage.go();
			
			usersPage.editAdminInfo(client.globals.nonAdminUser,client);
			
			var adminPage=client.page.editAdminPage();
			adminPage.setToAdmin1(client)
			navigation.logout();
			
			loginPage.userLogin(client)
			
			client.verify.containsText('body', 'Welcome to the Cloud9 Portal')
			
			var navigation = client.page.navBar();
			navigation
			.verify.visible('@firms')
			.verify.visible('@groups')
			.verify.visible('@users')
			.verify.visible('@connections')
			.verify.visible('@recordings')
			.verify.visible('@help')
			navigation.expect.element('@viewLogs').to.not.be.visible;
			navigation.click('@firms');
			
			var firmsPage= client.page.firmsPage();
			firmsPage
			.verify.visible('@editFirmBtn')
			.verify.visible('@manageGrpBtn')
			.verify.visible('@manageConnBtn')
			.verify.visible('@manageUsersBtn')
			.verify.visible('@detailsBtn')
			.verify.visible('@exportBtn')
			firmsPage.expect.element('@buttonsRptBtn').to.not.be.visible
			firmsPage.expect.element('@addFirmBtn').to.not.be.visible
			
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
			.verify.visible('@editBtn')
			.verify.visible('@editGrpsBtn')
			.verify.visible('@resetPassBtn')
			.verify.visible('@deleteUserBtn')
			.verify.visible('@detailsBtn')
			.verify.visible('@exportBtn')
			.verify.visible('@editNeighBtn')
			usersPage.expect.element('@editAdminBtn').to.not.be.visible
			usersPage.expect.element('@editSalesUserBtn').to.not.be.visible
			usersPage.expect.element('@salesRptBtn').to.not.be.visible
			
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
				navigation.verify.equal(result.value, "Privilege : firmAdmin1");
			})
			
			client.end();
			
		},
		
		'Non-C9 Privileges - Compliance': function(client){
			
			var navigation = client.page.navBar();
			var loginPage = client.page.loginPage();
			var usersPage = client.page.usersPage();
			client.url(client.globals.baseUrl);
			
			loginPage.adminLogin(client);
			
			usersPage.go();
			
			usersPage.editAdminInfo(client.globals.nonAdminUser,client);
			
			var adminPage=client.page.editAdminPage();
			adminPage.setToCompliance(client)
			navigation.logout();
			
			loginPage.userLogin(client)
			
			client.verify.containsText('body', 'Welcome to the Cloud9 Portal')
			
			var navigation = client.page.navBar();
			
			navigation.expect.element('@firms').to.not.be.visible
			navigation.expect.element('@groups').to.not.be.visible
			navigation.expect.element('@users').to.not.be.visible
			navigation.expect.element('@connections').to.not.be.visible
			navigation.verify.visible('@recordings')
			.verify.visible('@help')
			navigation.expect.element('@viewLogs').to.not.be.visible;
			navigation.click('@firms');
			
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
				navigation.verify.equal(result.value, "Privilege : compliance");
			})
			
			client.end();
			
		},
		
		'Non-C9 Privileges - Firm User3': function(client){
			
			var navigation = client.page.navBar();
			var loginPage = client.page.loginPage();
			var usersPage = client.page.usersPage();
			client.url(client.globals.baseUrl);
			
			loginPage.adminLogin(client);
			
			usersPage.go();
			
			usersPage.editAdminInfo(client.globals.nonAdminUser,client);
			
			var adminPage=client.page.editAdminPage();
			adminPage.setToUser3(client)
			navigation.logout();
			
			loginPage.userLogin(client)
			
			client.verify.containsText('body', 'Welcome to the Cloud9 Portal')
			
			var navigation = client.page.navBar();
			
			navigation.expect.element('@firms').to.not.be.visible
			navigation.expect.element('@groups').to.not.be.visible
			navigation.verify.visible('@users')
			navigation.expect.element('@connections').to.not.be.visible
			navigation.verify.visible('@recordings')
			.verify.visible('@help')
			navigation.expect.element('@viewLogs').to.not.be.visible;
			
			navigation.click('@users')
			navigation.api.pause(1000);
			
			var usersPage=client.page.usersPage();
			
			usersPage.verify.visible('@editUserBtn')
			usersPage.expect.element('@addUserBtn').to.not.be.visible
			usersPage.expect.element('@editGrpsBtn').to.not.be.visible;
			usersPage.expect.element('@resetPassBtn').to.not.be.visible;
			usersPage.expect.element('@deleteUserBtn').to.not.be.visible;
			usersPage.expect.element('@detailsBtn').to.not.be.visible;
			usersPage.expect.element('@exportBtn').to.not.be.visible;
			usersPage.expect.element('@editNeighBtn').to.not.be.visible;
			usersPage.expect.element('@editAdminBtn').to.not.be.visible
			usersPage.expect.element('@editSalesUserBtn').to.not.be.visible
			usersPage.expect.element('@salesRptBtn').to.not.be.visible
			
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
				navigation.verify.equal(result.value, "Privilege : user3");
			})
			
			client.end();
			
		},
		
		'Non-C9 Privileges - Sales': function(client){
			
			var navigation = client.page.navBar();
			var loginPage = client.page.loginPage();
			var usersPage = client.page.usersPage();
			client.url(client.globals.baseUrl);
			
			loginPage.adminLogin(client);
			
			
			usersPage.go();
			
			
			usersPage.editAdminInfo(client.globals.nonAdminUser,client);
			
			var adminPage=client.page.editAdminPage();
			adminPage.setToSales(client)
			navigation.logout();
			
			loginPage.userLogin(client)
			
			client.verify.containsText('body', 'Welcome to the Cloud9 Portal')
			
			var navigation = client.page.navBar();
			
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
			
			firmsPage.expect.element('@editFirmBtn').to.not.be.visible
			firmsPage.verify.visible('@manageGrpBtn')
			.verify.visible('@manageConnBtn')
			.verify.visible('@manageUsersBtn')
			.verify.visible('@detailsBtn')
			.verify.visible('@exportBtn')
			.verify.visible('@buttonsRptBtn')
			firmsPage.expect.element('@addFirmBtn').to.not.be.visible
			
			navigation.click('@groups')
			navigation.api.pause(1000);
			
			var groupsPage=client.page.groupsPage();
			
			groupsPage.expect.element('@addGroupBtn').to.not.be.visible
			groupsPage.verify.visible('@editGrpBtn')
			groupsPage.expect.element('@editGrpUsersBtn').to.not.be.visible
			groupsPage.verify.visible('@viewGrpConnBtn')
			groupsPage.expect.element('@delGrpBtn').to.not.be.visible
			groupsPage.verify.visible('@detailsBtn')
			.verify.visible('@exportBtn')
			
			navigation.click('@users')
			navigation.api.pause(1000);
			
			var usersPage=client.page.usersPage();
			
			usersPage.expect.element('@editUserBtn').to.not.be.visible
			usersPage.expect.element('@addUserBtn').to.not.be.visible
			usersPage.expect.element('@editAdminBtn').to.not.be.visible
			usersPage.verify.visible('@editBtn')
			usersPage.expect.element('@editGrpsBtn').to.not.be.visible
			usersPage.expect.element('@resetPassBtn').to.not.be.visible
			usersPage.expect.element('@deleteUserBtn').to.not.be.visible
			usersPage.verify.visible('@detailsBtn')
			.verify.visible('@exportBtn')
			.verify.visible('@editNeighBtn')
			.verify.visible('@editSalesUserBtn')
			.verify.visible('@salesRptBtn')
			
			navigation.click('@connections');
			navigation.api.pause(1000);
			
			var connPage=client.page.connectionsPage();
			connPage
			.verify.visible('@addConnBtn')
			.verify.visible('@editConnBtn')
			connPage.expect.element('@delConnBtn').to.not.be.visible
			connPage.verify.visible('@detailsBtn')
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
				navigation.verify.equal(result.value, "Privilege : cloud9Sales");
			})
			
			client.end();
			
		}
}