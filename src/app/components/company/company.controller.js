(function() {
	'use strict';

	angular
		.module('vr3io')
		.controller('CompanyController', CompanyController);

<<<<<<< HEAD
		function CompanyController($log){
			//Community Controller (Jobs, Karma, Privacy, Project, Team, TOS)
			var vm = this;
			
			vm.getCompanyInfo = function(){
				$log.debug('info@vr3.io');
			};

			vm.getCompanyInfo();
=======
		function CompanyController(){
			var company = this;
>>>>>>> 0d319ee40bb934e9bd93b1e59cce0e71392640c1

		}
})();