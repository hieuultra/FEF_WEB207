window.addProController = function ($scope, $http, $location) {
  var apiUrl = "http://localhost:3000/product";
  var apiUrlCt = "http://localhost:3000/category";

  $http
    .get(apiUrlCt)
    .then(function (response) {
      $scope.categories = response.data;
    })
    .catch(function (error) {
      console.error("error when get cate", error);
    });

  $scope.kiemTraDuLieu = {
    name: false,
    description: false,
    price: false,
    cat: false,
  };
  $scope.onSubmitProForm = function () {
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
    if (!$scope.inputValue || !$scope.inputValue.cat) {
      $scope.kiemTraDuLieu.cat = true;
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

      var selectedCategory = $scope.categories.find(function (category) {
        return category.id === $scope.inputValue.cat;
      });
      newItem.category = selectedCategory;
      $http.post(apiUrl, newItem).then(function (response) {
        if (response.status == 201) {
          $location.path("/pro/listPro");
        }
      });
    }
  };
};
