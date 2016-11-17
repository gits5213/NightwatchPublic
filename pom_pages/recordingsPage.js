
var recordingsPageCommands = {
		portalRecordingsTab: function(client){
			this.verify.visible('@recordingsTab', 'Verified Recordings tab button is visible');					
		}

};

module.exports = {
		commands :[recordingsPageCommands],
		elements: {
			backBtn:{
				selector: '//*[@id="playbackControls"]/div/ul/li[1]/i',
				locateStrategy: 'xpath'
			},
			playBtn:{
				selector: '//*[@id="playbackControls"]/div/ul/li[2]/i',
				locateStrategy: 'xpath'
			},
			forwardBtn: {
				selector: '//*[@id="playbackControls"]/div/ul/li[3]/i',
				locateStrategy: 'xpath'
			},
			speedBtn: {
				selector: '//*[@id="playbackControls"]/div/ul/li[4]/i',
				locateStrategy: 'xpath'
			},
			slider:{
				selector: '//*[@id="playbackControls"]/div/ul/li[5]/rzslider',
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
				selector: '//*[@id="ng-view"]/div[4]/ul/li[4]/i',
				locateStrategy: 'xpath'
			},
			callType:{
				selector: '//*[@id="ng-view"]/div[5]/div[1]/button',
				locateStrategy: 'xpath'
			},
			show:{
				selector: '//*[@id="ng-view"]/div[5]/div[2]/button',
				locateStrategy: 'xpath'
			},
			//
			recordingsTab:{
				selector: '//*[@id="recordingsNav"]/h4/span',
				locateStrategy: 'xpath'
			}
		}
}