var reportTabPageCommands = {
		c9reports: function(client){
			this.waitForElementVisible('@reportTab',2000, false);
			this.click('@reportTab');
		},			
		selectFirm: function(client){
			this.waitForElementVisible('@selectFirm',2000, false);
			this.api.pause(2000);
			this.click('@selectFirm');	
			this.api.pause(1000);
			this.click('@SelectFirmSearch');		
			this.clearValue('@SelectFirmSearch');
			this.api.pause(1000);
			this.setValue('@SelectFirmSearch',' ');  
			this.api.keys(client.Keys.DOWN_ARROW);
			this.api.keys(client.Keys.ENTER);
			this.api.pause(500);				
		},
			
		cloud9Usage: function(client){
			this.expect.element('@cloud9Usage').to.be.visible;
			this.expect.element('@cloud9Usage').text.to.contain('Cloud9 Usage').before(500);
						
			this.api.pause(1000);
			this.expect.element('@cloud9Usage_dropDown').to.be.visible;
			this.setValue('@cloud9Usage_dropDown','');
			this.api.keys(client.Keys.DOWN_ARROW);
			this.api.keys(client.Keys.ENTER);
			this.api.pause(1000);
		},	
		
		userButtonRport: function(client){
			//User Button Report Validation
			
			//this.expect.element('@userButtonReport_Button_Validation').to.be.visible;
			this.waitForElementVisible('@userButtonReport_Button_Validation',2000, 'Verified user button Report visible ')
			this.expect.element('@userButtonReport_Button_Validation').text.to.contain('Button #').before(500);
			this.expect.element('@userButtonReport_Counterparty_Validation').to.be.visible;
			this.expect.element('@userButtonReport_Counterparty_Validation').text.to.contain('Counterparty').before(500);
			this.expect.element('@userButtonReport_Traders_Validation').to.be.visible;
			this.expect.element('@userButtonReport_Traders_Validation').text.to.contain('Trader(s)').before(500);
			this.expect.element('@userButtonReport_City_Validation').to.be.visible;
			this.expect.element('@userButtonReport_City_Validation').text.to.contain('City').before(500);
			this.expect.element('@userButtonReport_State_Validation').to.be.visible;
			this.expect.element('@userButtonReport_State_Validation').text.to.contain('State').before(500);
			this.getText('@userButtonReport_State_Validation', function(getText){
				console.log("Text cointains: " + getText.value);	
			});
		},
		
		firmButtonReport: function(client){
			this.waitForElementVisible('@firmButtonReport',2000, false);
			this.click('@firmButtonReport');
			
			//Firm Button Report Export Table Header
			this.waitForElementVisible('@firmButtonReport_validation',3000, false);
			this.expect.element('@firmButtonReport_validation').to.be.visible;
			this.expect.element('@firmButtonReport_validation').text.to.contain('Firm Button Report').before(500);
			this.expect.element('@tableHeader_FirmName_Validation').to.be.visible;
			this.expect.element('@tableHeader_FirmName_Validation').text.to.contain('Firm Name').before(500);
			this.expect.element('@tableHeader_Username_Validation').to.be.visible;
			this.expect.element('@tableHeader_Username_Validation').text.to.contain('Username').before(500);
			this.expect.element('@tableHeader_ButtonName_Validation').to.be.visible;
			this.expect.element('@tableHeader_ButtonName_Validation').text.to.contain('Button Name').before(500);
			this.expect.element('@tableHeader_FarEndFirm_Validation').to.be.visible;
			this.expect.element('@tableHeader_FarEndFirm_Validation').text.to.contain('Far End Firm').before(500);
			this.expect.element('@tableHeader_FarEndUsers_Validation').to.be.visible;
			this.expect.element('@tableHeader_FarEndUsers_Validation').text.to.contain('Far End Users').before(500);
			this.assert.containsText('@tableHeader_FarEndUsers_Validation', 'Far End Users');
			this.getText('@tableHeader_FarEndUsers_Validation', function(getText){
				console.log("Text cointains: " + getText.value);	
			});
			
			//Firm Button Report Export Table Data
			this.waitForElementVisible('@firmButtonReport_ExportTableData',2000, false);
			this.expect.element('@firmButtonReport_ExportTableData').text.to.contain('Export Table Data').before(500);
			//this.click('@firmButtonReport_ExportTableData');
		},	
		
		weekButton: function(){
			//Week 
			this.waitForElementVisible('@weekButton',2000, false);
			this.expect.element('@weekButton').text.to.contain('Week').before(500);
			this.click('@weekButton');
			
			this.waitForElementVisible('@modalHeader_WeekCalender',2000, false);
			this.expect.element('@modalHeader_WeekCalender').text.to.contain('Select Week').before(500);
		
			this.waitForElementVisible('@modalOk_WeekCalender',2000, false);
			this.expect.element('@modalOk_WeekCalender').text.to.contain('OK').before(500);
			this.click('@modalOk_WeekCalender');
			this.api.pause(3000);
		},
		
		monthButton: function(){
		
			//Month
			this.waitForElementVisible('@monthButton',2000, false);
			this.expect.element('@monthButton').text.to.contain('Month').before(500);
			this.click('@monthButton');
			
			this.waitForElementVisible('@modalHeader_MonthCalender',500, false);
			this.expect.element('@modalHeader_MonthCalender').text.to.contain('Select Month').before(500);
		
			this.waitForElementVisible('@modalOk_MonthCalender',500, false);
			this.expect.element('@modalOk_MonthCalender').text.to.contain('OK').before(500);
			this.click('@modalOk_MonthCalender');
			
			//Export Graph Data
			this.waitForElementVisible('@Week_Month_ExportGraphData',5000, false);
			this.expect.element('@Week_Month_ExportGraphData').text.to.contain('Export Graph Data').before(500);
			//this.click('@Week_Month_ExportGraphData');
			this.getText('@Week_Month_ExportGraphData', function(getText){
				console.log("Text cointains: " + getText.value);	
			});
			this.api.pause(3000);
		},
		//
		portalReportsTab: function(client){
			this.verify.visible('@reportsTab', 'Verified Reports tab button is visible and clikable');	
		}
			
	};

