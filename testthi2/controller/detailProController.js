window.detailProController = function ($scope, $http, $routeParams, $location) {
  var api = "http://localhost:3000/products";
  var detailId = $routeParams.id;

  $scope.getDetail = function () {
    $http.get(`${api}/${detailId}`).then(function (response) {
      if (response.status == 200) {
        $scope.pro = response.data;
        $scope.inputValue = {
          id: response.data.id,
          name: response.data.name,
          brand: response.data.brand,
          price: response.data.price,
        };
      }
    });
  };
  $scope.getDetail();

  $scope.onEdit = function (id) {
    $location.path(`/products/edit/${id}`);
  };
};
