import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './landingFeatures3.html';

const name = 'landingFeatures3';

class LandingFeatures3 {}

// create a module with a componente
export default angular.module(name, [
  angularMeteor ])
  .component(name, {
    templateUrl: template,
    controller: LandingFeatures3,
    controllerAs: name
  });
