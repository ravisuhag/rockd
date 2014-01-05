bigrock.directive('extension', function(Search) {
  return {
    restrict: 'AE',
    replace: true,
    controller: ['$scope', '$http','Search', function($scope, $http, Search) {

      console.log("in directive");
      $scope.updateExtensions= function(txt){

        if(Search.extensions[txt]=== true){
          console.log("hjhjh");
          Search.extensions[txt]= false;
        }
        else{
          Search.extensions[txt]= true;
        }
      };

    }],
    link: function(scope, el, iAttrs, ctrl) {
       el.bind('click', function() {
        angular.element(el).toggleClass( "active" );

        scope.updateExtensions(el.text());
       });
      
    }
  };
});