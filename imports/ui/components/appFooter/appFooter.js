import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './appFooter.html';

const name = 'appFooter'; // Es lo que otorga el elemento de HTML: <web-footer></web-footer>

class AppFooter {}

// create a module with a componente
export default angular.module( name, [
  //uiRouter,
  angularMeteor ])
    .component(name, {
      templateUrl: template,
      controller: AppFooter,
      controllerAs: name
    }
);
