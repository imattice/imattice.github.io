var ike = angular.module('ike', ['ui.router']);

ike.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('projects', {
        url:'',
        views: {
            'header': {
                templateUrl:'html/header.html',
                // controller:'HeaderCtrl'
            },
            'projects': {
                templateUrl:'html/projects.html'
            },
            'footer': {
                templateUrl:'html/footer.html'
            },
        }
    }); //end projects state

    $stateProvider.state('skills', {
        url:'skills',
        views: {
            'header': {
                templateUrl:'html/header.html',
                // controller:'HeaderCtrl'
            },
            'skills': {
                templateUrl:'html/skills.html'
            },
            'footer': {
                templateUrl:'html/footer.html'
            },
        }
    }); //end skills state

    $stateProvider.state('contact', {
        url:'contact',
        views: {
            'header': {
                templateUrl:'html/header.html',
                // controller:'HeaderCtrl'
            },
            'contact': {
                templateUrl:'html/contact.html'
            },
            'footer': {
                templateUrl:'html/footer.html'
            },
        }
    }); //end contact state

    $stateProvider.state('about', {
        url:'about',
        views: {
            'header': {
                templateUrl:'html/header.html',
                // controller:'HeaderCtrl'
            },
            'about': {
                templateUrl:'html/about.html'
            },
            'footer': {
                templateUrl:'html/footer.html'
            },
        }
    }); //end about state



});  //end config
