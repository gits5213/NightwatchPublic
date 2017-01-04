var userPageCommands = {
		selectFirm : function(string, client){    	
			this.click('@selectFirmBar')
			.setValue('@selectFirmBarSearch',string);
			this.api.pause(1000);
			this.api.keys(client.Keys.ENTER);	
		},
		editCountry: function(client, string){
			this.click('@countryDropdown');
			client.pause(1000);
			this.setValue('@countrySearch', string);
			this.api.pause(500);
			this.api.keys(client.Keys.ENTER);
			this.api.pause(1000);
		},
		editState: function(client, string){
			this.click('@stateDropdown');
			client.pause(1000);
			this.setValue('@stateSearch', string);
			this.api.pause(500);
			this.api.keys(client.Keys.ENTER);
			this.api.pause(1000);
			
		},
		createUser : function(client, dateString){
			client.pause(2000);
			this.waitForElementVisible('@addUserSubmitBtn',2000);
			var now = new Date();
			var dateString=(now.getHours()<10 ? '0'+now.getHours().toString() : now.getHours().toString())+''+
			(now.getMinutes()<10 ? '0'+now.getMinutes().toString() : now.getMinutes().toString())+''+
			(now.getSeconds()<10 ? '0'+now.getSeconds().toString() : now.getSeconds().toString())+''+
			(now.getMilliseconds()<10?'00'+now.getMilliseconds().toString():(now.getMilliseconds()<100?'0'+now.getMilliseconds().toString():now.getMilliseconds().toString()));

			this.waitForElementVisible('@fnameField',1000)
			.waitForElementVisible('@lnameField',1000)
			.setValue('@fnameField', 'John')
			.setValue('@lnameField','Doe'+ dateString)
			.setValue('@emailField',client.globals.email1);
			this.api.pause(1000);
			this.click('@countryDropdown');
			this.click('@countrySearch');
			this.api.pause(500);
			this.setValue('@countrySearch','United States');
			this.api.pause(500);
			this.api.keys(client.Keys.ENTER);
			this.api.pause(1000);
			this.click('@stateDropdown');
			this.click('@stateSearch');
			this.api.pause(500);
			this.setValue('@stateSearch','New York');
			this.api.pause(500);
			this.api.keys(client.Keys.ENTER);
			this.setValue('@workField',123456789)
			.setValue('@mobileField',234567890)
			.setValue('@street1','1 So Amazing Ct')
			.setValue('@street2','Penthouse')
			.setValue('@city','Real Town')
			.setValue('@zip', 77777);
			this.api.pause(1000);
			return dateString.trim();	
		},
		addUserSubmit : function(client){
			this.verify.visible('@addUserConfirmBtn', 'Verified add user button is visible');
			this.click('@addUserConfirmBtn');
			this.api.pause(1000);
		},	
		getAddUToMess: function(){
			this.api.pause(1500);
			this.getText('@toastMess',function(errorMes){
				this.verify.equal(errorMes.value,'User added successfully.')
			});
			this.api.pause(7000);
		},
		voiceRecYes : function(){ 
			this.verify.visible('@voiceYes', 'Verified voice yes radio button is visible');
			this.click('@voiceYes');
			this.api.pause(2000);
			
		},
		voiceRecNo: function(){	
			this.verify.visible('@voiceNo', 'Verified voice no radio button is visible');
			this.click('@voiceNo');			
			this.api.pause(1000);
		},	
		selectC2C : function(){ 
			this.verify.visible('@c2cCheckbox', 'Verified click to call checkbox is visible');
			this.click('@c2cCheckbox');
			this.api.pause(1000);
			
		},
		userSubmit : function(client){	
			this.verify.visible('@addUserSubmitBtn', 'Verified user submit button is visible');
			this.click('@addUserSubmitBtn');
			client.pause(1000);
			
		},	
		updateUserRecord: function(client, dateString){
			this.waitForElementVisible('@fnameField',1000)
			.waitForElementVisible('@lnameField',1000)
			.clearValue('@fnameField')
			.setValue('@fnameField', 'Jane')
			.clearValue('@lnameField')
			.setValue('@lnameField','Poe'+dateString)
			.clearValue('@emailField')
			.setValue('@emailField','updateduser@c9tec.com')
			this.api.pause(1000);
			this.clearValue('@workField')
			.setValue('@workField','011-234-5294')
			.clearValue('@mobileField')
			.setValue('@mobileField','011-234-5555');	
		},
		editUserSubmit: function(){
			this.verify.visible('@editUserConfirmBtn', 'Verified edit user button is visible');
			this.click('@editUserConfirmBtn');
			this.api.pause(1000);
		},
		getEditUToMess: function(){
			this.api.pause(1500);
			this.getText('@toastMess',function(errorMes){
				this.verify.equal(errorMes.value,'User Preferences updated successfully.')
			});
			this.api.pause(7000);	
		},
		addUserWithPassToFirm : function(firm, client){
			/*this.click('@addUserBtn');
			this.api.pause(1000);
			this.click('@selectFirmBar')
			.setValue('@selectFirmBarSearch',firm);
			this.api.pause(1000);
			this.api.keys(client.Keys.ENTER);*/
			this.waitForElementVisible('@addUserSubmitBtn',2000);
			
			var now = new Date();
			var dateString=(now.getHours()<10 ? '0'+now.getHours().toString() : now.getHours().toString())+''+
			(now.getMinutes()<10 ? '0'+now.getMinutes().toString() : now.getMinutes().toString())+''+
			(now.getSeconds()<10 ? '0'+now.getSeconds().toString() : now.getSeconds().toString())+''+
			(now.getMilliseconds()<10?'00'+now.getMilliseconds().toString():(now.getMilliseconds()<100?'0'+now.getMilliseconds().toString():now.getMilliseconds().toString()));
			
			this.waitForElementVisible('@fnameField',1000)
			.waitForElementVisible('@lnameField',1000)
			.setValue('@fnameField', 'John')
			.setValue('@lnameField','Doe'+dateString)
			.setValue('@emailField',client.globals.email1)
			.click('@genPassBtn');
			
			this.api.pause(1000);
			var description='';
			var username='';
			var password='';
			var creds=[];
			
			this.getValue('@descField',function(result){
				description= result.value;
				var usernameIndex=description.substring(description.indexOf('Username='));
				var passwordIndex=description.substring(description.indexOf('Password='));
				
				username =usernameIndex.substring(9,usernameIndex.indexOf(' Password='));
				password =passwordIndex.substring(9,18);
				console.log("New user created.\nusername: " + username +' and password: '+password);
			});
						
			this.api.pause(1000);
			this.setValue('@workField',123456789)
			.setValue('@mobileField',234567890)
			.click('@voiceYes');
			this.api.pause(1000);
			
			this.click('@addUserSubmitBtn');
			this.waitForElementVisible('@newUserModal',2000)
			.click('@addUserConfirmBtn');
			this.api.pause(1000,function(){
				console.log("New user created.\nusername: " + username +' and password: '+password+' datestring: '+dateString);
			});

			return [dateString, username, password];
			this.api.pause(1000);
			if(callback){
				callback();
				};
			},
			selectLocalRecod : function(client){ 
				this.verify.visible('@localRecording', 'Verified Local Recording checkbox is visible');
				this.click('@localRecording');
				this.api.pause(1000);
			},
			
			LocalRecodDisable : function(){ 
				this.expect.element('@localRecording').to.not.be.enabled;
				this.api.pause(1000);
			},
			inputURIDisable: function(){    		
				this.expect.element('@uri').to.not.be.enabled;
				this.api.pause(1000);
			},
			
			inputURI: function(client, string){    		
				this.clearValue('@uri');
				this.setValue('@uri', string);
				this.api.pause(1000);
			},
			uriDisable: function(){ 
				this.assert.hidden('@uri');
				//this.waitForElementNotVisible('@uri', 1000, 'Verified URI is disable')
				this.api.pause(1000);
			},
			
			getUriToastMess: function(client){
				this.api.pause(1500);
				this.getText('@toastMess',function(errorMes){
					this.verify.equal(errorMes.value,'URI must be provided if Local Recording selected')
				});
				this.api.pause(7000);	
			},
			
			globalRelayEnable: function(client){    		
				this.expect.element('@globalRelay').to.be.enabled;
				this.api.pause(1000);
			},
				
			globalRelayDisable: function(client){    		
				this.expect.element('@globalRelay').to.not.be.enabled;
				this.api.pause(1000);
			},
			
			
		verifyEditUserTxtLevel:function(client){
			
			this.getText('@firmNameTxt',function(usernameText){
				this.verify.equal(usernameText.value,'Firm Name')
			});
			this.getText('@firstNameTxt',function(authIdText){
				this.verify.equal(authIdText.value,'First Name*')
			});
			this.getText('@lastNameTxt',function(authPasswordText){
				this.verify.equal(authPasswordText.value,'Last Name*')
			});
			this.getText('@emailTxt',function(authPasswordText){
				this.verify.equal(authPasswordText.value,'Email*')
			});
			this.getText('@loginUNTxt',function(authPasswordText){
				this.verify.equal(authPasswordText.value,'Login User Name*')
			});
			this.getText('@workTxt',function(authPasswordText){
				this.verify.equal(authPasswordText.value,'Work#')
			});
			this.getText('@mobileTxt',function(authPasswordText){
				this.verify.equal(authPasswordText.value,'Mobile#')
			});
			this.getText('@street1Txt',function(authPasswordText){
				this.verify.equal(authPasswordText.value,'Street 1*')
			});
			this.getText('@street2Txt',function(authPasswordText){
				this.verify.equal(authPasswordText.value,'Street 2')
			});
			this.getText('@countryTxt',function(authPasswordText){
				this.verify.equal(authPasswordText.value,'Country*')
			});
			this.getText('@stateTxt',function(authPasswordText){
				this.verify.equal(authPasswordText.value,'State*')
			});
			this.getText('@cityTxt',function(authPasswordText){
				this.verify.equal(authPasswordText.value,'City*')
			});
			this.getText('@zipTxt',function(authPasswordText){
				this.verify.equal(authPasswordText.value,'Zip*')
				});
			},
				
		verifyUserStngTxtLevel:function(client){
				this.getText('@productTypeTxt',function(providerText){
					this.verify.equal(providerText.value,'Product Type:*')
				});
				this.getText('@voiceRecorTxt',function(usernameText){
					this.verify.equal(usernameText.value,'Voice Recording:*')
				});
				this.getText('@localRTxt',function(authIdText){
					this.verify.equal(authIdText.value,'Local Recording')
				});
				this.getText('@uriTxt',function(authPasswordText){
					this.verify.equal(authPasswordText.value,'URI')
				});
				this.getText('@yesTxt',function(authPasswordText){
					this.verify.equal(authPasswordText.value,'Yes  ')
				});
				this.getText('@noTxt',function(authPasswordText){
					this.verify.equal(authPasswordText.value,'No')
				});
				this.getText('@notAnsTxt',function(authPasswordText){
					this.verify.equal(authPasswordText.value,'Not Answered')
				});
				this.getText('@globalRelayTxt',function(authPasswordText){
					this.verify.equal(authPasswordText.value,'Global Relay Archive URL')
				});
				this.getText('@privacyTxt',function(authPasswordText){
					this.verify.equal(authPasswordText.value,'Privacy')
				});
				this.getText('@restrictTxt',function(authPasswordText){
					this.verify.equal(authPasswordText.value,'Restrict By IP:')
				});
				this.getText('@clickToCallTxt',function(authPasswordText){
					this.verify.equal(authPasswordText.value,'Click to Call')
				});
				this.getText('@globalMuteTxt',function(authPasswordText){
					this.verify.equal(authPasswordText.value,'Global Mute:')
				});
				this.getText('@cancelTxt',function(authPasswordText){
					this.verify.equal(authPasswordText.value,'Cancel')
				});
				this.getText('@editUserTxt',function(authPasswordText){
					this.verify.equal(authPasswordText.value,'Edit User')
				});

		}		
 };

