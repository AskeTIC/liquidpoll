import angular from 'angular';
import angularMeteor from 'angular-meteor';
import {Pie} from 'asketic-charts';
import {default as utils} from 'asketic-utils';

import template from './chartsPie.html';
const name = 'chartsPie';

class ChartsPie {
  constructor($stateParams, $scope, $reactive) {
    'ngInject';
    $reactive(this).attach($scope);

    //TODO: mover a algún módulo y/o paquete
    /*
    for (var i = 0; i < answers.length; i++) {
      answers[i].percent= utils.round(answers[i].points * 100 / total);
      answers[i].deg= utils.round(answers[i].percent * 360 / 100);
    }
    */
    this.helpers({
    });
  }
}

// create a module
export default angular.module(name, [angularMeteor])
	.component(name, {
    bindings: {
      entities: '<', //podrá recibir un atributo bars="string" en el elemento HTML. Con un objeto en string.
      options: '<', //IMPORTANT: Si se pasa  @ es un string, no puedes pasar otra cosa.
      slug: '<'
    },
		template,
		controllerAs: name,
		controller: ChartsPie
	});
