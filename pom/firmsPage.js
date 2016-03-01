var firmsPageCommands = {
		go: function(){
			this.api.pause(1000);
			this.click('@firmsLink')
		},
		addNewFirm: function(client){
			this.api.pause(1000);
			this.click('@addFirmBtn')
			.assert.containsText('body','Add Firm')
			.waitForElementVisible('@firmNameForAdd',2000);
			
			var now = new Date();
			var dateString=now.getFullYear().toString()+
			(now.getMonth()+1<10 ? '0'+(now.getMonth()+1).toString() : (now.getMonth()+1).toString())+''+
			(now.getDate()<10 ? '0'+now.getDate().toString() : now.getDate().toString())+''+
			(now.getHours()<10 ? '0'+now.getHours().toString() : now.getHours().toString())+''+
			(now.getMinutes()<10 ? '0'+now.getMinutes().toString() : now.getMinutes().toString())+''+
			(now.getSeconds()<10 ? '0'+now.getSeconds().toString() : now.getSeconds().toString())+''+
			(now.getMilliseconds()<10?'00'+now.getMilliseconds().toString():(now.getMilliseconds()<100?'0'+now.getMilliseconds().toString():now.getMilliseconds().toString()));
			//now.getMilliseconds().toString();
			
			this.setValue('@firmNameForAdd','Test Firm '+dateString)
			.setValue('@street1', '123 Main Street')
			.setValue('@street2', '17th Flr')
			.setValue('@city', 'Any City')
			.setValue('@state','NY')
			.setValue('@zip', 12345)
			.setValue('@pfname','Erique')
			.setValue('@plname','Martinez')
			.setValue('@pemail',client.globals.email1)
			.setValue('@pwork', 123456789)
			.setValue('@pmobile',234567890)
			.click('@firmType');
			this.api.pause(1000);
			this.api.keys(client.Keys.DOWN_ARROW);
			this.api.keys(client.Keys.ENTER);
			this.click('@copyFrmBtn');
			this.api.pause(1000);
			
			this.click('@submitFrmBtn');
			this.api.pause(1000);
		
			return dateString.trim();
		},
		getFirmByName : function(string){
			this.click('@firmsLink')
			.clearValue('@firmNameSearch');
			this.api.pause(1000);
			this.setValue('@firmNameSearch',string);
			this.api.pause(1000);
			this.waitForElementVisible('@firstRowFirmsData',2000)
			.click('@firstRowFirmsData')
			.click('@editFirmBtn');
			this.api.pause(1000);
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
			editFirmBtn:{
				selector: '//*[@id="ng-view"]/div[2]/div[1]/ul/li[2]/i',
				locateStrategy: 'xpath'
			},
			firmNameSearch:{
				selector: '//*[@id="scrollable-area"]/table/thead[1]/tr[2]/th[1]/div/input',
				locateStrategy: 'xpath'
			},
			
			firmNameForAdd: {
				selector: '//*[@id="name"]',
				locateStrategy: 'xpath'
			},
			street1 : 'input[name=street1]',
			street2 : 'input[name=street2]',
			city : 'input[name=city]',
			state: 'input[name=state]',
			zip: 'input[name=zip',
			pfname: 'input[name=provisionerFirstName]',
			plname: 'input[name=provisionerLastName]',
			pemail: 'input[name=provisionerEmail]',
			pwork: 'input[name=work]',
			pmobile: 'input[name=mobile]',
			firmType: 'select[name=firmType]',
			
			billFname: 'input[name=billFirst]',
			billLname: 'input[name=billLast]',
			billEmail: 'input[name=billEmail]',
			billWork: 'input[name=billWork]',
			billMobile: 'input[name=billMobile]',
			billStr1: 'input[name=billStreet1]',
			billStr2: 'input[name=billStreet2]',
			billCity: 'input[name=billCity]',
			billState: 'input[name=billState]',
			billZip: 'input[name=billZip]',
			
			copyFrmBtn: '#copyfirm',
			
			submitFrmBtn: {
				selector: '//*[@id="firmData"]/div[2]/button[2]',
				locateStrategy: 'xpath'
			},
			
			firstRowFirmsData:{
				selector: '//*[@id="scrollable-area"]/table/tbody/tr/td[1]',
				locateStrategy: 'xpath'
			},
			
			
			
		
			okButton:{
				selector: "(//button[@type='button'])[4]",
				locateStrategy: 'xpath'
			}
		}
}