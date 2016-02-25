var loginCommand = {
		adminLogin: function(client){
			return this.setValue('@usernameField',client.globals.adminUsername)
			.setValue('@passwordField', client.globals.adminPassword)
			.click('@submitButton')
			.waitForElementVisible('@alert',2000)
			.assert.containsText('div.modal-header', '**WARNING**')
			.click('@okButton');
			
		}
};

module.exports = {
		commands :[loginCommand],
		elements: {
			usernameField:{
				selector: 'input[name=username]'
			},
			passwordField:{
				selector: 'input[name=password]'
			},
			submitButton: {
				selector: 'button[type=submit]'
			},
			alert:{
				selector: 'div.modal-dialog'
			},
			okButton:{
				selector: "(//button[@type='button'])[4]",
				locateStrategy: 'xpath'
			}
		}
}