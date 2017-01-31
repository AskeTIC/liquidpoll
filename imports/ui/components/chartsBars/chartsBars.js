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
    //console.log('ChartsBars Controller !!!!!!!!!!!!!');
    var that = this;
    this.sortEntities = function(entities){
        //ordenar el array de menor a mayor e invertir
        //TODO: mejorar arraySort() para invertir en los 2 ordenes y por X atributo.
        utils.arraySort(entities);
        entities.reverse();
    }
    //console.log(this.entities);

    this.sortEntities(this.entities);
    var barsChart = new Bars($element[0].childNodes[0], this.options, this.entities);
    //console.log(barsChart);

    //Emitiendo un evento desde el padre hacia los hijos.
    //TODO: Hay que eliminar el canvas anterior y volver a crearlo o limpiar el canvas antes de volver a pintar.
    //Esto solo lo hace para el propio cliente en el que estamos, así que hay que hacerlo en base a una fuente reactiva.
    $scope.$on('change-entities', function(){
        console.log('change-entities capturado!!!!!!!!!!!!!!!!!!!!!!');
        that.sortEntities(that.entities);
        barsChart.setBars(that.entities);
    });

    //Lifecycle hooks
    this.$onInit = function(){
        console.log('On Init!! XD');
    }

    this.$onChanges = function(changes){
        console.log('On Changes!! XD');
        console.log(changes);
        that.sortEntities(that.entities);
        barsChart.setBars(that.entities);
    }


    this.helpers({

    });
  }

}

// create a module
export default angular.module(name, [angularMeteor])
	.component(name, {
        bindings: {
            entities: '<',
            options: '<',
            onChangeBars: '&',
            slug: '@'
        },
        templateUrl: template,
    	controller: ChartsBars
	});
