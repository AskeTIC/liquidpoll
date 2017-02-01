import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './webFooter.html';

const name = 'webFooter'; // Con esta constante se crea el elemento de HTML: <web-footer></web-footer>

class WebFooter {}

// create a module with a componente
export default angular.module( name, [
  //uiRouter,
  angularMeteor ])
    .component(name, {
      template,
      controller: WebFooter
    }
);
