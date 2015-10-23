import angular from 'angular';
import uiRouter from 'angular-ui-router';

// Controllers
import { EventsIndexCtrl } from './controller/events_index_ctrl.js';
import { EventShowCtrl } from './controller/event_show_ctrl.js';
import { NavigationCtrl } from './controller/navigation_ctrl.js';

// Models
import { GlassEvent } from './model/event.js';

angular.module('MoonshineGlass', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  var base = 'scripts/glass/templates'
  $stateProvider
    .state('events_index', {
        url: '/events/index',
        templateUrl: base + '/events/index.html'
    })
    .state('events_show', {
        url: '/events/show/:id',
        controller: 'EventShowCtrl',
        templateUrl: base + '/events/show.html'
    })
    .state("otherwise", {
        url: '/events/index',
        templateUrl: base + '/events/index.html'
    });

    $urlRouterProvider.otherwise('/events/index');
})
.controller('EventsIndexCtrl', EventsIndexCtrl)
.controller('EventShowCtrl', EventShowCtrl)
.controller('NavigationCtrl', NavigationCtrl);
