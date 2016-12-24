import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { name as webNavigation } from '../webNavigation/webNavigation';

import template from './webHeader.html';

const name = 'webHeader';

class WebHeader {
  //TODO: Dependiendo la session le paso unos items u otros.

}

// create a module with a componente
export default angular.module(name, [
  angularMeteor,
  webNavigation ])
  .component(name, {
    templateUrl: template,
    controller: WebHeader
  });
//TODO: el elemento <web-navigation></web-navigation> se ve en webHeader sin añadirlo desde config(), y funciona el cambio de estado.
// No lo pongo por que si no se muestra dos veces. Aunque no se si el estado app se ha establecido. Estudiarlo.
