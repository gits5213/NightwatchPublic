var microsoftonline = {
	getPassFromEmail : function(client) {
		var url = require('url');
		var outlook = require('node-outlook');
		// Set the API endpoint to use the v2.0 endpoint
		outlook.base.setApiEndpoint('https://outlook.office.com/api/v2.0');
		// Set the anchor mailbox to the user's SMTP address
		outlook.base.setAnchorMailbox(client.globals.msft_email);
		var oauth2 = require('simple-oauth2')(client.globals.msft_credentials);
		var returnVal = oauth2.authCode.authorizeURL({
			redirect_uri : client.launch_url,
			scope : client.globals.scopes.join(' ')
		});
		client.globals.oauth2 = oauth2;

		client.url(returnVal);
		client.pause(2000)

		this.setValue('@userEmail', client.globals.msft_email).setValue(
				"@emailPass", client.globals.msft_email_pass);
		client.pause(2000);
		this.click('@signInBtn')
		client.pause(5000);
		var newUrl;
		var code;
		var url_parts;
		var token;
		client.url(function(res) {
					//console.log("url is :", res.value);
					newUrl = res.value;
					url_parts = url.parse(newUrl, true);
					code = url_parts.query.code;
					client.globals.code = code;

					oauth2.authCode.getToken(
									{
										code : code,
										redirect_uri : client.launch_url,
										scope : client.globals.scopes.join(' ')
									},
									function(error, result) {
										if (error) {
											console.log('Access token error: ',error.message);
										} else {
											token = oauth2.accessToken.create(result);
											client.globals.token = token.token;
											//console.log('token.token.access_token contains : ', token.token.access_token,'\n');

											outlook.mail.getMessages(
															{
																token : client.globals.token.access_token,
																odataParams : client.globals.queryParams
															},function(error,result) {
																if (error) {
																	console.log('getMessages returned an error: '+ error);
																	//console.log('\n','token is here: ', client.globals.token);
																} else if (result) {
																	console.log('getMessages returned '+ result.value.length+ ' messages.');
																	result.value.forEach(function(message) {
																		var passRegex = /Password/;
																		
																		console.log('Subject: '+ message.Subject);
																		//console.log( message.Body.Content);
																		message.Body.Content = message.Body.Content.replace(/(<([^>]+)>)/ig,"");
																		var passRes = passRegex.exec(message.Body.Content);
																		//console.log("Line is : ",passRes);
																		var newPassword = message.Body.Content.slice(passRes.index+10,passRes.index+18);
																		console.log('New user password is: ',newPassword);
																		client.globals.newPassword = newPassword;
																	})
																}
															})
										}
									});

				});

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
