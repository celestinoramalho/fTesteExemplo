/**
 * Useful directives 
 * 
 * @author cramalho
 */


angular.module('first.UI').directive('fTesteExemplo', function() {

	return {
		restrict: 'E',
		templateUrl: 'scripts/directives/templates/fTesteExemplo.html',
		scope : { 
			data : '='
		}, 
		replace : true,
		transclude : false,
		controller : controller
	};

	function controller($scope, $attrs, $log) {
		//$log.debug("fTable controller");
		
    };
		
		
		
		
	
});
