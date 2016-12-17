//TODO: pasar a NPM o Meteor packages ?
import angular from 'angular';
import angularMeteor from 'angular-meteor';
import {Bars} from 'asketic-charts';
import {default as utils} from 'asketic-utils';
console.log(utils);

import template from './chartsBars.html';

const name = 'chartsBars';

class ChartsBars{
  constructor($stateParams, $scope, $reactive) {
    'ngInject';
    $reactive(this).attach($scope);
    console.log($stateParams.agoraName);
    console.log($stateParams.agoraName);
    console.log(this.entities);
    console.log(this.space);

    //calcular el total de puntos para obtener el 100%
    var total = 0;
    for (var i = 0; i < this.entities.length; i++) {
      total+=this.entities[i].points;
    }

    //ordenar el array de menor a mayor e invertir
    //TODO: mejorar arraySort() para invertir en los 2 ordenes y por X atributo.
    utils.arraySort(this.entities);
    this.entities.reverse();

    //seleccionar el canvas y crear el gráfico
    //TODO: si se contextualiza el id en el HTMl coger con bars-$stateParams.agoraName
    var barsChartCanvas = document.getElementById('bars');
    console.log(barsChartCanvas);
    var barsChart = new Bars(barsChartCanvas, { width: 10, div: 2, ctx: '2d'}, this.entities);
    console.log(barsChart);

    //TODO: pintar directamente en el sentido correcto, o posibilitar el pintar en los 2 sentidos.
    acomodar(barsChartCanvas);
    function acomodar(c){
      c.style.transform="rotate(180deg)";
      c.style.transform="scale(1,-1)";
      c.style.webkitTransform = "rotate(180deg)";
      c.style.webkitTransform = "scale(1,-1)";
      c.style.mozTransform = "rotate(180deg)";
      c.style.mozTransform = "scale(1,-1)";
    }

    this.helpers({

    });
  }
}

// create a module
export default angular.module(name, [angularMeteor])
	.component(name, {
    bindings: {
      entities: '<', //podrá recibir un atributo bars="string" en el elemento HTML. Con un objeto en string.
      space: '@'
    },
		templateUrl: template,
		controllerAs: name,
		controller: ChartsBars
	});
