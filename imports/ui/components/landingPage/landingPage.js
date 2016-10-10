import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './landingPage.html';

const name = 'landingPage';

class LandingPage {}

// create a module with a componente
export default angular.module(name, [
  angularMeteor ])
  .component(name, {
    templateUrl: template,
    controller: LandingPage,
    controllerAs: name
  });
