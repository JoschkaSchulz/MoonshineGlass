import angular from 'angular';
import uiRouter from 'angular-ui-router';

// Controllers
import { LoginCtrl        } from './controller/login_ctrl.js';
import { EventsIndexCtrl  } from './controller/events_index_ctrl.js';
import { EventShowCtrl    } from './controller/event_show_ctrl.js';
import { EventNewCtrl     } from './controller/event_new_ctrl.js';
import { NavigationCtrl   } from './controller/navigation_ctrl.js';

// Models
import { GlassEvent } from './model/event.js';
import { GlassUser  } from './model/user.js';

angular.module('MoonshineGlass', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  var base = 'scripts/glass/templates'
  $stateProvider
    .state('login', {
      url: '/login',
      controller: 'LoginCtrl',
      templateUrl: base + '/login/index.html'
    })
    .state('events_index', {
        url: '/events/index',
        templateUrl: base + '/events/index.html'
    })
    .state('event_show', {
        url: '/event/show/:id',
        controller: 'EventShowCtrl',
        templateUrl: base + '/events/show.html'
    })
    .state('event_new', {
        url: '/event/new',
        controller: 'EventNewCtrl',
        templateUrl: base + '/events/new.html'
    })
    .state("otherwise", {
        url: '/events/index',
        templateUrl: base + '/events/index.html'
    });

    $urlRouterProvider.otherwise('/login');
})
.controller('LoginCtrl', LoginCtrl)
.controller('EventsIndexCtrl', EventsIndexCtrl)
.controller('EventShowCtrl', EventShowCtrl)
.controller('EventNewCtrl', EventNewCtrl)
.controller('NavigationCtrl', NavigationCtrl);
