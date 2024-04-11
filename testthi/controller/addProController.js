window.addProController = function ($scope, $http, $location) {
  var apiUrl = "http://localhost:3000/products";

  $scope.check = {
    ma_sp: false,
    ten: false,
    loai: false,
    gia: false,
  };
  $scope.add = function () {
    let flag = false;
    if (!$scope.inputValue || !$scope.inputValue.ma_sp) {
      $scope.check.ma_sp = true;
      flag = true;
    }
    if (!$scope.inputValue || !$scope.inputValue.ten) {
      $scope.check.ten = true;
      flag = true;
    }
    if (!$scope.inputValue || !$scope.inputValue.loai) {
      $scope.check.loai = true;
      flag = true;
    }
    if (
      !$scope.inputValue ||
      !$scope.inputValue.gia ||
      !/^\d+$/.test($scope.inputValue.gia) ||
      parseInt($scope.inputValue.gia) <= 100
    ) {
      $scope.check.gia = true;
      flag = true;
    }
    if (!flag) {
      var newItem = {
        ...$scope.inputValue,
      };
      $http.post(apiUrl, newItem).then(function (response) {
        if (response.status == 201) {
          $location.path("/products/list-product");
        }
      });
    }
  };
};
