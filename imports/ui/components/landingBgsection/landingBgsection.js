import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './landingBgsection.html';

const name = 'landingBgsection';

class LandingBgsection {}

// create a module with a componente
export default angular.module(name, [
  angularMeteor ])
  .component(name, {
    templateUrl: template,
    controller: LandingBgsection,
    controllerAs: name
  });
