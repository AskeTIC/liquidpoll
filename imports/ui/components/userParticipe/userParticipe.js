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
        this.userParticipation;
        //console.log(this.agora)
        //TOKNOW: Si no espero a un evento de que han llegado los datos, se muestran por la reactividad,
        //pero no puedo trabajar con el cursor puesto que no han llegado los datos.
        //TOKNOW: Tampoco puede ponerlo en el helper puesto que se pretende renderizar antes del evento y es undefined.
        $scope.$on('user-participe', function(event){
            //Mongo no permite extraer en la proyección un objeto de un array y evitaría recorrer tanto después.
            //TODO: Mejorar si se puede.
            var participation = SettingsUsers.findOne({}, {fields : { 'participation-agoras': 1}});
            console.log(participation);
            participation["participation-agoras"].forEach(function(value, key){
                console.log('FOR EACH!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
                console.log(value);
                if(value.name == that.agora){
                    if(value.current.agoraSlug !== ''){
                        that.userParticipation = value;
                        console.log(that.userParticipation);
                    }else{
                        //TODO: Cuando se crea el user, y se le localiza,
                        //tiene que crearse el objeto de cada agora, con current con strings vacios.
                        console.log('puedes participar!!');
                    }
                }else{
                    //No puedes participar
                    console.log('NO, puedes participar!!');
                    that.userParticipation = null;
                }
            });
        });

        this.helpers({
        });
    }
}

// create a module with a componente
export default angular.module( name, [
    angularMeteor ])
    .component(name, {
        bindings: {
            agora: '@',
        },
        template,
        controller: UserParticipe
    }
);
