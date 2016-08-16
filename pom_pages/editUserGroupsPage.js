var userGroupsPageCommands = {
		go: function(){
			this.api.pause(1000);
			this.click('@groupsLink');
			this.api.pause(1000);
		},
		addGrp2User: function(){
			this.waitForElementVisible('@doneBtn',2000)
			.click('@firstRowFirmGroups');
			this.api.pause(500);
			this.click('@addGrp2UserBtn')
			.click('@doneBtn');
			this.api.pause(1000);
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
			},/*
			titleFname: {
				selector: '//*[@id="ng-view"]/div/h5/span[1]',
				locateStrategy: 'xpath'
			},
			titleLname: {
				selector: '//*[@id="ng-view"]/div/h5/span[1]',
				locateStrategy: 'xpath'
			},*/
			firstRowFirmGroups: {
				selector: '//*[@id="firmGroups"]/tbody/tr/td[1]',
				locateStrategy: 'xpath'
			}
		}
}
