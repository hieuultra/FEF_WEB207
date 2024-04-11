var myApp = angular.module("myApp", ["ngRoute"]); //cau lenh khoi tao module

//c1:
// myApp.controller("myCtrl", myFunction);

// function myFunction($scope) {
//   $scope.message = " day la ctr dau tien";
// }

//c2:
myApp.controller("myCtrl", function ($scope) {
  $scope.message = " day la ctr dau tien";
  $scope.employees = {
    name: "bui trung hieu",
    age: 21,
    job: "developer",
  };
  $scope.ex = [
    {
      name: "tran van nam",
      age: 25,
      job: "tester",
    },
    {
      name: "nguyen thi b",
      age: 24,
      job: "pilot",
    },
  ];
  $scope.student = ["tran van nam", "nguyen thi b", "tran van c"];

  //ham bat event click
  $scope.exam = function (name) {
    alert("tt nyc: " + name);
  };

  //ham bat event submit form
  $scope.add = function () {
    console.log($scope.employees);
  };

  $scope.tBao = "";

  //ham bat event onchange age
  $scope.onChangeAge = function () {
    if ($scope.employees.age < 18) {
      $scope.tBao = "no have age";
    } else {
      $scope.tBao = "have age";
    }
  };
});

//cau hinh route
myApp.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix("");
  $routeProvider
    .when("/list", {
      templateUrl: "./list.html",
      controller: "myCtrl",
    })
    .when("/add", {
      templateUrl: "./add.html",
      controller: "myCtrl",
    })
    .otherwise({
      redirectTo: "./tutor2.html",
    });
});
