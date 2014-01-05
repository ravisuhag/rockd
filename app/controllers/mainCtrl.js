bigrock.controller('homeCtrl', ['$scope', '$location', 'Search','Cart',
  function($scope, $location, Search, Cart) {

    $scope.welcome = "Hello to Big Rock";
    $scope.search = Search;

    angular.element('.selectpicker').selectpicker();

    $('.dropdown-menu').on('click', function(e) {
      if ($(this).hasClass('dropdown-menu-form')) {
        e.stopPropagation();

      }
    });



    $scope.formsubmit = function() {
      $location.path('/search');

    };

    $scope.$watch(function() {
      console.log("watch");
      if ($scope.search.text === '') {
        $scope.nosearch = true;
      } else {
        $scope.nosearch = false;
      }
    });

    $scope.isLogin= false;
    $scope.login= function(){
      $scope.isLogin= !$scope.isLogin;
      console.log(isLogin);
    };

    $scope.isUser= true;
     $scope.user= function(){
      $scope.isUser= !$scope.isUser;
    };


}]);
