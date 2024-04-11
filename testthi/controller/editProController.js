window.editProController = function ($scope, $http, $routeParams, $location) {
  var apiUrl = "http://localhost:3000/products";
  var editId = $routeParams.id;
  $scope.edit = function () {
    $http
      .get(`${apiUrl}/${editId}`)
      .then(function (response) {
        if (response.status === 200) {
          $scope.pro = response.data;
          $scope.inputValue = {
            ma_sp: response.data.ma_sp,
            ten: response.data.ten,
            loai: response.data.loai,
            gia: response.data.gia,
          };
        }
      })
      .catch(function (error) {
        $scope.mess = `${error.statusText} pro with id ${editId}`;
      });
  };
  $scope.edit();
  $scope.check = {
    ma_sp: false,
    ten: false,
    loai: false,
    gia: false,
  };
  $scope.editForm = function () {
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
    if (!$scope.inputValue || !$scope.inputValue.gia) {
      $scope.check.gia = true;
      flag = true;
    }
    if (!flag) {
      var editItem = {
        ...$scope.inputValue,
      };
      $http.put(`${apiUrl}/${editId}`, editItem).then(function (response) {
        if (response.status == 200) {
          $location.path("/products/list-product");
        }
      });
    }
  };
};
