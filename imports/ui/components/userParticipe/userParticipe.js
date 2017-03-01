import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { SettingsUsers } from '../../../api/settings-users/settings-users'; //this cursors is going to work with monimongo

import template from './userParticipe.html';

const name = 'userParticipe';

class UserParticipe {
    constructor($stateParams, $scope, $reactive) {
        'ngInject';
        $reactive(this).attach($scope);
        console.log('userParticipe Controller !!!!!!!!!!!!!');
        var that = this;
        console.log(this.slug);
        this.userPart = null;
        this.getReactively('userPart');
        console.log(this.userPart);
        //console.log(Meteor.userId());

        /*
        setTimeout(this.$bindToContext(function(err){
            console.log("setinterval!")
            if(that.userPart === null){
                that.userPart = undefined;
                console.log(that.userPart);
            }else{
                that.userPart = null;
                console.log(that.userPart);
            }
            //console.log(that.num);
        }), 3000);
        */

        /*
        this._getCurrentFakeParticipation = function(){
            console.log("setinterval!")
            if(that.userPart === null){
                that.userPart = undefined;
                console.log(that.userPart);
            }else{
                that.userPart = null;
                console.log(that.userPart);
            }
        }*/

        /* si nos logueamos en una vista que no tenga instanciado este componente no se capta el evento 'user-participe' y no se cogen los datos.
           Si solo usamos el $onInit() y nos hemos logueado en una vista que instancia este scope, en $onInit() aún no tenemos los datos de la subscripcion.
        */
        this.$onInit = function(changes){
            console.log('$onInit userParticipe!! XD');
            //console.log(changes);
            that._getParticipation(that.$bindToContext(that._getCurrentParticipation));
        }

        $scope.$on('user-participe', function(){
            console.log('$on -user-participe- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
            that._getParticipation(that.$bindToContext(that._getCurrentParticipation));
        });

        this._getParticipation = function(callback){
            var participation = SettingsUsers.find({'_id': Meteor.userId()}).fetch();
            //console.log(participation);
            if(participation.length > 0){
                console.log('hay datos, por que hay login XD');
                //TODO: Pasarle agoras o parliaments.
                callback(participation[0].participation_agoras);
            }else{
                console.log('no hay datos, por que no hay login :(');
            }
        }

        this._getCurrentParticipation = function(participation){
            //console.log(participation);
            if(participation.length > 0){
                participation = participation.filter(function(element){
                    return element.slug === that.slug;
                });

                if(participation.length > 0){
                    switch (participation[0].status) {
                        case -1:
                            console.log("provisionalmente no puedes participar, baneado");
                            that.userPart = -1;
                            console.log(that.userPart);
                            break;
                        case 0:
                            console.log('puedes participar!!');
                            that.userPart = undefined;
                            console.log(that.userPart);
                            break;
                        case 1:
                            console.log('hay participación');
                            that.userPart = participation[0].current;
                            console.log(that.userPart);
                            break;
                        default:
                            console.log('ERROR: Debería de haber un status aceptado');
                    }
                }else{
                    console.log("no puedes participar pero puedes compartir");
                    that.userPart = 0;
                    console.log(that.userPart);
                }
            }else{
                console.log("ERROR: Debería de haber participación");
            }
        }

        //Solo observa los bindings
        this.$onChanges = function(changes){
            console.log('On Changes desde userParticipe!!');
            console.log(changes);
            //this.$apply();
        }
    }
}

// create a module with a componente
export default angular.module( name, [
    angularMeteor ])
    .component(name, {
        bindings: {
            slug: '@'
        },
        template,
        controller: UserParticipe
    }
);
