import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './webFooter.html';

const name = 'webFooter'; // Es lo que otorga el elemento de HTML: <web-footer></web-footer> 

class WebFooter {}

// create a module with a componente
export default angular.module( name, [
  //uiRouter,
  angularMeteor ])
    .component(name, {
      templateUrl: template,
      controller: WebFooter,
      controllerAs: name
    }
);
