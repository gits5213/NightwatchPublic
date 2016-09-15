module.exports ={
		'User C9admin - Ability to See Click to Call Feature on Recording Tab': function(client){
			var loginPage = client.page.loginPage();
			client.url(client.launch_url);
			client.windowHandle(function(hand){
				var handle = hand.value;
				client.windowSize(handle,1700,800);
			});
					
			loginPage.adminLogin(client);
			
			var recordingsPage = client.page.recordingsPage();
			recordingsPage
				.verify.urlContains('#/home')
				.go(client);
			recordingsPage.verify.urlContains('#/recordings');
			recordingsPage.callType(client)
			recordingsPage.expect.element('@usernameBtn').text.to.equal('Username');
			recordingsPage.expect.element('@firmIDBtn').text.to.equal('Firm ID');
			recordingsPage.expect.element('@firmNameBtn').text.to.equal('Firm Name');
			recordingsPage.expect.element('@extNumBtn').text.to.equal('Extension Number');
			recordingsPage.expect.element('@farEndUserNameBtn').text.to.equal('Far End Username');
			recordingsPage.expect.element('@durationBtn').text.to.equal('Duration');
			recordingsPage.expect.element('@startTimeBtn').text.to.equal('Start Time');
			recordingsPage.expect.element('@stopTimeBtn').text.to.equal('Stop Time');
			recordingsPage.expect.element('@startActionBtn').text.to.equal('Start Action');
			recordingsPage.expect.element('@stopReBtn').text.to.equal('Stop Reason');
			recordingsPage.expect.element('@recordingFiBtn').text.to.equal('Recording Filename');
			recordingsPage.expect.element('@dialTelBtn').text.to.equal('Dialing Tel #');
			
			
			/*	.assert.containsText('@usernameBtn', 'Username')
				.assert.containsText('@firmIDBtn', 'Firm ID')	
				.assert.containsText('@firmNameBtn', 'Firm Name')
				.assert.containsText('@extNumBtn', 'Extension Number')
				.assert.containsText('@farEndUserNameBtn', 'Far End Username')	
				.assert.containsText('@durationBtn', 'Duration')	
				.assert.containsText('@startTimeBtn', 'Start Time')	
				.assert.containsText('@stopTimeBtn', 'Stop Time')	
				.assert.containsText('@startActionBtn', 'Start Action')	
				.assert.containsText('@stopReBtn', 'Stop Reason')	
				.assert.containsText('@recordingFiBtn', 'Recording Filename')	
				.assert.containsText('@dialTelBtn', 'Dialing Tel @');*/	
				
			
				client.end();

		}
				
}

