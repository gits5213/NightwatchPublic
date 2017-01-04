module.exports ={
		
		'00 minute 59 sec wait for sing in after 10 times attempts with wrong credential': function(client){
			var loginPage = client.page.loginPage();
			console.log("\n",client.launch_url,'\n');
			client.maximizeWindow();
			client.url(client.launch_url);
			loginPage.userName(client);
			loginPage.wrongPassWord(client);
			loginPage.sign_in(client);
			
			loginPage.signInErrorMsg(client);
			
			loginPage.IncorrentSignIn(client);
			loginPage.signInErrorMsg_Ten(client);
			
			client.pause(60000);
			loginPage.correctPassWord(client);
			loginPage.sign_in(client);
			
			loginPage.logiInModelDialog(client);
			client.end();
		}
		
}