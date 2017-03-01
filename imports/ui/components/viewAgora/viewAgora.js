import { Meteor } from 'meteor/meteor';
import angular from 'angular';
import angularMeteor from 'angular-meteor';
import {default as utils} from 'asketic-utils';

import { Agoras } from '../../../api/agoras/agoras'; //this cursors is going to work with monimongo

//Componentes incluidos (dependencias)
import { name as chartsBars } from '../chartsBars/chartsBars';
import { name as userVotes } from '../userVotes/userVotes';

import template from './viewAgora.html';

const name = 'viewAgora';

class ViewAgora {
    constructor($stateParams, $scope, $rootScope, $reactive) {
        'ngInject';
        $reactive(this).attach($scope);
        console.log("viewAgora controller!");
        var that = this;
        console.log($stateParams.agoraSlug);
        //console.log($rootScope.userId);

        //TODO: Conseguir extraer el último voto del usuario con la consulta.
        var userVotes = [];
        var count = -1;
        var foo = Agoras.find({ 'slug': $stateParams.agoraSlug},{fields : {votes: 1}}).fetch();
        foo[0].votes.forEach(function(value, key){
            //console.log(value);
            if(value.user == $rootScope.userId){
                //console.log('coincide!!!');
                userVotes.push(value);
                count +=1;
            }
            //console.log(count);
        })
        //console.log(userVotes);
        var lastVote = userVotes[count];
        console.log(lastVote);

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
        //TODO: Parece que si existen en la vista los atributos agregados al controller con this. No es obligación de usar los helpers para eso al menos.
        this.helpers({
            //Helper principal (agora)
            agora() {
                return Agoras.findOne({'slug': $stateParams.agoraSlug});
            },
            //Helpers para el BarsChart component
            options() {
                //console.log('Helper!!!!!!!!!!!!!!!!!!!!');
                return options;
            },
            //Helpers para el UserParticipe component
            lastVote() {
                //console.log('Helper userVote!!!!');
                return lastVote;
            },
            addVote(){
                return function({vote}){
                    console.log("modificando lastVote e insertandolo!!!!");
                    //Actualizar la variable vote.
                    that.lastVote.date = new Date();
                    that.lastVote.entity = vote.siglas;

                    //introducir el voto en el agora
                    that.agora.votes.push(that.lastVote);

                    //Guardar el array de entities de nuevo y el array votes.
                    Agoras.update(
                        { _id: that.agora._id},
                        { $set: { entities: that.agora.entities} }
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

function config() {
	'ngInject';
}