module.exports = {
		commands :[userPageCommands],
		elements: {
			editUserHomePage:{
				selector: '//*[@id="ng-view"]/div/h5',
				locateStrategy: 'xpath'
			},
			selectFirmBar: {
				selector: '//*[@id="ng-view"]/div/div/div/div/a/span',
				locateStrategy: 'xpath'
			},
			selectFirmBarSearch: {
				selector: '//*[@id="ng-view"]/div/div/div/div/div/div/input',
				locateStrategy: 'xpath'
			},
			fnameField: {
				selector: '//*[@id="firstname"]',
				locateStrategy: 'xpath'
			},
			lnameField: {
				selector: '//*[@id="lastname"]',
				locateStrategy: 'xpath'
			},	
			countryDropdown: {
				selector:'//*[@id="country_chosen"]',
				locateStrategy:'xpath'
			},
			countrySearch: {
				selector:'//*[@id="country_chosen"]/div/div/input',
				locateStrategy:'xpath'
			},
			stateDropdown: {
				selector:'//*[@id="state_chosen"]',
				locateStrategy:'xpath'
			},
			stateSearch: {
				selector:'//*[@id="state_chosen"]/div/div/input',
				locateStrategy:'xpath'
			},
			street1: {
				selector: '//*[@id="street1"]',
				locateStrategy: 'xpath'
			},
			street2: {
				selector: '//*[@id="street2"]',
				locateStrategy: 'xpath'
			},
			city: {
				selector: '//*[@id="city"]',
				locateStrategy: 'xpath'
			},
			zip: {
				selector: '//*[@id="zip"]',
				locateStrategy: 'xpath'
			},
			country: {
				selector: '//*[@id="country"]',
				locateStrategy: 'xpath'
			},
			state: {
				selector: '//*[@id="state"]',
				locateStrategy: 'xpath'
			},
			
			firmName: '#firmName',
			emailField: '#email',
			username: '#username',
			genPassBtn: '#genpassword',
			workField: '#work',
			mobileField: '#mobile',
			passField1: {
				selector: '//*[@id="password"]',
				locateStrategy: 'xpath'
			},
			passField2: {
				selector: '//*[@id="verpassword"]',
				locateStrategy: 'xpath'
			},
			descField: '#description',
			
			addToUserEmail:{
				selector: '//*[@id="appendToUserEmail"]',
				locateStrategy: 'xpath'
			},
			voiceYes: {
				selector: '//*[@id="voiceRecordingYes"]',
				locateStrategy: 'xpath'
			},
			voiceNo: {
				selector: '//*[@id="voiceRecordingNo"]',
				locateStrategy: 'xpath'
			},
			localRecording:{
				selector: '//*[@id="userdata"]/div[2]/div[6]/div[2]/input',
				locateStrategy: 'xpath'
			},
			uri:{
				selector: '//*[@id="userdata"]/div[2]/div[6]/div[3]/input',
				locateStrategy: 'xpath'
			},
			globalRelay:{
				selector: '//*[@id="grArchive"]',
				locateStrategy: 'xpath'
			},		
			c2cCheckbox:{
				selector: '//*[@id="monitoring"]',
				locateStrategy: 'xpath'
			},
			addUserSubmitBtn: {
				selector: '//*[@id="adduserdata"]/div[2]/button[2]',
				locateStrategy: 'xpath'
			},
			addUserConfirmBtn:{
				selector: '//*[@id="adduserConfirmedButton"]',
				locateStrategy: 'xpath'
			},
			editUserSave:{
				selector: '//*[@id="userdata"]/div[3]/button[2]',
				locateStrategy: 'xpath'
			},
			editUserConfirmBtn:{
				selector: '//*[@id="userdata"]/div[3]/button[2]',
				locateStrategy: 'xpath'
			},
			newUserModal:{
				selector: '//*[@id="userConfirmModal"]/div[2]',
				locateStrategy: 'xpath'
			},
			toastMess:{
				selector: '//div[@class="toast-message"]',
				locateStrategy:'xpath'
			},
			firmNameTxt:{
				selector: '//*[@id="userdata"]/div[1]/div/label', 
				locateStrategy: 'xpath'
			},
			firstNameTxt:{
				selector: '//*[@id="userdata"]/div[2]/div[1]/div/div[1]/label', 
				locateStrategy: 'xpath'
			},
			lastNameTxt:{
				selector: '//*[@id="userdata"]/div[2]/div[1]/div/div[2]/label',  
				locateStrategy: 'xpath'
			},
			emailTxt:{
				selector: '//*[@id="userdata"]/div[2]/div[1]/div/div[3]/label', 
				locateStrategy: 'xpath'
			},
			loginUNTxt:{
				selector: '//*[@id="userdata"]/div[2]/div[2]/div/div[1]/label',  
				locateStrategy: 'xpath'
			},
			workTxt:{
				selector: '//*[@id="userdata"]/div[2]/div[2]/div/div[2]/label', 
				locateStrategy: 'xpath'
			},
			mobileTxt:{
				selector: '//*[@id="userdata"]/div[2]/div[2]/div/div[3]/label',  
				locateStrategy: 'xpath'
			},
			street1Txt:{
				selector: '//*[@id="userdata"]/div[2]/div[3]/div/div[1]/label',  
				locateStrategy: 'xpath'
			},
			street2Txt:{
				selector: '//*[@id="userdata"]/div[2]/div[3]/div/div[2]/label',  
				locateStrategy: 'xpath'
			},
			countryTxt:{
				selector: '//*[@id="userdata"]/div[2]/div[4]/div/div[1]/label',  
				locateStrategy: 'xpath'
			},
			stateTxt:{
				selector: '//*[@id="userdata"]/div[2]/div[4]/div/div[2]/label', 
				locateStrategy: 'xpath'
			},
			cityTxt:{
				selector: '//*[@id="userdata"]/div[2]/div[4]/div/div[3]/label',  
				locateStrategy: 'xpath'
			},
			zipTxt:{
				selector: '//*[@id="userdata"]/div[2]/div[4]/div/div[4]/label',  
				locateStrategy: 'xpath'
			},
			productTypeTxt:{
				selector: '//*[@id="appType"]', 
				locateStrategy: 'xpath'
			},
			voiceRecorTxt:{
				selector: '//*[@id="recordingRadio"]',  
				locateStrategy: 'xpath'
			},
			localRTxt:{
				selector: '//*[@id="userdata"]/div[2]/div[6]/div[2]/label', 
				locateStrategy: 'xpath'
			},
			uriTxt:{
				selector: '//*[@id="userdata"]/div[2]/div[6]/div[3]/label', 
				locateStrategy: 'xpath'
			},
			yesTxt:{
				selector: '//*[@id="userdata"]/div[2]/div[6]/div[1]/label[2]',    
				locateStrategy: 'xpath'
			},
			noTxt:{
				selector: '//*[@id="userdata"]/div[2]/div[6]/div[1]/label[3]',  
				locateStrategy: 'xpath'
			},
			notAnsTxt:{
				selector: '//*[@id="userdata"]/div[2]/div[6]/div[1]/label[4]', 
				locateStrategy: 'xpath'
			},
			
			globalRelayTxt:{
				selector: '//*[@id="grArchiveDiv"]/label', 
				locateStrategy: 'xpath'
			},
			privacyTxt:{
				selector: '//*[@id="userdata"]/div[2]/div[7]/div[2]/label', 
				locateStrategy: 'xpath'
			},
			restrictTxt:{
				selector: '//*[@id="restrictRadio"]',
				locateStrategy: 'xpath'
			},
			clickToCallTxt:{
				selector: '//*[@id="userdata"]/div[2]/div[7]/div[4]/label',  
				locateStrategy: 'xpath'
			},
			globalMuteTxt:{
				selector: '//*[@id="muteRadio"]',  
				locateStrategy: 'xpath'
			},
			cancelTxt:{
				selector: '//*[@id="userdata"]/div[3]/button[1]',  
				locateStrategy: 'xpath'
			},
			editUserTxt:{
				selector: '//*[@id="userdata"]/div[3]/button[2]',  
				locateStrategy: 'xpath'
			},
			
		}
}
