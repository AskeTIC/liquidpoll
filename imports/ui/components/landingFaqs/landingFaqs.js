import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './landingFaqs.html';

const name = 'landingFaqs';

class LandingFaqs {}

// create a module with a componente
export default angular.module(name, [
  angularMeteor ])
  .component(name, {
    templateUrl: template,
    controller: LandingFaqs,
    controllerAs: name
  });
