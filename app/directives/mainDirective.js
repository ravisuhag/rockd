bigrock.directive('extension', function() {
  return {
    restrict: 'AE',
    controller: ['$scope', '$http', function($scope, $http) {

      console.log("in directive");

    }],
    link: function(scope, el, iAttrs, ctrl) {
       el.bind('click', function() {
        angular.element(el).toggleClass( "active" );

       });
      
    }
  };
});