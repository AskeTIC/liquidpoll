//TODO: pasar a NPM o Meteor packages ?
import angular from 'angular';
import angularMeteor from 'angular-meteor';
import {Bars} from 'asketic-charts';
import {default as utils} from 'asketic-utils';
//console.log(utils);

import template from './chartsBars.html'; //url
const name = 'chartsBars';

class ChartsBars{
  constructor($stateParams, $state, $scope, $reactive, $element) {
    'ngInject';
    $reactive(this).attach($scope);
    console.log('ChartsBars Controller !!!!!!!!!!!!!');

    //ordenar el array de menor a mayor e invertir
    //TODO: mejorar arraySort() para invertir en los 2 ordenes y por X atributo.
    utils.arraySort(this.entities);
    this.entities.reverse();

    //TODO: mejorar la selección del elemento, no siempre estará en la misma posición
    var barsChart = new Bars($element[0].childNodes[0], this.options, this.entities);
    console.log(barsChart);

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
          slug: '@'
        },
        templateUrl: template,
    	controller: ChartsBars
	});
