var userPageCommands = {
		go: function(){
			this.api.pause(1000);
			this.click('@usersLink');
			this.api.pause(1000);
		},
		addUserToFirm : function(firm,client){
			
		},
		editFirstRecord: function(){
			this.waitForElementVisible('@firstRow',2000);
			this.click('@firstRow')
			.click('@editGrpBtn');
			this.api.pause(1000);
			
		}
};

module.exports = {
		commands :[groupsPageCommands],
		elements: {
			usersLink: {
				selector: '//*[@id="navbar"]/ul[1]/li[3]/a/h4/i',
				locateStrategy: 'xpath'
			},
			selectFirmBar: {
				selector: '//*[@id="ng-view"]/div/div/div/div/a/span',
				locateStrategy: 'xpath'
			},
			selectFirmBarSearch: {
				selector: '//*[@id="ng-view"]/div/div/div/div/div/div/input',
				locateStrategy: 'xpath'
			}
		}
}
