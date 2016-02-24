var firmsPageCommands = {
		go: function(){
			this.api.pause(1000);
			return this.click('@firmsLink')
		},
		addNewFirm: function(){
			this.api.pause(1000);
			return this.click('@addFirmBtn')
			.assert.containsText('body','Add Firm')
		}
};

module.exports = {
		commands :[firmsPageCommands],
		elements: {
			firmsLink:{
				selector: '//*[@id="navbar"]/ul[1]/li[1]/a/h4/i',
				locateStrategy: 'xpath'
			},
			addFirmBtn:{
				selector: '//*[@id="ng-view"]/div[2]/div[1]/ul/li[1]/i',
				locateStrategy: 'xpath'
			},
			okButton:{
				selector: "(//button[@type='button'])[4]",
				locateStrategy: 'xpath'
			}
		}
}