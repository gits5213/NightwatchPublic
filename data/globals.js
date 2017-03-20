module.exports = {
		
		
		ip: '0000000000000000000',
		"email1":"RemoteITUniversity@gmail.com",
        "URI":"http://www.remoteituniversity.com",

		
		msft_credentials : {
			  clientID: 'sdfeed-fghyu-dfrtyu',
			  clientSecret: 'sdertyujqawASWasdeWERTYU',
			  site: 'https://login.microsoftonline.com/common',
			  authorizationPath: '/oauth2/v2.0/authorize',
			  tokenPath: '/oauth2/v2.0/token'
			},
			
		redirect_uri: 'https://qa1-Remotitschool.xhoot.com/remoteituniversity',
			
		oauth2 : [],
		code : '',
		token : '',
		scopes: ['openid','https://outlook.office.com/mail.read'],
		msft_email: 'RemoteITUniversity@gmail.com',
		msft_email_pass: 'Welcome2RemoteIT',
		queryParams : {
		        '$select': 'Subject,ReceivedDateTime,From,Body',
		        '$orderby': 'ReceivedDateTime desc',
		        '$top': 1
		      },
		
		newUser:'',
		newPassword:''
		

}