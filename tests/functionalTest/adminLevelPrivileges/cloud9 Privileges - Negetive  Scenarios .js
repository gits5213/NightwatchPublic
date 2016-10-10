module.exports ={
		'Cloud9 Privileges - Verify Negetive Scenario': function(client){

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
			//None
			client.pause(1000);
			adminPage.click('@adminPriv');
			client.pause(500);
			adminPage.setValue('@adminPriv','3');
			client.pause(500);
			adminPage.api.keys(client.Keys.ENTER);
			client.pause(500);
			adminPage.click('@tfa_No')
			adminPage.clearValue('@allowedIp')
			adminPage.click('@saveBtn');
			client.pause(500);	
			adminPage.getText('@ErrorMes',function(errorMes){
				adminPage.verify.equal(errorMes.value,'Allowed IP required if Two Factor Login is disabled')
			});
			client.pause(2000);
			adminPage.click('@tfa_Yes');
			client.pause(1000);
			adminPage.clearValue('@mobile')
			client.pause(1000);
			adminPage.click('@saveBtn');
			client.pause(500);	
			adminPage.getText('@ErrorMes',function(errorMes){
				adminPage.verify.equal(errorMes.value,'Mobile number required for two factor authentication')
			});
			
			//Firm Administrator 2
			client.pause(1000);
			adminPage.click('@adminPriv');
			client.pause(500);
			adminPage.setValue('@adminPriv','1');
			client.pause(500);
			adminPage.api.keys(client.Keys.ENTER);
			client.pause(500);
			adminPage.click('@tfa_No')
			adminPage.clearValue('@allowedIp')
			adminPage.click('@saveBtn');
			client.pause(500);	
			adminPage.getText('@ErrorMes',function(errorMes){
				adminPage.verify.equal(errorMes.value,'Allowed IP required if Two Factor Login is disabled')
			});
			client.pause(2000);
			adminPage.click('@tfa_Yes');
			client.pause(1000);
			adminPage.clearValue('@mobile')
			client.pause(1000);
			adminPage.click('@saveBtn');
			client.pause(500);	
			adminPage.getText('@ErrorMes',function(errorMes){
				adminPage.verify.equal(errorMes.value,'Mobile number required for two factor authentication')
			});
			
			//Firm Adminstrator 1
			client.pause(1000);
			adminPage.click('@adminPriv');
			client.pause(500);
			adminPage.setValue('@adminPriv','2');
			client.pause(500);
			adminPage.api.keys(client.Keys.ENTER);
			client.pause(500);
			adminPage.click('@tfa_No')
			adminPage.clearValue('@allowedIp')
			adminPage.click('@saveBtn');
			client.pause(500);	
			adminPage.getText('@ErrorMes',function(errorMes){
				adminPage.verify.equal(errorMes.value,'Allowed IP required if Two Factor Login is disabled')
			});
			client.pause(2000);
			adminPage.click('@tfa_Yes');
			client.pause(1000);
			adminPage.clearValue('@mobile')
			client.pause(1000);
			adminPage.click('@saveBtn');
			client.pause(500);	
			adminPage.getText('@ErrorMes',function(errorMes){
				adminPage.verify.equal(errorMes.value,'Mobile number required for two factor authentication')
			});
			
			//Compliance (recording access only)
			client.pause(1000);
			adminPage.click('@adminPriv');
			client.pause(500);
			adminPage.setValue('@adminPriv','3');
			client.pause(500);
			adminPage.api.keys(client.Keys.ENTER);
			client.pause(500);
			adminPage.click('@tfa_No')
			adminPage.clearValue('@allowedIp')
			adminPage.click('@saveBtn');
			client.pause(500);	
			adminPage.getText('@ErrorMes',function(errorMes){
				adminPage.verify.equal(errorMes.value,'Allowed IP required if Two Factor Login is disabled')
			});
			client.pause(2000);
			adminPage.click('@tfa_Yes');
			client.pause(1000);
			adminPage.clearValue('@mobile')
			client.pause(1000);
			adminPage.click('@saveBtn');
			client.pause(500);	
			adminPage.getText('@ErrorMes',function(errorMes){
				adminPage.verify.equal(errorMes.value,'Mobile number required for two factor authentication')
			});
			
			//User Level 3
			client.pause(1000);
			adminPage.click('@adminPriv');
			client.pause(500);
			adminPage.setValue('@adminPriv','3');
			client.pause(500);
			adminPage.api.keys(client.Keys.ENTER);
			client.pause(500);
			adminPage.click('@tfa_No')
			adminPage.clearValue('@allowedIp')
			adminPage.click('@saveBtn');
			client.pause(500);	
			adminPage.getText('@ErrorMes',function(errorMes){
				adminPage.verify.equal(errorMes.value,'Allowed IP required if Two Factor Login is disabled')
			});
			client.pause(2000);
			adminPage.click('@tfa_Yes');
			client.pause(1000);
			adminPage.clearValue('@mobile')
			client.pause(1000);
			adminPage.click('@saveBtn');
			client.pause(500);	
			adminPage.getText('@ErrorMes',function(errorMes){
				adminPage.verify.equal(errorMes.value,'Mobile number required for two factor authentication')
			});
			
			//Cloud9 Sales
			client.pause(1000);
			adminPage.click('@adminPriv');
			client.pause(500);
			adminPage.setValue('@adminPriv','4');
			client.pause(500);
			adminPage.api.keys(client.Keys.ENTER);
			client.pause(500);
			adminPage.click('@tfa_No')
			adminPage.clearValue('@allowedIp')
			adminPage.click('@saveBtn');
			client.pause(500);	
			adminPage.getText('@ErrorMes',function(errorMes){
				adminPage.verify.equal(errorMes.value,'Allowed IP required if Two Factor Login is disabled')
			});
			client.pause(2000);
			adminPage.click('@tfa_Yes');
			client.pause(1000);
			adminPage.clearValue('@mobile')
			client.pause(1000);
			adminPage.click('@saveBtn');
			client.pause(500);	
			adminPage.getText('@ErrorMes',function(errorMes){
				adminPage.verify.equal(errorMes.value,'Mobile number required for two factor authentication')
			});
		
			client.pause(1000);
			navigation.logout();
			
			client.end();	
			
		}
			
	}