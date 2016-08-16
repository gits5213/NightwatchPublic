module.exports ={
		'Cloud9 Portal Smoke Test - Firms': function(client){
			var loginPage = client.page.loginPage();
			client.url(client.launch_url);
			client.windowHandle(function(hand){
				var handle = hand.value;
				client.windowSize(handle,1700,800);
			});
			
			//Log In 
			loginPage.prodAdmin2Login(client);

			//Firm Tab.................................
		var firmsTab = client.page.firmsPage();
			firmsTab.go();
			firmsTab.firmTabResultVerify();
			
			//Edit Firm Button
		firmsTab.getFirm_ByName(client);
		firmsTab.getEditFirmByChangingAddress();
			firmsTab.click('@editFirmBtn');
			firmsTab.waitForElementVisible('@street2Field',1000, 'Verified Stree 2 input field visible ');
			firmsTab.clearValue('@street2Field').click('@street2Field');
			firmsTab.api.pause(1000);
			firmsTab.setValue('@street2Field','17th floor');
			firmsTab.api.pause(1000);
			
			/*var randomNumber = Math.floor((Math.random() * 20) + 4);
			console.log(randomNumber)
			this.setValue('@street2Field', randomNumber + 'th floor');*/
			
			firmsTab.waitForElementVisible('@saveChangesBtn',1000, 'Verified save changes button visible');
			firmsTab.click('@saveChangesBtn');
			firmsTab.api.pause(1500);
			
			//Edit Firm Button Verification
			firmsTab.getFirm_ByName(client);
			firmsTab.getEditFirmByChangingAddress();
				firmsTab.click('@editFirmBtn');
				firmsTab.clearValue('@street2Field')
				firmsTab.api.pause(2000);
					firmsTab.getText('@street2',function(result){
						console.log("Text contain :"+ result.value);
						firmsTab.api.pause(2000);
						firmsTab.verify.equal("Text Contain : " + result.value, '17th floor');
					});
			firmsTab.waitForElementVisible('@saveChangesBtn',1000, 'Verified save changes button visible');
			firmsTab.click('@saveChangesBtn');
			firmsTab.api.pause(1500);	
			
			
			//-----------------------------------------------
			//Manage Group Button
		firmsTab.getFirm_ByName(client);
		firmsTab.manageGroupBtn(client);
			
			//Manage Connections Button
		firmsTab.go();
		firmsTab.getFirm_ByName(client);
		firmsTab.manageConnectionsBtn(client);
			
			//Manage Users
		firmsTab.go();
		firmsTab.getFirm_ByName(client);
		firmsTab.manageUsersBtn(client);
			
			//Details
		firmsTab.go();
		firmsTab.getDetailsBtn(client);
			
			
			console.log('Test cases Countinuing')
			client.closeWindow();
			client.end();
			
		},
		
}