import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './webHeader.html';

const name = 'webHeader';

class WebHeader {}

// create a module with a componente
export default angular.module(name, [
  angularMeteor ])
  .component(name, {
    templateUrl: template,
    controller: WebHeader,
    controllerAs: name
  });
