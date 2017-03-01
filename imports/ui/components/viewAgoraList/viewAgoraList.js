import { Meteor } from 'meteor/meteor';
import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import { Agoras } from '../../../api/agoras/agoras'; //this cursors is going to work with monimongo

//Componentes incluidos (dependencias)
import { name as chartsBars } from '../chartsBars/chartsBars';
import { name as userParticipe } from '../userParticipe/userParticipe';


import template from './viewAgoraList.html';
const name = 'viewAgoraList';

class ViewAgoraList {
    constructor($stateParams, $scope, $rootScope, $reactive) {
        'ngInject';
        $reactive(this).attach($scope);
        var that = this;
        console.log(`viewAgoraList() controller`);

        //Options para la creación de la chart.
        var options = {
            bar : {
                width: 22,
                div: 1,
            },
            canvas : {
                width: 1,
                height: 1,
                ctx: '2d'
            }
        }

        this.helpers({
            options() {
                return options;
            },
            agoras() {
                return Agoras.find({});
            }
        });
    }
}

// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter,
  userParticipe,
  chartsBars])
	.component(name, {
		template,
		controllerAs: name,
		controller: ViewAgoraList
	})
	.config(config)
    .run(run);

function config() {
    'ngInject';
    console.log(`config() de viewAgoraList.........`);

    Meteor.subscribe('agoras', null, {
        onStart: function () {
            console.log("Subscrito a 'agoras'");
        },
        onReady: function () {
            console.log("Preparada la subscripcion a 'agoras' y los items han llegado");
        },
        onStop: function (error) {
            if (error) {
                console.log('An error happened - ', error);
            } else {
                console.log("La subscripcion a 'agoras' se ha cancelado");
            }
        }
    });

}

function run(){
    'ngInject';
    console.log(`run() de viewAgoraList.........`);
}
