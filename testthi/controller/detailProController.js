window.detailProController = function ($scope, $http, $routeParams, $location) {
  var apiUrl = "http://localhost:3000/products";
  var detailId = $routeParams.id;

  $scope.getData = function () {
    $http.get(apiUrl).then(function (response) {
      if (response.status == 200) {
        $scope.pro = response.data;
      }
    });
  };
  $scope.getData();

  $scope.detail = function () {
    $http.get(`${apiUrl}/${detailId}`).then(function (response) {
      if (response.status === 200) {
        $scope.pro = response.data;
        $scope.inputValue = {
          ma_sp: response.data.ma_sp,
          ten: response.data.ten,
          loai: response.data.loai,
          gia: response.data.gia,
        };
      }
    });
  };
  $scope.detail();

  $scope.onEdit = function (id) {
    $location.path(`/products/edit/${id}`);
  };
};
