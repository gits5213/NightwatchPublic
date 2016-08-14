module.exports ={
		'Load Microsoft Page': function(client){
			//var code = client.globals.checkEmail(client);
			var msftPage = client.page.microsoftonline();
			var code = msftPage.go(client);
			//msftPage.getToken(code);
			
			//client.end();
		}
}