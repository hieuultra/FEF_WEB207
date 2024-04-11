angular.module("appRoute", ["ngRoute"]).config(function ($routeProvider) {
  $routeProvider
    .when("/list", {
      templateUrl: "views/list.html",
      controller: ListController,
    })
    .when("/add", {
      templateUrl: "views/add.html",
      controller: AddController,
    })
    .when("/product/detail/:id", {
      templateUrl: "views/detail.html",
      controller: DetailController,
    })
    .when("/product/:id/edit", {
      templateUrl: "views/edit.html",
      controller: EditController,
    });
});
