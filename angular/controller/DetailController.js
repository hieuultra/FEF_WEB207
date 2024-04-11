window.DetailController = function ($scope, $http, $routeParams, $location) {
  var apiUrl = "http://localhost:3000/product";
  var id = $routeParams.id;

  $scope.getDetail = function () {
    $http.get(`${apiUrl}/${id}`).then(function (response) {
      if (response.status === 200) {
        $scope.pro = response.data;
      }
    });
  };
  $scope.getDetail();
};
