window.listProController = function ($scope, $http, $location) {
  var api = "http://localhost:3000/products";
  $scope.getData = function () {
    $http.get(api).then(function (response) {
      if (response.status == 200) {
        $scope.pro = response.data;
      }
    });
  };
  $scope.getData();
  $scope.onDelete = function (deleteId) {
    let confirm = window.confirm("Are you sure you want to delete?");
    if (confirm) {
      $http.delete(`${api}/${deleteId}`).then(function (response) {
        if (response.status == 200) {
          $scope.getData();
        }
      });
    }
  };
  $scope.onDetail = function (id) {
    $location.path(`/products/detail/${id}`);
  };
};
