
var recordingsPageCommands = {
		portalRecordingsTab: function(client){
			this.verify.visible('@recordingsTab', 'Verified Recordings tab button is visible');					
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
			callType:{
				selector: '//*[@id="ng-view"]/div[2]/div[3]/div[1]/button',
				locateStrategy: 'xpath'
			},
			show:{
				selector: '//*[@id="ng-view"]/div[2]/div[3]/div[2]/button',
				locateStrategy: 'xpath'
			},
			//
			recordingsTab:{
				selector: '//*[@id="recordingsNav"]/h4/span',
				locateStrategy: 'xpath'
			}
		}
}