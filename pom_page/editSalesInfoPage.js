var editSalesInfoPageCommands = {
		cancelSalesInfo: function(){
			this.api.pause(1000);
			this.click('@closeBtn');
			this.api.pause(1000);
		},
		saveSalesInfo: function(){
			this.api.pause(1000);
			this.click('@saveChangesBtn');
			this.api.pause(1000);
		}
};

module.exports = {
		commands :[editSalesInfoPageCommands],
		elements: {
			firmName: {
				selector: '//*[@id="firmName"]',
				locateStrategy: 'xpath'
			},
			
			firstName: {
				selector: '//*[@id="firstname"]',
				locateStrategy: 'xpath'
			},
			
			lastName: {
				selector: '//*[@id="lastname"]',
				locateStrategy: 'xpath'
			},
			salesPerson1Bar: {
				selector: '//*[@id="ng-view"]/div/div/form/div[2]/div[1]/select',
				locateStrategy: 'xpath'
			},
			salesPerson2Bar: {
				selector: '//*[@id="ng-view"]/div/div/form/div[2]/div[2]/select',
				locateStrategy: 'xpath'
			},
			billStartBar: {
				selector: '//*[@id="ng-view"]/div/div/form/div[3]/div[1]/select',
				locateStrategy: 'xpath'
			},
			billStopBar: {
				selector: '//*[@id="ng-view"]/div/div/form/div[3]/div[2]/select',
				locateStrategy: 'xpath'
			},
			closeBtn: {
				selector: '//*[@id="ng-view"]/div/div/form/div[3]/div[2]/select',
				locateStrategy: 'xpath'
			},
			saveChangesBtn: {
				selector: '//*[@id="ng-view"]/div/div/form/div[8]/button[2]',
				locateStrategy:'xpath'
			},
			error1:{
				selector: '//*[@id="toast-container"]',
				locateStrategy: 'xpath'
			}
		}
}
