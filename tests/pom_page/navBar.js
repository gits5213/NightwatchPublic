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
				selector: '//*[@id="navbar"]/ul[1]/li[1]/a/h4/i',
				locateStrategy: 'xpath'
			},
			groups:{
				selector: '//*[@id="navbar"]/ul[1]/li[2]/a/h4/i',
				locateStrategy: 'xpath'
			},
			users: {
				selector: '//*[@id="navbar"]/ul[1]/li[3]/a/h4/i',
				locateStrategy: 'xpath'
			},
			connections: {
				selector: '//*[@id="navbar"]/ul[1]/li[4]/a/h4/i',
				locateStrategy: 'xpath'
			},
			recordings:{
				selector: '//*[@id="navbar"]/ul[1]/li[5]/a/h4/i',
				locateStrategy: 'xpath'
			},
			viewLogs:{
				selector: '//*[@id="navbar"]/ul[1]/li[6]/a/h4/i',
				locateStrategy: 'xpath'
			},
			help:{
				selector: '//*[@id="navbar"]/ul[1]/li[7]/a/h4/i',
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