import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './landingNewsletter.html';

const name = 'landingNewsletter';

class LandingNewsletter {}

// create a module with a componente
export default angular.module(name, [
  angularMeteor ])
  .component(name, {
    templateUrl: template,
    controller: LandingNewsletter,
    controllerAs: name
  });
