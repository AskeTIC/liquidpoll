import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { name as webMain } from '../imports/ui/components/webMain/webMain';
import { name as webHeader } from '../imports/ui/components/webHeader/webHeader';
import { name as webFooter } from '../imports/ui/components/webFooter/webFooter';

angular.module('influyentes-app', [
  angularMeteor,
  webMain,
  webHeader,
  webFooter
]);