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

    console.log(this.bars);
    var entities = this.bars;

    //calcular el total de puntos para obtener el 100%
    var total = 0;
    for (var i = 0; i < entities.length; i++) {
      total+=entities[i].points;
    }
    console.log(entities);

    //seleccionar el canvas y crear el gráfico
    //TODO: si se contextualiza el id en el HTMl coger con bars-$stateParams.agoraName
    var barsChartCanvas = document.getElementById('bars');
    console.log(barsChartCanvas);
    var barsChart = new Bars(barsChartCanvas, '2d', 20);
    console.log(barsChart);

    //ordenar el array de menor a mayor e invertir
    //TODO: mejorar arraySort() para invertir en los 2 ordenes y por X atributo.
    utils.arraySort(entities);
    entities.reverse();

    //TODO: Este tendrá que estar en helpers y/o methods para ser ejecutado cada vez que hay cambios.
    barsChart.makeBars(entities);

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
      bars: '<' //podrá recibir un atributo bars="string" en el elemento HTML. Con un objeto en string.
    },
		templateUrl: template,
		controllerAs: name,
		controller: ChartsBars
	});
