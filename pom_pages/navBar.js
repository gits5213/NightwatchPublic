var navigationCommands = {
		logout:function(){
			this.click('@logoff');
			this.api.pause(1000, function(){
				console.log('... logging off')
			});
			this.assert.urlContains('#/login')
		}
};

module.exports = {
		commands :[navigationCommands],
		elements: {
			firms:{
				selector: '//*[@id="firmsNav"]/h4/i',
				locateStrategy: 'xpath'
			},
			groups:{
				selector: '//*[@id="groupsNav"]/h4/i',
				locateStrategy: 'xpath'
			},
			users: {
				selector: '//*[@id="usersNav"]/h4/i',
				locateStrategy: 'xpath'
			},
			connections: {
				selector: '//*[@id="connectionsNav"]/h4/i',
				locateStrategy: 'xpath'
			},
			recordings:{
				selector: '//*[@id="recordingsNav"]/h4/i',
				locateStrategy: 'xpath'
			},
			viewLogs:{
				selector: '//*[@id="auditNav"]/h4/i',
				locateStrategy: 'xpath'
			},
			reports:{
				selector: '//*[@id="reportsNav"]/h4/i'
			},
			help:{
				selector: '//*[@id="helpNav"]/h4/i',
				locateStrategy: 'xpath'
			},
			cog:{
				selector: '//*[@id="navbar"]/ul[2]/li[1]/a/h4/i',
				locateStrategy: 'xpath'
			},
			privilege:{
				selector: '//*[@id="settingsDropDown"]/li',
				locateStrategy:'xpath'
			},
			logoff:{
				selector: '//*[@id="navbar"]/ul[2]/li[3]/a/h4/i',
				locateStrategy: 'xpath'
			}
		}
}