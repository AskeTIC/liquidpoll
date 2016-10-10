import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { name as app } from '../imports/ui/components/app/app';
import { name as landing } from '../imports/ui/components/landing/landing';

angular.module('influyentes', [
  angularMeteor,
  app,
  landing
]);
