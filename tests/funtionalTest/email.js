module.exports ={
		'Load Microsoft Page': function(client){
			//var code = client.globals.checkEmail(client);
			var msftPage = client.page.microsoftonline();
			msftPage.go(client);
			
			//client.end();
		}
}