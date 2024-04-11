window.listCatController = function ($scope, $http, $location) {
  var apiUrl = "http://localhost:3000/category";
  var apiPro = "http://localhost:3000/product";
  $scope.getData = function () {
    $http.get(apiUrl).then(function (response) {
      if (response.status == 200) {
        $scope.cat = response.data;
      }
    });
  };
  $scope.getData();
  $scope.onDelete = function (deleteId) {
    let confirm = window.confirm("Are you sure you want to delete?");
    if (confirm) {
      // Lấy danh sách sản phẩm thuộc danh mục cần xóa
      $http.get(`${apiPro}?cat=${deleteId}`).then(function (response) {
        var product = response.data;
        // Xóa từng sản phẩm trong danh sách
        product.forEach(function (pro) {
          $http
            .delete(`${apiPro}/${pro.id}`)
            .then(function (response) {
              if (response.status == 200) {
                console.log("da xoa pro:", pro.id);
              }
            })
            .catch(function (error) {
              console.error("loi khi xoa pro:", error);
            });
        });
        $http.delete(`${apiUrl}/${deleteId}`).then(function (response) {
          if (response.status == 200) {
            $scope.getData();
          }
        });
      });
    }
  };
  $scope.onEdit = function (id) {
    $location.path(`/cat/${id}/edit`);
  };
};
