module.exports = {
		
		
		ip: '209.66.96.50,10.0.0.40',
		msft_credentials : {
			  clientID: '44303342-65df-4a5d-a4b9-5c08a17002d2',
			  clientSecret: 'TXDKeT1049qLTjfafVZnAqE',
			  site: 'https://login.microsoftonline.com/common',
			  authorizationPath: '/oauth2/v2.0/authorize',
			  tokenPath: '/oauth2/v2.0/token'
			},
			
		redirect_uri: 'https://qa1-c9portal.xhoot.com/c9portal',	
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
		
		newUser:'',
		newPassword:''
			
		

			
			
			
			
			
			
			
			
			
			
			
}