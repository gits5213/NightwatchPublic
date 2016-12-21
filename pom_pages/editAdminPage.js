var userAdminCommands = {
		saveConfirm: function(client){
			this.verify.visible('@saveBtn', 'Verified Save button is visible');
			this.click('@saveBtn');
			this.api.pause(500);
		},
		adminLevelToastMess:function(){
			this.api.pause(1500);
			this.getText('@toastMess',function(errorMes){
				this.verify.equal(errorMes.value,'Admin level changed successfully.')
			});
			this.api.pause(7000);
			this.assert.urlContains('#/users');
		},
		setToNone:function(client){
			client.pause(1000);
			this.click('@adminPriv')
			this.setValue('@adminPriv','none');
			this.api.keys(client.Keys.ENTER);
			this.api.pause(1000);
			this.clearValue('@allowedIp');
			this.clearValue('@mobile');
			this.api.pause(2000);
		},
		setToAdmin:function(client){
			client.pause(1000);
			this.click('@adminPriv')
			this.api.pause(500)
			this.setValue('@adminPriv','Firm Administrator 2');
			this.api.pause(500)
			this.api.keys(client.Keys.ENTER);
			this.api.pause(1000)
			this.click('@tfa_No')
			.clearValue('@allowedIp')
			.setValue('@allowedIp',client.globals.ip)
			this.api.pause(2000);
		},
		setToAdmin2:function(client){
			this.api.pause(1000)
			this.click('@adminPriv');
			this.api.pause(500);
			this.setValue('@adminPriv','Firm Administrator 2');
			this.api.pause(500);
			this.api.keys(client.Keys.ENTER);
			this.api.pause(1000);
			this.click('@tfa_No')
			.clearValue('@allowedIp')
			.setValue('@allowedIp',client.globals.ip);
			this.api.pause(2000);
		},
		setToAdmin1:function(client){
			client.pause(1000);
			this.click('@adminPriv')
			this.api.pause(500);
			this.setValue('@adminPriv','Firm Administrator 1');
			this.api.pause(500)
			this.api.keys(client.Keys.ENTER);
			this.api.pause(1000)
			this.click('@tfa_No')
			.clearValue('@allowedIp')
			.setValue('@allowedIp',client.globals.ip)
			this.api.pause(2000);
		},
		setToCompliance:function(client){
			client.pause(1000);
			this.click('@adminPriv')
			this.api.pause(500);
			this.setValue('@adminPriv','Compliance recording access only');
			this.api.pause(500)
			this.api.keys(client.Keys.ENTER);
			this.api.pause(1000)
			this.click('@tfa_No')
			.clearValue('@allowedIp')
			.setValue('@allowedIp',client.globals.ip)
		    this.api.pause(2000);			
		},
		setToUser3:function(client){
			client.pause(1000);
			this.click('@adminPriv')
			this.api.pause(500)
			this.setValue('@adminPriv','User Level 3');
			this.api.pause(500)
			this.api.keys(client.Keys.ENTER);
			this.api.pause(1000)
			this.click('@tfa_No')
			.clearValue('@allowedIp')
			.setValue('@allowedIp',client.globals.ip)
			this.api.pause(2000);
		},
		setToSales:function(client){
			client.pause(1000);
			this.click('@adminPriv')
			this.api.pause(500)
			this.setValue('@adminPriv','Cloud9 Sales');
			this.api.pause(500)
			this.api.keys(client.Keys.ENTER);
			this.api.pause(1000)
			this.click('@tfa_No')
			.clearValue('@allowedIp')
			.setValue('@allowedIp',client.globals.ip)
			this.api.pause(2000);
		}
};

module.exports = {
		commands :[userAdminCommands],
		elements: {
			pageTitle:{
				selector: '//*[@id="ng-view"]/div/h5',
				locateStrategy: 'xpath'
			},
			firmName:{
				selector: '//*[@id="firmName"]',
				locateStrategy:'xpath'				
			},
			firstName:{
				selector: '//*[@id="firstname"]',
				locateStrategy: 'xpath'
			},
			lastName:{
				selector: '//*[@id="lastname"]',
				locateStrategy: 'xpath'
			},
			adminPriv:{
				selector: '//*[@id="privilege"]',
				locateStrategy: 'xpath'
			},
			allowedIp:{
				selector: '//*[@id="allowedIP"]',
				locateStrategy: 'xpath'
			},
			mobile:{
				selector: '//*[@id="mobile"]',
				locateStrategy: 'xpath'
			},
			tfa_Yes:{
				selector: '//*[@id="tfEnableYes"]',
				locateStrategy:'xpath'
			},
			tfa_No:{
				selector: '//*[@id="tfEnableNo"]',
				locateStrategy: 'xpath'
			},
			saveBtn:{
				selector: '//*[@id="useradmindata"]/div[6]/button[2]',
				locateStrategy: 'xpath'
			},
			noneValue:{
				selector: '//*[@id="privilege"]/option[1]',
				locateStrategy: 'xpath'
			},
			admin2Value:{
				selector: '//*[@id="privilege"]/option[2]',
				locateStrategy: 'xpath'
			},
			
			admin1Value:{
				selector: '//*[@id="privilege"]/option[3]',
				locateStrategy: 'xpath'
			},
			complianceValue:{
				selector:'//*[@id="privilege"]/option[4]',
				locateStrategy:'xpath'
			},
			user3Value:{
				selector:'//*[@id="privilege"]/option[5]',
				locateStrategy:'xpath'
			},
			salesValue:{
				selector:'//*[@id="privilege"]/option[6]',
				locateStrategy:'xpath'
			},
			toastMess:{
				selector: '//div[@class="toast-message"]',
				locateStrategy:'xpath'
			}
			
		}
}