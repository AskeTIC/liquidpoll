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
    constructor($stateParams, $scope, $reactive) {
        'ngInject';
        $reactive(this).attach($scope);
        var that = this;
        console.log(`viewAgoraList() controller`);

        /*No tiene sentido crear una subscripcion por agora puesto que no va a ver el cambio más que el,
        y creariamos 6-8 subscripciones para objetos pequeños,
        mejor una para todas las participaciones del user.*/
        this.subscribe('user-participe', null, {
            onStart: function () {
                console.log("Subscrito a 'user-participe'");
            },
            onReady: function () {
                console.log("Preparada la subscripcion a 'user-participe' y el item ha llegado");
                $scope.$broadcast('user-participe');
            },
            onStop: function (error) {
                if (error) {
                    console.log('An error happened - ', error);
                } else {
                    console.log("La subscripcion a 'user-participe' se ha cancelado");
                }
            }
        });

        //Options para la creación de la chart.
        var options = {
            width : {
                bar: 3,
                space: 1
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

function config($stateProvider) {
    'ngInject';
    console.log(`config() de viewAgoraList.........`);
    $stateProvider
        .state('agoras', {
            url: '/agoras',
            template: '<view-agora-list></view-agora-list>'
        }
    );

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
