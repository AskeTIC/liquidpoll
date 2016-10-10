import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './appHeader.html';

const name = 'appHeader';

class AppHeader {}

// create a module with a componente
export default angular.module(name, [
  angularMeteor ])
  .component(name, {
    templateUrl: template,
    controller: AppHeader,
    controllerAs: name
  });
