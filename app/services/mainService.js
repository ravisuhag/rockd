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

bigrock.factory('Search', ['$scope',
  function($scope) {

    var Search = function(data) {
      angular.extend(this, data);
    };

    Search.extensions = [];


}]);
