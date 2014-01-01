bigrock.factory('Domains', ['$scope',
  function($scope) {

    var Domains = function(data) {
      angular.extend(this, data);
    };

    Domains.available = [
      {
        'name': 'geekfunnel',
        'type': '.com'
      },
      {
        'name': 'inspirationedge',
        'type': '.net'
      },
      {
        'name': 'ravisuhag',
        'type': '.net'
      }
    ];


}]);
