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
			firmName: 'input[name=name]',
			street1 : 'input[name=street1]',
			street2 : 'input[name=street2]',
			city : 'input[name=city]',
			state: 'input[name=state]',
			zip: 'input[name=zip',
			pfname: 'input[name=provisionerFirstName]',
			plname: 'input[name=provisionerLastName]',
			pemail: 'input[name=provisionerEmail]',
			pwork: 'input[name=work]',
			pmobile: 'input[name=mobile',
			
			
			
				
			
			okButton:{
				selector: "(//button[@type='button'])[4]",
				locateStrategy: 'xpath'
			}
		}
}