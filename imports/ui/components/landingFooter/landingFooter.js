import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './landingFooter.html';

const name = 'landingFooter';

class LandingFooter {}

// create a module with a componente
export default angular.module(name, [
  angularMeteor ])
  .component(name, {
    templateUrl: template,
    controller: LandingFooter,
    controllerAs: name
  });
