var userGroupsPageCommands = {
		go: function(){
			this.api.pause(1000);
			this.click('@groupsLink');
			this.api.pause(1000);
		},
		done: function(){
			this.waitForElementVisible('@doneBtn',2000)
			.click('@firstRowFirmGroups');
			this.api.pause(500);
			this.click('@addGrp2UserBtn')
			.click('@doneBtn');
			this.api.pause(1000);
		},
		done_1: function(client){
			this.waitForElementVisible('@secondRowFirmGroups',2000);
			this.click('@secondRowFirmGroups');
			this.waitForElementVisible('@addGrp2UserBtn',2000);
			this.click('@addGrp2UserBtn')
			this.api.pause(5000);
			this.click('@secondRowFirmGroups');
			this.waitForElementVisible('@addGrp2UserBtn',5000);
			this.click('@addGrp2UserBtn')
			this.waitForElementVisible('@doneBtn',5000);
			this.click('@doneBtn');
			this.api.pause(5000);
		}
		
};

module.exports = {
		commands :[userGroupsPageCommands],
		elements: {
			doneBtn:{
				selector: '//*[@id="ng-view"]/div/form/button',
				locateStrategy: 'xpath'
			},
			addGrp2UserBtn: {
				selector: '//*[@id="adduser"]/span',
				locateStrategy: 'xpath'
			},
			rmvGrpFromUserBtn: {
				selector: '//*[@id="remuser"]/span',
				locateStrategy: 'xpath'
			},
			firstRowFirmGroups: {
				selector: '//*[@id="firmGroups"]/tbody/tr/td[1]',
				locateStrategy: 'xpath'
			},
			secondRowFirmGroups: {
				selector: '//*[@id="firmGroups"]/tbody/tr/td[1]',
				locateStrategy: 'xpath'
			}
			
			
		}
}
