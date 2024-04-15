window.editProController = function ($scope, $http, $routeParams, $location) {
  var api = "http://localhost:3000/products";
  var editId = $routeParams.id;

  $scope.edit = function () {
    $http.get(`${api}/${editId}`).then(function (response) {
      if (response.status === 200) {
        $scope.pro = response.data;
        $scope.inputValue = {
          name: response.data.name,
          brand: response.data.brand,
          price: response.data.price,
        };
      }
    });
  };
  $scope.edit();

  $scope.check = {
    name: false,
    brand: false,
    price: false,
  };

  $scope.editForm = function () {
    let flag = false;
    if (!$scope.inputValue || !$scope.inputValue.name) {
      $scope.check.name = true;
      flag = true;
    }
    if (!$scope.inputValue || !$scope.inputValue.brand) {
      $scope.check.brand = true;
      flag = true;
    }
    if (
      !$scope.inputValue ||
      !$scope.inputValue.price ||
      !/^\d+$/.test($scope.inputValue.price) ||
      parseInt($scope.inputValue.price) <= 100
    ) {
      $scope.check.price = true;
      flag = true;
    }
    if (!flag) {
      var editItem = {
        ...$scope.inputValue,
      };
      $http.put(`${api}/${editId}`, editItem).then(function (response) {
        if (response.status == 200) {
          $location.path("/products/list");
        }
      });
    }
  };
};
