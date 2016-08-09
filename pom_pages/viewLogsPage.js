var viewLogsPageCommands = {
		portalViewLogsTab: function(client){
			this.verify.visible('@viewLogTab', 'Verified View Logs tab button is visible and clikable');
		
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
			}
	
		}
}
