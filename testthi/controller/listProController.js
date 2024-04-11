window.listProController = function ($scope, $http, $location) {
  var apiUrl = "http://localhost:3000/products";
  $scope.getData = function () {
    $http.get(apiUrl).then(function (response) {
      if (response.status == 200) {
        $scope.product = response.data;
      }
    });
  };
  $scope.getData();
  $scope.onDelete = function (deleteID) {
    let confirm = window.confirm("Are you sure you want to delete?");
    if (confirm) {
      $http.delete(`${apiUrl}/${deleteID}`).then(function (response) {
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
