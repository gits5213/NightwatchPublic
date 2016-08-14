module.exports = {
		
		
		ip: '209.66.96.50,10.0.0.40',
		msft_credentials : {
			  clientID: '44303342-65df-4a5d-a4b9-5c08a17002d2',
			  clientSecret: 'TXDKeT1049qLTjfafVZnAqE',
			  site: 'https://login.microsoftonline.com/common',
			  authorizationPath: '/oauth2/v2.0/authorize',
			  tokenPath: '/oauth2/v2.0/token'
			},
			
		oauth2 : [],
		code : '',
		token : '',
		scopes: ['openid','https://outlook.office.com/mail.read'],
		msft_email: 'test.user@c9tec.com',
		msft_email_pass: 'Welcome2C9',
		queryParams : {
		        '$select': 'Subject,ReceivedDateTime,From,Body',
		        '$orderby': 'ReceivedDateTime desc',
		        '$top': 1
		      },
		
		checkEmail: function(client){
			var url = require('url');
			var outlook = require('node-outlook');
			
			
			client.url(function(res){
				console.log(res);
				var url_parts = new url.parse(res.value,true);
				var code = url_parts.query.code;
				console.log("Code: "+ code);
				//return code;
				
				
				var queryParams2 = {
					    '$select': 'DisplayName, EmailAddress',
					  };
				
				outlook.base.setAnchorMailbox(client.globals.msft_email);
				
				outlook.base.getUser({token: code, odataParams: queryParams2}, function(error, user){
				    if (error) {
				      console.log("Error : "+error);
				    } else {
				    	console.log(user.EmailAddress);
				    }
				  });

				    // Set the API endpoint to use the v2.0 endpoint
			      outlook.base.setApiEndpoint('https://outlook.office.com/api/v2.0');
			      // Set the anchor mailbox to the user's SMTP address
			      outlook.base.setAnchorMailbox(client.globals.msft_email);
			      outlook.mail.getMessages({token: code, odataParams: queryParams},function(error, result){
			    	  if(error){
			    		  console.log('getMessages returned an error: '+ error);
			    	  }
			    	  else if(result){
			    		  console.log('getMessages returned '+ result.value.length +' messages.');
			    		  result.value.forEach(function(message){
			    			  console.log('  Subject: ' + message.Subject);
			                  var from = message.From ? message.From.EmailAddress.Name : 'NONE';
			    		  })
			    	  }
			      })
			});
		}
		
}