import angular from 'angular';
import angularMeteor from 'angular-meteor';
import {BarsCanvas} from 'asketic-charts';
import {default as utils} from 'asketic-utils';

import { Agoras } from '../../../api/agoras/agoras'; //this cursors is going to work with monimongo

import template from './chartsBars.html'; //url con angular-templates, string con urigo:string-templates
const name = 'chartsBars';

class ChartsBars{
    constructor($stateParams, $state, $scope, $reactive, $element) {
        'ngInject';
        $reactive(this).attach($scope);
        console.log('ChartsBars Controller !!!!!!!!!!!!!');
        var that = this;
        console.log(this.entities);


        this._sortEntities = function(entities){
            //ordenar el array de menor a mayor e invertir
            //TODO: mejorar arraySort() para invertir en los 2 ordenes y por X atributo.
            utils.arraySort(entities);
            entities.reverse();
        }

        this._sortEntities(this.entities);
        this.barsChart = new BarsCanvas($element[0].childNodes[0], this.options, this.entities);
        console.log(this.barsChart);


        //Lifecycle hooks
        this.$onChanges = function(changes){
            console.log('On Changes!! XD');
            console.log(changes);
            //Si no son los primeros cambios (la creación del controller)...
            //console.log(that.barsChart); //null
            that.barsChart.clearCanvas();
            that._sortEntities(that.entities);
            that.barsChart.setBars(that.entities);
        }
        /*
        this.autorun(() => {
            console.log('Autorun!!', this.getReactively('entities'));
            console.log('Lo que sea desde autorun()!!!!');
            barsChart.clearCanvas();
            that.sortEntities(that.entities);
            barsChart.setBars(that.entities);
        });

        $scope.$parent.$watch('agoras', function(){
            console.log('$watch de agoras en parent ejecutado!');
            barsChart.clearCanvas();
            that.sortEntities(that.entities);
            barsChart.setBars(that.entities);
        });


        //Emitiendo un evento desde el padre hacia los hijos.
        //TODO: Hay que eliminar el canvas anterior y volver a crearlo o limpiar el canvas antes de volver a pintar.
        //Esto solo lo hace para el propio cliente en el que estamos, así que hay que hacerlo en base a una fuente reactiva.
        $scope.$on('changes-in-agoras', function(){
            console.log('change-entities capturado!!!!!!!!!!!!!!!!!!!!!!');
            that.sortEntities(that.entities);
            barsChart.setBars(that.entities);
        });
        */

        this.helpers({
        });
    }

}

// create a module
export default angular.module(name, [angularMeteor])
	.component(name, {
        bindings: {
            entities: '<',
            options: '<'
        },
        template,
    	controller: ChartsBars
	});
