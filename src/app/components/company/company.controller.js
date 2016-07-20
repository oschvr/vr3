(function() {
	'use strict';

	angular
		.module('vr3io')
		.controller('CompanyController', CompanyController);

		function CompanyController($http){
			var company = this;
			
			company.sendMessage = sendMessage;

			function sendMessage(){
				alert('MESSAGE-SENT');
			}

			company.sendAnotherMessage = function(){
				alert('ANOTHER MESSAGE');
			}

		}
})();