var viewLogsPageCommands = {
		portalViewLogsTab: function(client){
			this.verify.visible('@viewLogTab', 'Verified View Logs tab button is visible');
		
		}		
};

module.exports = {
		commands :[viewLogsPageCommands],
		elements: {
			viewLogTab:{
				selector: '//*[@id="auditNav"]/h4/span',
				locateStrategy: 'xpath'
			},
			viewLogsHomePage:{
				selector: '//*[@id="ng-view"]/div[1]/div/h2',
				locateStrategy: 'xpath'
			},
			viewLogsPageResult:{
				selector: '//*[@id="ng-view"]/div[2]/div[5]/ul/label',
				locateStrategy: 'xpath'
			}
	
		}
}
