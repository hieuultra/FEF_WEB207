window.EditController = function ($scope, $http, $routeParams, $location) {
  var apiUrl = "http://localhost:3000/product";
  var editId = $routeParams.id; //lay id tren orl

  //lay data do vao form
  $scope.getProInfor = function () {
    $http
      .get(`${apiUrl}/${editId}`)
      .then(function (response) {
        if (response.status === 200) {
          $scope.pro = response.data;
          $scope.inputValue = {
            name: response.data.name,
            description: response.data.description,
            price: response.data.price,
          };
        }
      })
      .catch(function (error) {
        $scope.mess = `${error.statusText} pro with id ${editId}`;
      });
  };
  $scope.getProInfor();

  $scope.kiemTraDuLieu = {
    name: false,
    description: false,
    price: false,
  };
  //edit
  $scope.onEditForm = function () {
    let flag = false;
    if (!$scope.inputValue || !$scope.inputValue.name) {
      $scope.kiemTraDuLieu.name = true;
      flag = true;
    }
    if (!$scope.inputValue || !$scope.inputValue.description) {
      $scope.kiemTraDuLieu.description = true;
      flag = true;
    }
    if (!$scope.inputValue || !$scope.inputValue.price) {
      $scope.kiemTraDuLieu.price = true;
      flag = true;
    }
    if (!flag) {
      var editItem = {
        ...$scope.inputValue,
      };
      $http.put(`${apiUrl}/${editId}`, editItem).then(function (response) {
        if (response.status === 200) {
          $location.path("list");
        }
      });
    }
  };
};
