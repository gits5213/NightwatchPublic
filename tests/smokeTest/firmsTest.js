module.exports ={
		'Cloud9 Portal Smoke Test - Firms': function(client){
			var loginPage = client.page.loginPage();
			client.url(client.launch_url);
			client.windowHandle(function(hand){
				var handle = hand.value;
				client.windowSize(handle,1700,800);
			});
			
			//Log In 
			loginPage.adminLogin(client);

			//Firm Tab.................................
			var firmsPage = client.page.firmsPage();
			firmsPage.go();
			firmsPage.firmTabResultVerify();
			
			//Edit Firm Button
			firmsPage.getFirm_ByName(client);
			firmsPage.clearValue('@firmNameSearch');
			//this.api.pause(1000);
			firmsPage.click('@firmNameSearch');
			//this.api.pause(2000);
			firmsPage.setValue('@firmNameSearch',' ');
			firmsPage.api.keys(client.Keys.DOWN_ARROW);
			firmsPage.api.keys(client.Keys.ENTER);
			firmsPage.api.pause(1000);
			firmsPage.waitForElementVisible('@firstRowFirmsData',5000, 'Verifed the searching result narrowing!');
			firmsPage.click('@firstRowFirmsData');
			firmsPage.api.pause(2000);
			

			firmsPage.getEditFirmByChangingAddress();

			//Manage Group Button
			firmsPage.getFirm_ByName(client);
			firmsPage.manageGroupBtn(client);
			
			//Manage Connections Button
			firmsPage.go();
			firmsPage.getFirm_ByName(client);
			firmsPage.manageConnectionsBtn(client);
			
			//Manage Users
			firmsPage.go();
			firmsPage.getFirm_ByName(client);
			firmsPage.manageUsersBtn(client);
			
			//Details
			firmsPage.go();
			firmsPage.getDetailsBtn(client);
			
			
			console.log('Test cases Countinuing')
			client.closeWindow();
			client.end();
			
		},
		
}