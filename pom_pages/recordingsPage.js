
var recordingsPageCommands = {
		go: function(client){
			this.verify.visible('@recordingsTab', 'Verified Recordings tab button is visible');	
			this.click('@recordingsTab');
			client.pause(2000);
		},
		
		callType: function(client){
			this.waitForElementVisible('@callTypeBtn',2000);
			this.click('@callTypeBtn');
			this.api.pause(1000);
			this.expect.element('@clickToCallDM').text.to.equal('Click to Call');
			this.click('@clickToCallDM');
			this.api.pause(1000);
			this.click('@detailsBtn');
			this.api.pause(1000);
		}
		
		

};

module.exports = {
		commands :[recordingsPageCommands],
		elements: {
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
			callTypeBtn:{
				selector: '//*[@id="ng-view"]/div[2]/div[3]/div[1]/button',
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
			shoutdownDM:{
				selector: '//*[@id="ng-view"]/div[2]/div[3]/div[1]/ul/li[1]',
				locateStrategy: 'xpath'
			},
			ringdowDM:{
				selector: '//*[@id="ng-view"]/div[2]/div[3]/div[1]/ul/li[2]',
				locateStrategy: 'xpath'
			},
			clickToCallDM:{
				selector: '//*[@id="ng-view"]/div[2]/div[3]/div[1]/ul/li[3]',
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
			}

		}
}