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
        this.$onInit = function(){
            console.log('chartBars controller - On Init!! XD');
        }

        this.$onChanges = function(changes){
            console.log('On Changes!! XD');
            console.log(changes);
            //Si no son los primeros cambios (la creación del controller)...
            //console.log(that.barsChart); //null
            that.barsChart.clearCanvas();
            that._sortEntities(that.entities);
            that.barsChart.setBars(that.entities);
        }

        var previousEntities;
        this.$doCheck = function(){
            console.log('$doCheck!!!');
            that.barsChart.clearCanvas();
            that._sortEntities(that.entities);
            that.barsChart.setBars(that.entities);
            //TODO: verificar el estado para refrescar solo si está en su estado o slug provisionalmente.
            //TODO: Conseguir que funcione la validación de debajo.
            /*
            if(!angular.equals(previousEntities, this.entities)){
                console.log('this.entities no es igual a previousEntities!!!!');
                previousEntities = this.entities;
                this.entis = angular.copy(this.entities);
                that.barsChart.clearCanvas();
                that._sortEntities(that.entities);
                that.barsChart.setBars(that.entities);
            }else{
                console.log('this.entities es igual a previousEntities ????');
            }
            */
        }

        //TODO: Entender por que no se ejecutan los 3 métodos después de los consoles cuando cambian las entities.
        /*
        this.autorun(() => {
            console.log('Autorun!!', this.getReactively('entities'));
            console.log('Lo que sea desde autorun()!!!!');
            that.barsChart.clearCanvas();
            that._sortEntities(that.entities);
            that.barsChart.setBars(that.entities);
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
            options: '<',
            slug: '@'
        },
        template,
    	controller: ChartsBars
	});
