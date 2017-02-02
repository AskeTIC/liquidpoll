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

const name = 'viewAgora';

class ViewAgora {
  constructor($stateParams, $scope, $reactive) {
    'ngInject';
    $reactive(this).attach($scope);
    console.log("viewAgora controller!");
    var that = this;
    //console.log(this);
    //console.log($stateParams.agoraSlug);
    //console.log(Meteor.userId());

    //TODO: Conseguir extraer el último voto del usuario con la consulta.
    var userVotes = [];
    var count = -1;
    var foo = Agoras.find({ 'slug': $stateParams.agoraSlug},{fields : {votes: 1, _id:0}}).fetch();
    foo[0].votes.forEach(function(value, key){
        //console.log(value);
        if(value.user == Meteor.userId()){
            //console.log('coincide!!!');
            userVotes.push(value);
            count +=1;
        }
        //console.log(count);
    })
    //console.log(userVotes);
    var lastVote = userVotes[count];
    console.log(lastVote);

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
        lastVote() {
            console.log('Helper userVote!!!!');
            return lastVote;
        },
        agora() {
            //Es reactivo por defecto por que estamos en una fuente de datos reactiva,
            //DDP usa Tracker por defecto si se está subscrito un cliente actualiza los datos en tiempo real.
            //TOKNOW: Aunque cambia el valor del helper no se refresca el scope, esto es por el funcionamiento de $reactive con this, quizás.
            //Si que ocurre que si cambia la fuente de datos reactiva en el helper se cambia en la vista, pero no si es una variable en this.
            //Esto es posible por que $reactive envuelve $scope y pasamos a volver a usar this y las variables realmente bindeadas a la vista solo son las de los helpers.
            //Y además la vista se refresca usando React en lugar de Angular, por lo que no se refresca cuando cambian las variables del controller.
            return Agoras.findOne({'slug': $stateParams.agoraSlug});
        },
        addVote(){
            return function({vote}){
                //Actualizar la variable vote.
                that.lastVote.date = new Date();
                that.lastVote.entity = vote.siglas;

                //introducir el voto en el agora
                that.agora.votes.push(that.lastVote);

                //Guardar el array de entities de nuevo y el array votes.
                Agoras.update(
                    { _id: that.agora._id},
                    { $set: { entities: that.agora.entities, votes: that.agora.votes } }
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
