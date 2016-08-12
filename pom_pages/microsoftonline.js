var microsoftonline = {
	go : function(client) {
		var new_url = require('url');
		var oauth2 = require('simple-oauth2')(client.globals.msft_credentials);
		var returnVal = oauth2.authCode.authorizeURL({
			redirect_uri : client.launch_url,
			scope : client.globals.scopes.join(' ')
		});
		
		client.url(returnVal);
		client.pause(2000);
		return returnVal;
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
