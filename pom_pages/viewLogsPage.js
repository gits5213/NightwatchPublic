var viewLogsPageCommands = {
		portalViewLogsTab: function(client){
			this.verify.visible('@viewLogTab', 'Verified View Logs tab button is visible and clikable');
			this.click('@viewLogTab');
			//Recordings Home Page Verified
			this.verify.visible('@viewLogsHomePage', 'Verified Connections Home Page -   View Audit Logs');	
			this.api.pause(2000);	
			
			
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
