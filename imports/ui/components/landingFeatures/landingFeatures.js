import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './landingFeatures.html';

const name = 'landingFeatures';

class LandingFeatures {}

// create a module with a componente
export default angular.module(name, [
  angularMeteor ])
  .component(name, {
    templateUrl: template,
    controller: LandingFeatures,
    controllerAs: name
  });
