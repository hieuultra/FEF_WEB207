window.ListController = function ($scope, $http, $location) {
  var apiUrl = "http://localhost:3000/product";
  $scope.getData = function () {
    //goi de lay data
    $http.get(apiUrl).then(function (response) {
      // console.log(response);
      if (response.status == 200) {
        $scope.products = response.data;
      }
    });
  };
  $scope.getData();
  $scope.onDetail = function (id) {
    $location.path(`/product/detail/${id}`);
  };

  $scope.onDelete = function (deleteID) {
    let confirm = window.confirm("Are you sure you want to delete?");
    if (confirm) {
      $http.delete(`${apiUrl}/${deleteID}`).then(function (responnse) {
        if (responnse.status == 200) {
          //gọi lại hàm getData để cập nhập lại bảng
          $scope.getData();
        }
      });
    }
  };
  $scope.onEdit = function (id) {
    $location.path(`/product/${id}/edit`);
  };
};
