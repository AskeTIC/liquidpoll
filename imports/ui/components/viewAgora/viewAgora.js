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
    constructor($stateParams, $scope, $rootScope, $reactive) {
        'ngInject';
        $reactive(this).attach($scope);
        console.log("viewAgora controller!");
        var that = this;
        //console.log($stateParams.agoraSlug);
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
            width : {
                bar: 3,
                space 1
            }
        }
        /*
        this.change = function(){
            Agoras.update(
                { _id: that.agora._id},
                { $set: { name: 'Argentina'} }
            );
        }
        this.change2 = function(){
            var newAgora = {
                'name': 'Mendoza',
                'slug': 'mendoza'
            };
            that.agora.subagoras.forEach(function(value, key){
                delete value.$$hashKey;
            });
            that.agora.subagoras.push(newAgora);
            Agoras.update(
                { _id: that.agora._id},
                { $set: { subagoras: that.agora.subagoras } }
            );
        }
        this.change3 = function(){
            var newAgora = {
                "name" : "Portugal",
                "slug" : "portugal",
                "description" : "Ágora portuguesa.",
                "entities" : [
                  { "name" : "Cambiemos", "siglas" : "Cambiemos", "points" : 5, "percent" : null, "color" : "blue" },
                  { "name" : "Frente para la victoria","siglas" : "FxV","points" : 2,"percent" : null, "color" : "pink" },
                  { "name" : "Justicia social", "siglas" : "JS", "points" : 3, "percent" : null, "color" : "brown" },
                  { "name" : "Todo por la plata", "siglas" : "TxP", "points" : 10, "percent" : null, "color" : "lightgreen" },
                  { "name" : "Iluminatis argentinos", "siglas" : "Iluminatis", "points" : 12, "percent" : null, "color" : "yellow" },
                  { "name" : "Partido maligno", "siglas" : "PM", "points" : 13, "percent" : null, "color" : "orange" },
                  { "name" : "Agarralo como puedas", "siglas" : "Agarralo", "points" : 7, "percent" : null, "color" : "violet" },
                  { "name" : "Los viejos verdes", "siglas" : "LV", "points" : 4, "percent" : null, "color" : "green" },
                  { "name" : "Los jovenes con el pindar rojo", "siglas" : "PC", "points" : 4, "percent" : null, "color" : "red" },
                  { "name" : "Los hombres de negro", "siglas" : "Sociatas", "points" : 1, "percent" : null, "color" : "lightblue" }
                ],
                "subagoras" : [
                  { "name" : "Cordoba", "slug" : "cordoba" },
                  { "name" : "Buenos Aires", "slug" : "buenos-aires" }
                ],
                "topagoras" : [ ],
                "settings" : { "nodes" : [ 1 ], "area-level" : 4, "area-type" : 3 }
            };
            Agoras.insert(newAgora);
        }
        this.myVar = 10;
        this.autorun(() => {
            console.log('Autorun!!', this.getReactively('myVar'));
            console.log('Lo que sea desde autorun()!!!!');
        });
        this.change4 = function(){
            this.myVar +=1;
        }
        this.foo = 0;
        this.change5 = function(){
            this.foo +=1;
        }
        */
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

function config($stateProvider) {
	'ngInject';
    $stateProvider
        .state('agora', {
            url: '/agoras/:agoraSlug',
            template: '<view-agora></view-agora>'
        });


}
