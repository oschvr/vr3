(function() {
	'use strict';

	angular
		.module('vr3io')
		.controller('CompanyController', CompanyController);

		function CompanyController($log){
			//Community Controller (Jobs, Karma, Privacy, Project, Team, TOS)
			var vm = this;
			
			vm.getCompanyInfo = function(){
				$log.debug('VR3 Web/VR Video Infraestructure | VR3.io | info@vr3.io | @vr3io');
			};

			vm.getCompanyInfo();

		}

})();