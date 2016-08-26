/**
 * 
 */

var outlook = require('node-outlook');

outlook.base.setApiEndpoint('https://outlook.office.com/api/v2.0');

var token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiI0NDMwMzM0Mi02NWRmLTRhNWQtYTRiOS01YzA4YTE3MDAyZDIiLCJpc3MiOiJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vM2I1NjIzMGItNzY2My00NzUxLTliOGQtMjJiOTlhOTUwODQ4L3YyLjAiLCJpYXQiOjE0NzA2ODIxNDIsIm5iZiI6MTQ3MDY4MjE0MiwiZXhwIjoxNDcwNjg2MDQyLCJuYW1lIjoiVGVzdC5Vc2VyIiwibm9uY2UiOiI1OTQyMzg0MjM0NTUiLCJvaWQiOiJiODkwZWI0YS1kNDMxLTQzNGQtOTk3Zi1kYTBjYWQyN2FlMjQiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ0ZXN0LnVzZXJAYzl0ZWMuY29tIiwic3ViIjoiQVRId2tJUEhkMms4MmRLZDlUSE5sNWNWMkltLXQzMTdyZVBxRFZ5TF9WNCIsInRpZCI6IjNiNTYyMzBiLTc2NjMtNDc1MS05YjhkLTIyYjk5YTk1MDg0OCIsInZlciI6IjIuMCJ9.VaNuTv2Qwr_AeF9nCoZdSWEq4wv02wmamWyA0F_hpAjgGiVzMPDuKuQa-CJK3YUOQrglC6VKpUM2SaE5koozvzBHDxhMFEk0AOiojh1SQ4W7pKc16OmB8lIgPBskeXOYtONJu4zD_pK6ZqDvHRRJyWtaMHTgqHonVQ_bF58ltLFxAS3gvYMtdVfhn50Vpt5c8DrUKyzVh1FDRmaOVV7WIbOegOAG2Duh9_6xMmzyJIbeJQ-JL8k9P1Waw_B3o_rYOVYQFj10nj94s7FAI-bsZ5kqXKxvYDdcRIWhbpi-uydYZEDcC1oPDGl7imYXC4-wySaoilnQUVY43mvyxGyIug';
/*
var queryParams = {
		'$select' : 'Subject,ReceivedDateTime,From',
		'$orderby': 'ReceivedDateTime desc',
		'$top': 1
};

var userInfo= {
		email: 'uche.onwudiwe@c9tec.com'
};

outlook.mail.getMessages({token: token, folderId: 'Inbox', odataParams: queryParams, user: userInfo},function (error, result){
	if(error){
		console.log('getMessages returned an error: '+error);
	}
	else if (result){
		console.log('getMessages returned '+ result.value.length + ' messages.');
		result.value.forEach(function(message){
			console.log(' Subject:', message.Subject);
			console.log(' Received: ',message.ReceivedDateTime.toString());
			console.log(' From:', message.From ? message.From.EmailAddress.Name : 'EMPTY');
		});
	}
});

*/
var queryParams ={
		'$select' : 'DisplayName, EmailAddress',
};

outlook.base.getUser({token: token, odataParams: queryParams}, function(error, result){
	if(error){
		console.log('getUser returned an error: '+ error);
	}
	else if (result){
		console.log('User name:',result.DisplayName);
		console.log('User email:', result.EmailAddress);
	}
});
