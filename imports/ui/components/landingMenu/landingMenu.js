import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './landingMenu.html';

const name = 'landingMenu';

class LandingMenu {}

// create a module with a componente
export default angular.module(name, [
  angularMeteor ])
  .component(name, {
    templateUrl: template,
    controller: LandingMenu,
    controllerAs: name
  });