module.exports = {
		commands :[reportTabPageCommands],
		elements: {
			reportTab:{
				selector: '//span[contains(.,"Reports")]',	
				locateStrategy: 'xpath'
			},
			
			pTT_GraphHeader_Validation:{
				selector: '//*[@id="highcharts-0"]/svg/text[1]/tspan', 
				locateStrategy: 'xpath'
			},
			
			selectFirm:{
				selector: '//*[@id="reportFirmContainer"]/div/div/div/a/span',    
				locateStrategy: 'xpath'
			},	
			
			SelectFirmSearch:{
				selector: '//input[contains(@autocomplete,"off")]',
				locateStrategy: 'xpath'
			},
		
			cloud9Usage:{
				selector: '//span[contains(.,"Cloud9 Usage")]',
				locateStrategy: 'xpath'
			},
						
			cloud9Usage_dropDown:{
				selector: '//select[contains(@id,"grArchive")]',
				locateStrategy: 'xpath'
			},
			
			userButtonReport_Button_Validation:{
				selector: '//*[@id="scrollable-area"]/table/tbody/tr/th[1]',
				locateStrategy: 'xpath'
			},
			userButtonReport_Counterparty_Validation:{
				selector: '//*[@id="scrollable-area"]/table/tbody/tr/th[2]',
				locateStrategy: 'xpath'
			},
			userButtonReport_Traders_Validation:{
				selector: '//*[@id="scrollable-area"]/table/tbody/tr/th[3]',
				locateStrategy: 'xpath'
			},
			userButtonReport_City_Validation:{
				selector: '//*[@id="scrollable-area"]/table/tbody/tr/th[4]',
				locateStrategy: 'xpath'
			},
			userButtonReport_State_Validation:{
				selector: '//*[@id="scrollable-area"]/table/tbody/tr/th[5]',
				locateStrategy: 'xpath'
			},
					
			firmButtonReport:{
				selector: '//li[contains(.,"Firm Button Report")]',
				locateStrategy: 'xpath'
			},
					
			firmButtonReport_validation: {
				selector: '//h2[contains(.,"Firm Button Report")]',
				locateStrategy: 'xpath'
			},
						
			tableHeader_FirmName_Validation: {
				selector: '//*[@id="scrollable-area"]/table/tbody/tr/th[1]',
				locateStrategy: 'xpath'
			},
				
			tableHeader_Username_Validation : {
				selector: '//*[@id="scrollable-area"]/table/tbody/tr/th[2]',
				locateStrategy: 'xpath'
			},
			
			tableHeader_ButtonName_Validation : {
				selector: '//*[@id="scrollable-area"]/table/tbody/tr/th[3]',
				locateStrategy: 'xpath'
			},
		
			tableHeader_FarEndFirm_Validation : {
				selector: '//*[@id="scrollable-area"]/table/tbody/tr/th[4]',
				locateStrategy: 'xpath'
			},
			
			tableHeader_FarEndUsers_Validation : {
				selector: '//*[@id="scrollable-area"]/table/tbody/tr/th[5]',
				locateStrategy: 'xpath'
			},
				
			firmButtonReport_ExportTableData : {
				selector: '//*[@id="firmButtonReport"]/div[1]/li/span',
				locateStrategy: 'xpath'
			},

			weekButton :{
				selector : '//*[@id="week"]/span',
				locateStrategy: 'xpath'
			},
			
			modalHeader_WeekCalender :{
				selector : '//*[@id="selectWeekModal"]/div[2]/div/div[1]/h3',
				locateStrategy: 'xpath'
			},
			
			modalOk_WeekCalender :{
				selector : '//*[@id="selectWeekModal"]/div[2]/div/div[3]/button[2]',
				locateStrategy: 'xpath'
			},

			monthButton :{
				selector : '//*[@id="month"]/span',
				locateStrategy: 'xpath'
			},
			
			modalHeader_MonthCalender :{
				selector : '//*[@id="selectMonthModal"]/div[2]/div/div[1]/h3',
				locateStrategy: 'xpath'
			},
			
			modalOk_MonthCalender :{
				selector : '//*[@id="selectMonthModal"]/div[2]/div/div[3]/button[2]',
				locateStrategy: 'xpath'
			},
			
			Week_Month_ExportGraphData :{
				selector : '//*[@id="graphExport"]/span',
				locateStrategy: 'xpath'
			},
			//
			reportsTab:{
				selector: '//*[@id="reportsNav"]/h4/span',
				locateStrategy: 'xpath'
			},
			reportsHomePage:{
				selector: '//*[@id="defaultUsage"]',
				locateStrategy: 'xpath'
			}
			//
			
		}
}
