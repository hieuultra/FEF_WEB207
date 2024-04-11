window.listProController = function ($scope, $http, $location) {
  var apiUrl = "http://localhost:3000/product";
  $scope.getDataPro = function () {
    $http.get(apiUrl).then(function (response) {
      if (response.status == 200) {
        response.data.forEach(function (product) {
          if (product.category && product.category.name_cat) {
            product.name_cat = product.category.name_cat;
          } else {
            product.name_cat = "N/A";
          }
        });
        $scope.pro = response.data;
      }
    });
  };
  $scope.getDataPro();
  $scope.onDeletePro = function (deleteId) {
    let confirm = window.confirm("Are you sure you want to delete?");
    if (confirm) {
      $http.delete(`${apiUrl}/${deleteId}`).then(function (response) {
        if (response.status == 200) {
          $scope.getDataPro();
        }
      });
    }
  };
  $scope.onEditPro = function (id) {
    $location.path(`/pro/${id}/edit`);
  };
};
