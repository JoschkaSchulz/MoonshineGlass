import angular from 'angular';
import { EventCtrl } from './controller/event_ctrl.js';

import { GlassEvent } from './model/event.js';

angular.module('MoonshineGlass', [])
.controller('EventCtrl', EventCtrl);
