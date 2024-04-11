window.editCatController = function ($scope, $http, $routeParams, $location) {
  var apiUrl = "http://localhost:3000/category";
  var editId = $routeParams.id;

  $scope.getCatInfor = function () {
    $http
      .get(`${apiUrl}/${editId}`)
      .then(function (response) {
        if (response.status === 200) {
          $scope.cat = response.data;
          $scope.inputValue = {
            name_cat: response.data.name_cat,
            // image: response.data.image,
          };
        }
      })
      .catch(function (error) {
        $scope.mes - `${error.statusText} category with id ${editId}`;
      });
  };
  $scope.getCatInfor();

  //kiem tra du lieu co hop le hay khong,
  $scope.kiemTraDuLieu = {
    name_cat: false, // ko loi thi mac dinh la false
    // image: false,
  };

  //edit form
  $scope.onEditForm = function () {
    // gán 1 biến để kiểm tra lỗi, nếu 1 trong 2 trường lỗi thì update thành true
    let flag = false;
    if (!$scope.inputValue || !$scope.inputValue.name_cat) {
      //nếu không có inputValue hoặc không có name {
      $scope.kiemTraDuLieu.name_cat = true;
      flag = true;
    }
    // if (!$scope.inputValue || !$scope.inputValue.image) {
    //   //nếu không có inputValue hoặc không có image {
    //   $scope.kiemTraDuLieu.image = true;
    //   flag = true;
    // }

    if (!flag) {
      // nếu flag = false, tức là không có lỗi thì chạy api edit
      var updateItem = {
        ...$scope.inputValue,
      };
      $http
        .put(
          `${apiUrl}/${editId}`, //API Url
          updateItem // dữ liệu update
        )
        .then(function (response) {
          if (response.status === 200) {
            $location.path("/cat/listCat");
          }
        });
    }
  };
};
