import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './landingHeader.html';

const name = 'landingHeader';

class LandingHeader {}

// create a module with a componente
export default angular.module(name, [
  angularMeteor ])
  .component(name, {
    templateUrl: template,
    controller: LandingHeader,
    controllerAs: name
  });
