//khai bao angular js cung vs vung su dung
var myApp = angular.module("myApp", ["ngRoute"]);
//map ham myFunc vs vung infor de render data ra
// myApp.controller("infoCtrl", myFunc);
//viet func
myApp.controller("infoCtrl", function ($scope) {
  $scope.welcome = "Hello World"; //dang sau scope la bien khoi tao
  //render data ra view
  $scope.employees = {
    name: "bui trung hieu",
    age: 21,
    job: "fullstack-developer",
    born: 2004,
  };
  $scope.ex = [
    {
      name: "tran van nam",
      age: 25,
      job: "tester",
    },
    {
      name: "nguyen thi mai",
      age: 24,
      job: "pilot",
    },
  ];

  $scope.namHienTai = 2024;

  //ham bat event click
  // $scope.exam = function (name) {
  //   alert("tt nyc: " + name);
  // };

  // //ham bat event submit form
  // $scope.add = function () {
  //   console.log($scope.employees);
  // };
  // //ham bat event onchange age
  // $scope.onChangeAge = function () {
  //   if ($scope.employees.age < 18) {
  //     $scope.tBao = "no have age";
  //   } else {
  //     $scope.tBao = "have age";
  //   }
  // };
});

//cau hinh route
// myApp.config(function ($routeProvider, locationProvider) {
//   locationProvider.hashPrefix("");
//   $routeProvider
//     .when("/danh-sach", {
//       templateUrl: "./danh-sach.html",
//       controller: "infoCtrl"
//     })
//     .when("/them-moi", {
//       templateUrl: "./them-moi.html",
//       controller: "infoCtrl",
//     })
//     .otherwise({
//       redirectTo: "./index.html",
//     });
// });
