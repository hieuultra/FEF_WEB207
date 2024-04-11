window.editProController = function ($scope, $http, $routeParams, $location) {
  var apiUrl = "http://localhost:3000/product";
  var apiUrlCt = "http://localhost:3000/category";
  var editId = $routeParams.id;
  $http
    .get(apiUrlCt)
    .then(function (response) {
      $scope.categories = response.data;
    })
    .catch(function (error) {
      console.error("Lỗi khi lấy danh mục:", error);
    });

  $scope.getProInfor = function () {
    $http
      .get(`${apiUrl}/${editId}`)
      .then(function (response) {
        if (response.status === 200) {
          //   console.log(response);
          $scope.pro = response.data;
          $scope.inputValue = {
            name: response.data.name,
            description: response.data.description,
            price: response.data.price,
            cat: response.data.cat,
          };
        }
      })
      .catch(function (error) {
        $scope.mes - `${error.statusText} product with id ${editId}`;
      });
  };
  $scope.getProInfor();

  //kiem tra du lieu co hop le hay khong,
  $scope.kiemTraDuLieu = {
    name: false, // ko loi thi mac dinh la false
    description: false,
    price: false,
    cat: false,
  };

  //edit form
  $scope.onEditProForm = function () {
    // gán 1 biến để kiểm tra lỗi, nếu 1 trong 2 trường lỗi thì update thành true
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
      // nếu flag = false, tức là không có lỗi thì chạy api edit
      var updateItem = {
        ...$scope.inputValue,
      };
      var selectedCategory = $scope.categories.find(function (category) {
        return category.id === $scope.inputValue.cat;
      });
      if (selectedCategory) {
        updateItem.category = selectedCategory;
      } else {
        updateItem.category = { name_cat: "N/A" }; // Gán giá trị 'N/A' khi không tìm thấy category
      }
      $http
        .put(
          `${apiUrl}/${editId}`, //API Url
          updateItem // dữ liệu update
        )
        .then(function (response) {
          if (response.status === 200) {
            $location.path("/pro/listPro");
          }
        });
    }
  };
};
