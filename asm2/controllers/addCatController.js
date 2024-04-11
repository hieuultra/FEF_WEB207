window.addCatController = function ($scope, $http, $location) {
  var apiUrl = "http://localhost:3000/category";

  $scope.kiemTraDuLieu = {
    name_cat: false,
    // image: false,
  };
  $scope.onSubmitForm = function () {
    let flag = false;

    if (!$scope.inputValue || !$scope.inputValue.name_cat) {
      $scope.kiemTraDuLieu.name_cat = true;
      flag = true;
    }
    // if (!$scope.inputValue || !$scope.inputValue.image) {
    //   $scope.kiemTraDuLieu.image = true;
    //   flag = true;
    // }
    if (!flag) {
      var newItem = {
        ...$scope.inputValue,
      };
      $http.post(apiUrl, newItem).then(function (response) {
        if (response.status == 201) {
          $location.path("/cat/listCat");
        }
      });
    }
  };
};
