import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './landingOffcanvas.html';

const name = 'landingOffcanvas';

class LandingOffcanvas {}

// create a module with a componente
export default angular.module(name, [
  angularMeteor ])
  .component(name, {
    templateUrl: template,
    controller: LandingOffcanvas,
    controllerAs: name
  });
