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
						} else{
							token = oauth2.accessToken.create(result);
							client.globals.token = token.token;
							//console.log('client.globals.token = ',client.globals.token);
							
							outlook.mail.getMessages(
									
									{
										token : client.globals.token.access_token,
										odataParams : client.globals.queryParams
									},function(error,result) {
										if (error) {
											console.log('getMessages returned an error: '+ error);
										} else if (result) {
											console.log(result.value.length+ ' email message retrieved.');
											result.value.forEach(function(message) {
												var passRegex1 = /Password/;
												var passRegex2 = /password is/
												
												//console.log('Subject: '+ message.Subject);
												//console.log( message.Body.Content);
												message.Body.Content = message.Body.Content.replace(/(<([^>]+)>)/ig,"");
												var passRes1 = passRegex1.exec(message.Body.Content);
												var passRes2 = passRegex2.exec(message.Body.Content);
												//console.log('passRes1 contains: ',passRes1);
												//console.log('passRes2 contains: ',passRes2);
												var newPassword;
												if(passRes1 != null){
													newPassword = message.Body.Content.slice(passRes1.index+10,passRes1.index+18);
												}else{
													newPassword = message.Body.Content.slice(passRes2.index+13,passRes2.index+23);
												}
												//console.log('New user password is: ',newPassword);
												client.globals.newPassword = newPassword;
												//console.log('client.globals.newPassword contains :',client.globals.newPassword);
												return newPassword;
												
											})
										}
									});

						}
					});
			
			
			
				//callback(client);
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
		},
		signedInAccout: {
			selector: '//*[@id="test_user_c9tec_com"]/table/tbody/tr/td[2]/div[2]',
			locateStrategy: 'xpath'
		}
	}

}
