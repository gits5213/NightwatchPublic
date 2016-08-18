
var helpPageCommand = {
		portalHelpTab: function(client){
			this.verify.visible('@helpTab', 'Verified Help tab button is visible and clikable');
			this.click('@helpTab');		
		}
//
};

module.exports = {
		commands :[helpPageCommand],
		elements: {
			helpTab:{
				selector: '//*[@id="helpNav"]/h4/span',
				locateStrategy: 'xpath'
			},
			helpHomePage:{
				selector: '//*[@id="page-wrapper"]/div/div[1]/div/div/div/div/h1',
				locateStrategy: 'xpath'
			}
			
	}
}