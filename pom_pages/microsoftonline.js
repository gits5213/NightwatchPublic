var microsoftonline = {
	go : function(client) {
		var url = require('url');
		var oauth2 = require('simple-oauth2')(client.globals.msft_credentials);
		var returnVal = oauth2.authCode.authorizeURL({
			redirect_uri : client.launch_url,
			scope : client.globals.scopes.join(' ')
		});
		client.globals.oauth2 = oauth2;
		var token;
		
		client.url(returnVal);
		client.pause(2000)
		
		.setValue('@userEmail', client.globals.msft_email)
		.setValue("@emailPass", client.globals.msft_email_pass);
		client.pause(2000)
		.click('@signInBtn')
		client.pause(5000);
		
		var url_parts = url.parse(client.url, true);
		var code = url_parts.query.code;
		
		oauth2.authCode.getToken({
			code: code,
			redirect_uri: client.launch_url,
			scope : client.globals.scopes.join(' ')
		}, function (error, result){
			if(error){
				console.log('Access token error: ', error.message);
			}
			else{
				token = oauth2.accessToken.create(result);
				console.log('Token created: ', token.token);
			}
		})
		return token.token;
	}
};

module.exports = {
	commands : [ microsoftonline ],
	elements : {
		userEmail : {
			selector : '#cred-userid-inputtext'
		},
		emailPass : {
			selector : '#cred-password-inputtext'
		},
		signInBtn : {
			selector : '#submit-button'
		}
	}

}
