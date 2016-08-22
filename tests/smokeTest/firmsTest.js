module.exports ={
	'Cloud9 Portal Smoke Test - Firms': function(client){
		var navigation = client.page.navBar();
		var loginPage = client.page.loginPage();
		var usersPage = client.page.usersPage();
		client.maximizeWindow();
		/*client.windowHandle(function(hand){
			var handle = hand.value;
			client.windowSize(handle,1700,800);
		});*/
		client.url(client.launch_url);
			
		loginPage.adminLogin(client);
		usersPage.go();
		usersPage.editAdminInfo(client.globals.nonAdminUser,client);
			
		var adminPage=client.page.editAdminPage();
		adminPage.setToAdmin2(client)
		navigation.logout();
		loginPage.userLogin(client);

		//Firm Tab.................................
	var firmsPage = client.page.firmsPage();
		firmsPage.go();
		firmsPage.getFirm_ByName(client);
		client.elements('xpath','//*[@id="scrollable-area"]/table/tbody/tr',function(result){
			client.verify.notEqual(result.value.length, 25, 'There should be less than 25 groups on this page');
		});
		firmsPage.api.pause(1000);
		firmsPage
			.verify.visible('@firmNameSearch', 'firm name search field is visible')
			.verify.visible('@firstRowFirmsData', 'Firm name search field is visible');
		
		firmsPage
			.verify.visible('@editFirmBtn', 'edit firm button is visible')
			.click('@editFirmBtn')
			 client.pause(1000);
			 firmsPage.verify.visible('@street2', 'stree 2 search field is visible')
		     firmsPage.clearValue('@street2')
			 .click('@street2')
			.setValue('@street2','17th floor')
			client.pause(2000);
			 firmsPage.click('@submitFrmBtn', 'save changes button field is visible');
			firmsPage.api.pause(2000);
			
		//Edit Firm Button Verification
		firmsPage.go();	
		firmsPage.getFirm_ByName(client);
		firmsPage
			.verify.valueContains('@street2','17th floor')
			firmsPage.api.pause(1000);
			firmsPage.click('@submitFrmBtn');
			firmsPage.api.pause(2000);	
			
		//Manage Group Button
		firmsPage.go();
		firmsPage.getFirm_ByName(client);
		firmsPage
			.verify.visible('@manageGrpBtn','Verified Manage Group button is visible')
			firmsPage.api.pause(2000);
			firmsPage.click('@manageGrpBtn')
			client.pause(2000);
			
		//Manage Connections Button
		firmsPage.go();
		firmsPage.getFirm_ByName(client);
		firmsPage 
			.verify.visible('@manageConnBtn','Verified Manage Connections button is visible')
			.click('@manageConnBtn')
			client.pause(2000);
				
		//Manage Users
		firmsPage.go();
		firmsPage.getFirm_ByName(client);
		firmsPage
			.verify.visible('@manageUsersBtn','Verified Manage Users button is visible')
			.click('@manageUsersBtn');
		    client.pause(1000);
			
		//Details
		   firmsPage.go();
		   firmsPage
			.clearValue('@firmNameSearch')
			.verify.visible('@detailsBtn','Verified Details button is visible')
			.click('@detailsBtn');
		    client.pause(2000);
		
			console.log('Test cases Countinuing')
			client.closeWindow();
			client.end();
			
	},
		
}



/*var randomNumber = Math.floor((Math.random() * 20) + 4);
console.log(randomNumber)
this.setValue('@street2Field', randomNumber + 'th floor');*/