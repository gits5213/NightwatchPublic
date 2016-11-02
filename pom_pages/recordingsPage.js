
var recordingsPageCommands = {
		go: function(client){
			this.verify.visible('@recordingsTab', 'Verified Recordings tab button is visible');	
			this.click('@recordingsTab');
			client.pause(2000);
		},
		
		callType: function(client){
			this.verify.visible('@callTypeTab');
			this.click('@callTypeTab');
			this.api.pause(500);
			this.click('@callTypeC2C');
			this.api.pause(3000);
			this.getText('@callTypeTab',function(c2cText){
				this.verify.equal(c2cText.value,'Call Type: Click to Call')
			});
		},
		textVerify:function(client){
			this.verify.containsText('@usernameBtn', 'Username');
			client.pause(1000);
			this.verify.containsText('@firmIDBtn', 'Firm ID');
			client.pause(1000);
			this.verify.containsText('@firmNameBtn', 'Firm Name');
			client.pause(1000);
			this.verify.containsText('@extNumBtn', 'Extension Number');
			client.pause(1000);
			this.verify.containsText('@farEndUserNameBtn', 'Far End Username');
			client.pause(1000);
			this.verify.containsText('@durationBtn', 'Duration');
			client.pause(1000);
			this.verify.containsText('@startTimeBtn', 'Start Time');
			client.pause(1000);
			this.verify.containsText('@startActionBtn', 'Start Action');
			client.pause(1000);
			this.verify.containsText('@recordingFiBtn', 'Recording Filename');
			client.pause(1000);
			this.verify.containsText('@dialTelBtn', 'Dialing Tel #');
			client.pause(1000);

		}
		

};

module.exports = {
		commands :[recordingsPageCommands],
		elements: {
			recordingsTab:{
				selector: '//*[@id="recordingsNav"]/h4/i',
				locateStrategy: 'xpath'
			},
			backBtn:{
				selector: '//*[@id="demo"]/div[4]/ul/li[1]/i',
				locateStrategy: 'xpath'
			},
			playBtn:{
				selector: '//*[@id="demo"]/div[4]/ul/li[2]/i',
				locateStrategy: 'xpath'
			},
			forwardBtn: {
				selector: '//*[@id="demo"]/div[4]/ul/li[3]/i',
				locateStrategy: 'xpath'
			},
			speedBtn: {
				selector: '//*[@id="demo"]/div[4]/ul/li[4]/i',
				locateStrategy: 'xpath'
			},
			slider:{
				selector: '//*[@id="demo"]/div[4]/ul/li[5]/rzslider',
				locateStrategy: 'xpath'
			},
			viewQosBtn:{
				selector: '//*[@id="viewQos"]/i',
				locateStrategy: 'xpath'
			},
			detailsBtn:{
				selector: '//*[@id="detailView"]/i',
				locateStrategy: 'xpath'
			},
			exportBtn:{
				selector: '//*[@id="exportbutton"]/i',
				locateStrategy: 'xpath'
			},
			downloadBtn:{
				selector: '//*[@id="ng-view"]/div[2]/div[2]/ul/li[4]/i',
				locateStrategy: 'xpath'
			},
			callTypeTab:{
				selector: '//*[@id="ng-view"]/div[2]/div[3]/div[1]/button',
				locateStrategy: 'xpath'
			},
			callTypeC2C:{
				selector: '//*[@id="ng-view"]/div[2]/div[3]/div[1]/ul/li[3]',
				
				locateStrategy: 'xpath'
			},
			show:{
				selector: '//*[@id="ng-view"]/div[2]/div[3]/div[2]/button',
				locateStrategy: 'xpath'
			},
			recordingsTab:{
				selector: '//*[@id="recordingsNav"]/h4/span',
				locateStrategy: 'xpath'
			},
			usernameBtn:{
				selector: '//*[@id="scrollable-area"]/table/thead[1]/tr[1]/th[2]/div/span',
				locateStrategy: 'xpath'
			},
			firmIDBtn:{
				selector: '//*[@id="scrollable-area"]/table/thead[1]/tr[1]/th[3]/div/span',
				locateStrategy: 'xpath'
			},
			firmNameBtn:{
				selector: '//*[@id="scrollable-area"]/table/thead[1]/tr[1]/th[4]/div/span',
				locateStrategy: 'xpath'
			},
			extNumBtn:{
				selector: '//*[@id="scrollable-area"]/table/thead[1]/tr[1]/th[5]/div/span',
				locateStrategy: 'xpath'
			},
			farEndUserNameBtn:{
				selector: '//*[@id="scrollable-area"]/table/thead[1]/tr[1]/th[6]/div/span',
				locateStrategy: 'xpath'
			},
			durationBtn:{
				selector: '//*[@id="scrollable-area"]/table/thead[1]/tr[1]/th[7]/div/span',
				locateStrategy: 'xpath'
			},
			startTimeBtn:{
				selector: '//*[@id="scrollable-area"]/table/thead[1]/tr[1]/th[8]/div/span',
				locateStrategy: 'xpath'
			},
			stopTimeBtn:{
				selector: '//*[@id="scrollable-area"]/table/thead[1]/tr[1]/th[9]/div/span',
				locateStrategy: 'xpath'
			},
			startActionBtn:{
				selector: '//*[@id="scrollable-area"]/table/thead[1]/tr[1]/th[10]/div/span',
				locateStrategy: 'xpath'
			},
			stopReBtn:{
				selector: '//*[@id="scrollable-area"]/table/thead[1]/tr[1]/th[11]/div/span',
				locateStrategy: 'xpath'
			},
			recordingFiBtn:{
				selector: '//*[@id="scrollable-area"]/table/thead[1]/tr[1]/th[12]/div/span',
				locateStrategy: 'xpath'
			},
			dialTelBtn:{
				selector: '//*[@id="scrollable-area"]/table/thead[1]/tr[1]/th[13]/div/span',
				locateStrategy: 'xpath'
			},
			toastMess:{
				selector: '//div[@class="toast-title"]',
				locateStrategy:'xpath'
			},
			shoutdownDM:{
				selector: '//*[@id="ng-view"]/div[2]/div[3]/div[1]/ul/li[1]',
				locateStrategy: 'xpath'
			},
			ringdowDM:{
				selector: '//*[@id="ng-view"]/div[2]/div[3]/div[1]/ul/li[2]',
				locateStrategy: 'xpath'
			}
			
			
			
		}
}