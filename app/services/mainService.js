bigrock.factory('Domains', ['$http',
  function($http) {

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

bigrock.factory('Search', ['$http',
  function($http) {
    var Search = function(data) {
      angular.extend(this, data);
    };

    Search.text = "";
    Search.extensions = {
        'net': false,
        'com': false,
        'org': false,
        'biz': false,
        'in': false,
        'pw': false,
        'me': false,
        'co': false,
        'info': false,
        'name': false,
        'mobi': false,
        'tv': false,
        'ws': false,
        'bz': false,
        'cc': false
    };

    return Search;
  }
]);
