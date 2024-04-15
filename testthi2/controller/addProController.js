window.addProController = function ($scope, $http, $location) {
  var api = "http://localhost:3000/products";

  $scope.check = {
    name: false,
    brand: false,
    price: false,
  };

  $scope.add = function () {
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
      var newItem = {
        ...$scope.inputValue,
      };
      $http.post(api, newItem).then(function (response) {
        if (response.status == 201) {
          $location.path("/products/list");
        }
      });
    }
  };
};
