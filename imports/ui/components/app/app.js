import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { name as appMain } from '../imports/ui/components/appMain/appMain';
import { name as appHeader } from '../imports/ui/components/appHeader/appHeader';
import { name as appFooter } from '../imports/ui/components/appFooter/appFooter';

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
