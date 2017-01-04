module.exports ={
	'Cloud9 Portal Smoke Test - Firms': function(client){
		var navigation = client.page.navBar();
		var loginPage = client.page.loginPage();
		var usersPage = client.page.usersPage();
		var addEditFirmsPage = client.page.addEditFirmsPage();
		client.maximizeWindow();
		client.url(client.launch_url);
		loginPage.userLogin(client);

		var firmsPage = client.page.firmsPage();
		firmsPage.go();
		firmsPage.getText('@firmPageResult',function(result){
			firmsPage.verify.notEqual(result.value.length, 20, 'There should be less than 25 groups on this page');
		});
		
		firmsPage.firmNameSrch('c9 technologies', client);
		firmsPage.selectFirstRow();
		firmsPage.editFirmTab();
		
		addEditFirmsPage.street2();
		addEditFirmsPage.addEditSubmitBtn();
		addEditFirmsPage.addEditSubUpToastMess();	
		
		firmsPage.selectFirstRow();
		firmsPage.editFirmTab();
		addEditFirmsPage.verify.valueContains('@street2','17th floor')
		addEditFirmsPage.addEditSubmitBtn();
		addEditFirmsPage.addEditSubUpToastMess();

		firmsPage.go();
		firmsPage.firmNameSrch('c9 technologies', client);
		firmsPage.selectFirstRow();
		firmsPage.manageGroupsTab();
			
		firmsPage.go();
		firmsPage.firmNameSrch('c9 technologies', client);
		firmsPage.selectFirstRow();
		firmsPage.manageConnectionsTab();
				
		firmsPage.go();
		firmsPage.firmNameSrch('c9 technologies', client);
		firmsPage.selectFirstRow();
		firmsPage.manageUsersTab();
			
		firmsPage.go();
		firmsPage.firmNameSrch('c9 technologies', client);
		firmsPage.selectFirstRow();
		firmsPage.detailsTab();
	
		client.end();
			
	}
}
