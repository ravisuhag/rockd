// bigrock.factory('Domains', ['$scope',
//   function($scope) {

//     var Domains = function(data) {
//       angular.extend(this, data);
//     };

//     Domains.available = [
//       {
//         'name': 'geekfunnel',
//         'type': '.com'
//       },
//       {
//         'name': 'inspirationedge',
//         'type': '.net'
//       },
//       {
//         'name': 'ravisuhag',
//         'type': '.net'
//       }
//     ];


// }]);

bigrock.factory('Search', ['$http',
  function($http) {
    var Search = function(data) {
      angular.extend(this, data);
    };

    Search.text= "";

    return Search;
  }
]);
