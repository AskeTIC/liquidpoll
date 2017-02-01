import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './webNavigation.html';

const name = 'webNavigation';

class WebNavigation {
  constructor($stateParams, $scope, $reactive) {
    'ngInject';

  }

}

// create a module with a componente
export default angular.module( name, [
  angularMeteor,
  'accounts.ui' ])
    .component(name, {
      bindings: {
        items: '<' //podrá recibir un atributo bars="string" en el elemento HTML. Con un objeto en string.
        //IMPORTANT: Si se pasa  @ es un string, no puedes pasar otra cosa.
      },
      templateUrl: template,
      controller: WebNavigation,
    }
);
