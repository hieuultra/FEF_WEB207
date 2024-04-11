var myApp = angular.module("myApp", []);
myApp.controller("myCtrl", function ($scope) {
  $scope.test = "";

  //checkbox
  //   $scope.input = {
  //     list: {
  //       ALL: false,
  //       A: false,
  //       B: false,
  //       C: false,
  //     },
  //   };

  // select-option

  $scope.cat = [
    {
      id: 1,
      name: "cat1",
    },
    {
      id: 2,
      name: "cat2",
    },
    {
      id: 3,
      name: "cat3",
    },
  ];

  $scope.submit = function () {
    //radio
    // console.log($scope.sex);

    //checkbox
    // console.log($scope.input.list);

    //select-option
    // console.log($scope.selectItem.name);
    console.log($scope.selectItem);
  };
});
