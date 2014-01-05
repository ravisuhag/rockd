bigrock.factory('Cart', ['$http',
  function($http) {

    var Cart = function(data) {
      angular.extend(this, data);
    };

    Cart.domains = [
      
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
