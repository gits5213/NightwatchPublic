var userGroupsPageCommands = {
		go: function(){
			this.api.pause(1000);
			this.click('@groupsLink');
			this.api.pause(1000);
		},
		addGrp2User: function(){
			this.waitForElementVisible('@doneBtn',2000)
			.click('@firstRowFirmGroups');
			this.api.pause(2000);
			this.click('@addGrp2UserBtn');
			this.api.pause(2000);
			this.click('@doneBtn');
			this.api.pause(5000);
		},
		
		newGrpAddToUser: function(client, dateString){
			this.waitForElementVisible('@doneBtn',2000)
			this.click('@groupNameSearch')
			.setValue('@groupNameSearch', 'Firm '+dateString+' Grp 1')
			this.api.pause(2000);
			/*.click('@firstRowFirmGroups');
			this.api.pause(2000);
			this.click('@addGrp2UserBtn');
			this.api.pause(2000);
			this.click('@doneBtn');
			this.api.pause(5000);*/
		},
		done: function(client){
			this.waitForElementVisible('@secondRowFirmGroups',2000);
			this.click('@secondRowFirmGroups');
			this.api.pause(2000);
			this.waitForElementVisible('@addGrp2UserBtn',2000);
			this.click('@addGrp2UserBtn')
			this.api.pause(5000);
			this.click('@secondRowFirmGroups');
			this.api.pause(2000);
			this.waitForElementVisible('@addGrp2UserBtn',5000);
			this.click('@addGrp2UserBtn')
			this.api.pause(2000);
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
			},
			groupNameSearch: {
				selector: '//*[@id="firmGroups"]/thead/tr[2]/th[1]/div/input',
				locateStrategy: 'xpath'
			},
			
			
			
		}
}
