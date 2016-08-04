
var helpPageCommand = {
		portalHelpTab: function(client){
			this.verify.visible('@helpTab', 'Verified Help tab button is visible and clikable');
			this.click('@helpTab');
			//Recordings Home Page Verified
			this.verify.visible('@helpHomePage', 'Verified Connections Home Page - How Can We Help You?');	
			this.api.pause(2000);		
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