import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { name as appMain } from '../appMain/appMain';
import { name as appHeader } from '../appHeader/appHeader';
import { name as appFooter } from '../appFooter/appFooter';

import template from './app.html';

const name = 'app';

class App {

}

// export module
export default angular.module(name, [
  angularMeteor,
  appMain,
  appHeader,
  appFooter ])
  .component(name, {
    templateUrl: template,
    controller: App,
    controllerAs: name
  })
