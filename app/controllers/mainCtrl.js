bigrock.controller('homeCtrl', ['$scope', '$location', 'Search',
  function($scope, $location, Search) {

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



}]);
