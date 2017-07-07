var app = angular.module("myApp",['ngSanitize', 'ngMaterial', 'ui.bootstrap']);

app.controller("myController", function($scope){
   
    // initializing the time Interval
    $scope.firstSliderInterval = 3000;

    // Initializing slide array
    $scope.slides = [{
        image: '../images/about.jpg',
        text: 'We have to connect every Indian to good medical facility. We are working for the people  not for money.'
    }, {
        image: '../images/about.jpg',
        text: 'We have to connect every Indian to good medical facility. We are working for the people  not for money.'
    }, {
        image: '../images/about.jpg',
        text: 'We have to connect every Indian to good medical facility. We are working for the people  not for money.'
    }, {
        image: '../images/about.jpg',
        text: 'We have to connect every Indian to good medical facility. We are working for the people  not for money.'
    }];
});