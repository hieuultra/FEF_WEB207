window.AddController = function ($scope, $http, $location) {
  var apiUrl = "http://localhost:3000/product";

  $scope.kiemTraDuLieu = {
    name: false,
    description: false,
    price: false,
  };
  $scope.onSubmitForm = function () {
    let flag = false;
    if (!$scope.inputValue || !$scope.inputValue.name) {
      //nếu không có inputValue hoặc không có name
      $scope.kiemTraDuLieu.name = true;
      flag = true;
    }
    if (!$scope.inputValue || !$scope.inputValue.description) {
      //nếu không có inputValue hoặc không có des
      $scope.kiemTraDuLieu.description = true;
      flag = true;
    }
    if (!$scope.inputValue || !$scope.inputValue.price) {
      //nếu không có inputValue hoặc không có price
      $scope.kiemTraDuLieu.price = true;
      flag = true;
    }

    if (!flag) {
      // nếu flag = false, tức là không có lỗi thì chạy api edit
      //tao ra obj item moi de add vao
      var newItem = {
        ...$scope.inputValue,
      };
      $http.post(apiUrl, newItem).then(function (response) {
        console.log(response);
        if (response.status == 201) {
          $location.path("list");
        }
      });
    }
  };
};
