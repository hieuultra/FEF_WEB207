angular.module("app-route", ["ngRoute"]).config(function ($routeProvider) {
  $routeProvider.when("/cat/listCat", {
    templateUrl: "views/cat/listCat.html",
    controller: listCatController,
  });
});
