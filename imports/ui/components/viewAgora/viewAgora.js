import { Meteor } from 'meteor/meteor';
import angular from 'angular';
import angularMeteor from 'angular-meteor';
import {default as utils} from 'asketic-utils';
//TODO: Recibir por get o post el objeto con el 'parli' en lugar de hacer otra consulta a la BBDD
import { Agoras } from '../../../api/agoras/agoras'; //this cursors is going to work with monimongo

//Componentes incluidos (dependencias)
import { name as chartsBars } from '../chartsBars/chartsBars';
import { name as userVotes } from '../userVotes/userVotes';

import template from './viewAgora.html';
console.log(template);
const name = 'viewAgora';

class ViewAgora {
  constructor($stateParams, $scope, $reactive) {
    'ngInject';
    $reactive(this).attach($scope);
    console.log("viewAgora controller!");
    //console.log(this);
    console.log($stateParams.agoraSlug);

    //TODO: Emitir este evento cuando cambia los datos de la susbcripción.
    //$scope.$broadcast('change-entities'); //Esto es para un solo cliente, no hay sincronización.

    var options = {
        bar : {
            width: 50,
            div: 1.5,
        },
        canvas : {
            width: 1,
            height: 200,
            ctx: '2d'
        }
    }

    //TOKNOW: Los helpers se ejecutan cunado se crea el controller, para poner datos o métodos en disposicion de la vista, sin embargo si
    //TOKNOW: Que diceferencia hay entre $scope o this con reactive y con agregarlos mediante esta function helpers() ???
    //TOKNOW: Estos helpers tienen vetadas algunas propiedades de configurable, writable o readable (parece que es de JS nativo).
    this.helpers({
        options() {
            console.log('Helper!!!!!!!!!!!!!!!!!!!!');
            return options;
        },
        //Es reactivo por defecto por que estamos en una fuente de datos reactiva,
        //DDP usa Tracker por defecto si se está subscrito un cliente actualiza los datos en tiempo real.
        agora() {
            //TOKNOW: Aunque cambia el valor del helper no se refresca el scope, esto es por el funcionamiento de $reactive con this, quizás.
            //Si que ocurre que si cambia la fuente de datos reactiva en el helper se cambia en la vista, pero no si es una variable en this.
            //Esto es posible por que $reactive envuelve $scope y pasamos a volver a usar this y las variables realmente bindeadas a la vista solo son las de los helpers.
            //Y además la vista se refresca usando React en lugar de Angular, por lo que no se refresca cuando cambian las variables del controller.
            return Agoras.findOne({'slug': $stateParams.agoraSlug});
        },
        userVote(){
            return function({entities}){
                console.log(entities);
                Agoras.update(
                    { _id: this.agora._id},
                    { $set: { entities: entities } }
                );
            }
        }
    });
  }
}

// create a module
export default angular.module(name, [
        angularMeteor,
        chartsBars,
        userVotes
    ])
	.component(name, {
		template,
		controllerAs: name,
		controller: ViewAgora
	})
	.config(config);

function config($stateProvider) {
	'ngInject';
    $stateProvider
    .state('agora', {
        url: '/agoras/:agoraSlug',
        template: '<view-agora></view-agora>'
    });
}
