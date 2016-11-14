module.exports ={
		
		'Network Test Page': function(client){
			client.url(client.launch_url+'/networktest.html',function(){
				console.log('loading ',client.launch_url+'/networktest.html')
			});
			client.pause(2000);
			
			var networkPage = client.page.networkTestPage();
			client.maximizeWindow();
			
			
			networkPage
			.verify.title('C9 Network Tester','Page title should read: C9 Network Tester')
			.verify.visible('@runTestBtn','the Run Network Test button is visible')
			.verify.hidden('@results','No results should exist on the page now')
			.verify.hidden('@success','The Success status should not be visible now')
			.verify.hidden('@fail', 'The Fail status should not be visible now')
			
			client.pause(2000)
			networkPage.click('@runTestBtn',function(){
				console.log('Clicking Run Network Test button')
			})
			client.pause(1000)
			networkPage
			.verify.visible('@results','No results should exist on the page now')
			.verify.visible('@success','The Success status should not be visible now')
			.verify.hidden('@fail', 'The Fail status should not be visible - assuming operation succeeded')
			
			client.end();
			
		}
}