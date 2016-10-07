var clickToCallPageCommands = {
				
		createsSIPSettings: function(client, dateString){
			    this.clearValue('@portNumber');
				this.setValue('@portNumber','5060');
				var now = new Date();
				var dateString =
				(now.getHours()<10 ? '0'+now.getHours().toString() : now.getHours().toString())+''+
				(now.getMinutes()<10 ? '0'+now.getMinutes().toString() : now.getMinutes().toString())+''+
				(now.getSeconds()<10 ? '0'+now.getSeconds().toString() : now.getSeconds().toString())+''+
				(now.getMilliseconds()<10?'00'+now.getMilliseconds().toString():(now.getMilliseconds()<100?'0'+now.getMilliseconds().toString():now.getMilliseconds().toString()));

				this.waitForElementVisible('@saveSettingsBtn',2000);
				this.waitForElementVisible('@userName',1000);
				this.waitForElementVisible('@authId',1000);
				this.waitForElementVisible('@authPaswd',1000);
				this.clearValue('@userName');
				this.setValue('@userName', 'Eric'+dateString);
				this.clearValue('@authId');
				this.setValue('@authId','Tonder'+dateString);
				this.clearValue('@authPaswd');
				this.setValue('@authPaswd','AbCa_12@'+dateString);	
				this.clearValue('@dialingPrefix');
				this.setValue('@dialingPrefix','1');
				this.api.pause(2000);
				return dateString.trim();
												
		},
		ciscoCallExtSett: function(client, dateString){
			this.clearValue('@userNameExet');
			this.setValue('@userNameExet','EricTo'+dateString);
			this.clearValue('@displayName');
			this.setValue('@displayName','Eric Tonder'+dateString);
			this.click('@outBoundCha');
			this.api.pause(2000);
		},
		
		onSIPextSett: function(client, dateString){
			this.clearValue('@userNameExetOnSip');
			this.setValue('@userNameExetOnSip','EricTo'+dateString);
			this.clearValue('@displayNameOnSip');
			this.setValue('@displayNameOnSip','Eric1 Tonder'+dateString);
			this.click('@outBoundChaOnSip');
			this.api.pause(2000);
		},

		getDomain: function(client, user){
			this.clearValue('@domain');
			this.setValue('@domain', user);
			this.api.pause(3000);
		},
		getDomain1: function(client, user){
			this.clearValue('@domainName1');
			this.setValue('@domainName1',user);
			this.api.pause(3000);
		},
		
		selectProvider: function(string,client){
			this.clearValue('@selectProvider');
			this.setValue('@selectProvider',string);
			this.api.pause(3000);
		},
		
		domainPlus: function(client){
			this.click('@domainNamePlus');
			this.api.pause(3000);
			this.clearValue('@domainName2');
			this.setValue('@domainName2',client.globals.domainName);
			this.api.pause(2000);
		},
		
		extenSetPlus: function(client, dateString){
			this.click('@extSettPlus');
			this.api.pause(3000);
			this.clearValue('@userNExPlus');
			this.setValue('@userNExPlus','Tonder'+dateString);
			this.api.pause(1000);
			this.clearValue('@dispNExPlus');
			this.setValue('@dispNExPlus','Eric Tonder');
			this.api.pause(2000);
		},
		
		createFavorites: function(client, dateString){
				this.api.pause(3000);
				this.click('@favoritesBtn');
				this.waitForElementVisible('@saveFavoritesBtn',2000);
				this.waitForElementVisible('@firstNameBtn',1000)
				.waitForElementVisible('@lastNameBtn',1000)
				.waitForElementVisible('@businessBtn',1000)
				.waitForElementVisible('@mobileBtn',1000)
				.waitForElementVisible('@homeBtn',1000)
				.waitForElementVisible('@defaultBtn',1000);
				this.clearValue('@firstNameBtn');
				this.setValue('@firstNameBtn', 'Eric'+dateString);
				this.clearValue('@lastNameBtn');
				this.setValue('@lastNameBtn','Tonder'+dateString);
				this.clearValue('@businessBtn');
				this.setValue('@businessBtn','19175616551');
				this.clearValue('@mobileBtn');
				this.setValue('@mobileBtn','19175616552');
				this.clearValue('@homeBtn');
				this.setValue('@homeBtn','19175616552');
				this.api.pause(2000);
		
		},
		
			selectDefault: function(string,client){
		    	this.clearValue('@defaultBtn');
		    	this.setValue('@defaultBtn',string);
		    	this.api.pause(2000);
		    	this.api.keys(client.Keys.ENTER);
					
		},
			saveFavorites: function(){
				this.click('@saveFavoritesBtn');
				this.api.pause(4000);
					
		}	
	};

	module.exports = {
		commands :[clickToCallPageCommands],
		elements: {
			selectProvider:{
				selector: '//*[@id="provider"]',
				//*[@id="provider"]/option[2]
				locateStrategy: 'xpath'
			},
			selectProviderOption:{
				selector: '//*[@id="provider"]/option[2]',
				locateStrategy: 'xpath'
			},
			domain:{
				selector: '//*[@id="usersettings"]/div/div[1]/div[1]/div[2]/div/input',
				locateStrategy: 'xpath'
			},
			domainName1:{
				selector: '//*[@id="usersettings"]/div/div[1]/div[1]/div[2]/div/div[1]/input',
				locateStrategy: 'xpath'
			},
			domainNamePlus:{
				selector: '//*[@id="usersettings"]/div/div[1]/div[1]/div[2]/div/div[2]/i',
				locateStrategy: 'xpath'
			},
			domainName2:{
				selector: '//*[@id="usersettings"]/div/div[1]/div[1]/div[2]/div[2]/div[1]/input',
				locateStrategy: 'xpath'
			},
			domainNameMinus:{
				selector: '//*[@id="usersettings"]/div/div[1]/div[1]/div[2]/div[2]/div[2]/i[1]',
				locateStrategy: 'xpath'
			},
			portNumber:{
				selector: '//*[@id="usersettings"]/div/div[1]/div[1]/div[3]/div/input',
				locateStrategy: 'xpath'
			},
			userName:{
				selector: '//*[@id="usersettings"]/div/div[1]/div[1]/div[4]/div[1]/input[1]',
				locateStrategy: 'xpath'
			},
			dialingPrefix:{
				selector: '//*[@id="usersettings"]/div/div[1]/div[1]/div[4]/div[1]/input[2]',
				locateStrategy: 'xpath'
			},
			authId:{
				selector: '//*[@id="usersettings"]/div/div[1]/div[1]/div[4]/div[2]/input',
				locateStrategy: 'xpath'
			},
			authPaswd:{
				selector: '//*[@id="usersettings"]/div/div[1]/div[1]/div[4]/div[3]/input',
				locateStrategy: 'xpath'
			},
			//-------------------------
			userNameExet:{
				selector: '//*[@id="usersettings"]/div/div[1]/div[1]/div[5]/div/div[1]/input',
				locateStrategy: 'xpath'
			},
			userNameExetOnSip:{
				selector: '//*[@id="usersettings"]/div/div[1]/div[1]/div[5]/div[1]/input',
				locateStrategy: 'xpath'
			},
			
			displayName:{
				selector: '//*[@id="usersettings"]/div/div[1]/div[1]/div[5]/div/div[2]/input',
				locateStrategy: 'xpath'
			},
			displayNameOnSip:{
				selector: '//*[@id="usersettings"]/div/div[1]/div[1]/div[5]/div[2]/input',
				locateStrategy: 'xpath'
			},
			
			outBoundCha:{
				selector: '//*[@id="usersettings"]/div/div[1]/div[1]/div[5]/div/div[3]/div[1]/input',
				locateStrategy: 'xpath'
			},
			outBoundChaOnSip:{
				selector: '//*[@id="usersettings"]/div/div[1]/div[1]/div[5]/div[3]/div/input',
				locateStrategy: 'xpath'
			},
			extSettPlus:{
				selector: '//*[@id="usersettings"]/div/div[1]/div[1]/div[5]/div/div[3]/div[2]/i',
				locateStrategy: 'xpath'
			},
			userNExPlus:{
				selector: '//*[@id="usersettings"]/div/div[1]/div[1]/div[6]/div/div[1]/input',
				locateStrategy: 'xpath'
			},
			dispNExPlus:{
				selector: '//*[@id="usersettings"]/div/div[1]/div[1]/div[6]/div/div[2]/input',
				locateStrategy: 'xpath'
			},
			extSettMinis:{
				selector: '//*[@id="usersettings"]/div/div[1]/div[1]/div[6]/div/div[3]/div[2]/i[1]',
				locateStrategy: 'xpath'
			},
			//-------------------------------
			saveSettingsBtn:{
				selector: '//*[@id="usersettings"]/div/div[1]/div[2]/button[2]',
				locateStrategy: 'xpath'
			},
			goBackBtnSS:{
				selector: '//*[@id="usersettings"]/div/div[1]/div[2]/button[1]',
				locateStrategy: 'xpath'
			},
			//------------------------------
			favoritesBtn:{
				selector: '//*[@id="usersettings"]/ul/li[2]/a',
				locateStrategy: 'xpath'
			},
			saveFavoritesBtn:{
				selector: '//*[@id="usersettings"]/div/div[2]/div[2]/button[2]',
				locateStrategy: 'xpath'
			},
			firstNameBtn:{
				selector: '//*[@id="favoritesContainer"]/div/div[1]/input',
				locateStrategy: 'xpath'
			},
			lastNameBtn:{
				selector: '//*[@id="favoritesContainer"]/div/div[2]/input',
				locateStrategy: 'xpath'
			},
			businessBtn:{
				selector: '//*[@id="favoritesContainer"]/div/div[3]/input',
				locateStrategy: 'xpath'
			},
			mobileBtn:{
				selector: '//*[@id="favoritesContainer"]/div/div[4]/input',
				locateStrategy: 'xpath'
			},
			homeBtn:{
				selector: '//*[@id="favoritesContainer"]/div/div[5]/input',
				locateStrategy: 'xpath'
			},
			defaultBtn:{
				selector: '//*[@id="default_$index"]',
				locateStrategy: 'xpath'
			},
			favoritesPlus:{
				selector: '//*[@id="favoritesContainer"]/div/div[6]/div[2]/i',
				locateStrategy: 'xpath'
			},
			favoritesMinis:{
				selector: '//*[@id="favoritesContainer"]/div/div[6]/div[2]/i[1]',
				locateStrategy: 'xpath'
			},
			goBackBtnF:{
				selector: '//*[@id="usersettings"]/div/div[2]/div[2]/button[1]',
				locateStrategy: 'xpath'
			},
		   //------------------------
			firstNamePlus1:{
				selector: '//*[@id="favoritesContainer"]/div/div[1]/input',
				locateStrategy: 'xpath'
			},
			lastNamePlus1:{
				selector: '//*[@id="favoritesContainer"]/div/div[2]/input',
				locateStrategy: 'xpath'
			},
			businessPlus1:{
				selector: '//*[@id="favoritesContainer"]/div/div[3]/input',
				locateStrategy: 'xpath'
			},
			mobilePlus1:{
				selector: '//*[@id="favoritesContainer"]/div/div[4]/input',
				locateStrategy: 'xpath'
			},
			homePlus1:{
				selector: '//*[@id="favoritesContainer"]/div/div[5]/input',
				locateStrategy: 'xpath'
			},
			favoritesPlus1:{
				selector: '//*[@id="favoritesContainer"]/div/div[6]/div[2]/i',
				locateStrategy: 'xpath'
			},
			favoritesMinis1:{
				selector: '//*[@id="favoritesContainer"]/div/div[6]/div[2]/i[1]',
				locateStrategy: 'xpath'
			},
			
			//-----------------------------------
			firstNamePlus2:{
				selector: '//*[@id="favoritesContainer"]/div/div[1]/input',
				locateStrategy: 'xpath'
			},
			lastNamePlus2:{
				selector: '//*[@id="favoritesContainer"]/div/div[2]/input',
				locateStrategy: 'xpath'
			},
			businessPlus2:{
				selector: '//*[@id="favoritesContainer"]/div/div[3]/input',
				locateStrategy: 'xpath'
			},
			mobilePlus2:{
				selector: '//*[@id="favoritesContainer"]/div/div[4]/input',
				locateStrategy: 'xpath'
			},
			homePlus2:{
				selector: '//*[@id="favoritesContainer"]/div/div[5]/input',
				locateStrategy: 'xpath'
			},
			ErrorMes:{
				selector: '//div[@class="toast-message"]',
				locateStrategy: 'xpath'
			}

			
			
		}


}