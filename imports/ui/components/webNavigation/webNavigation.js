import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './webNavigation.html';

const name = 'webNavigation';

class WebNavigation {
  constructor($stateParams, $scope, $reactive) {
    'ngInject';

  }

}

// create a module with a componente
export default angular.module( name, [
  uiRouter,
  angularMeteor ])
    .component(name, {
      templateUrl: template,
      controller: WebNavigation,
      controllerAs: name
    }
);
