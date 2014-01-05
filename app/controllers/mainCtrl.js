bigrock.controller('homeCtrl', ['$scope',
  function($scope) {

    $scope.welcome = "Hello to Big Rock";

    angular.element('.selectpicker').selectpicker();

    $scope.formsubmit = function() {
      console.log("calling ucntuon");
    };

    $('.dropdown-menu').on('click', function(e) {
      if ($(this).hasClass('dropdown-menu-form')) {
        e.stopPropagation();
      }
    });

}]);
