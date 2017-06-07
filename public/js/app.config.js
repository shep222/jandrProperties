(function() {
  'use strict';

  angular.module('app').config(config)

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

  function config($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode(true)

    $stateProvider
     .state({
       name: 'home',
       url: '/',
       component: 'landingPage',
     })
    //  .state({
    //    name: 'environment',
    //    url: '/environment/:location',
    //    component: 'environment'
    //  })
    //  .state({
    //    name: 'showHouse',
    //    url: '/house/:id',
    //    component: 'houseShow'
    //  })
  }

}());
