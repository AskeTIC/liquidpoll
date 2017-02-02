import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './userVotes.html';

const name = 'userVotes';

class UserVotes {
    constructor($stateParams, $scope, $reactive) {
        'ngInject';
        $reactive(this).attach($scope);
        console.log('userVotes Controller !!!!!!!!!!!!!');
        var that = this;
        //console.log(this.entities);
        //console.log(this.lastVote);

        //TODO: Dependiendo el type de votación vote deberá de funcionar de una manera u otra
        //o usar un servicio con métodos para cada type.
        this.vote = function(entity){
            that.entities.forEach(function(value, key){
                //TODO: Angular crea unas claves en los objetos que itera con ngRepeat,
                //Urigo dice que usarndo los helpers se soluciona, pero no veo como, he tenido que usar el delete.
                //por lo tanto no estamos libres de que aparezca otra clave de angular que Mongo no permita insertar.
                delete value.$$hashKey;
                if(entity.siglas === value.siglas){
                    console.log('sumado voto!!');
                    value.points += 1;
                    //console.log(value);
                }
                if(that.lastVote.entity === value.siglas){
                    console.log('eliminado voto!!');
                    value.points = value.points - 1;
                    //console.log(value);
                }
            });
            this.lastVote.entity = entity.siglas;
            that.onUserVote({$event: {vote: entity}});
        };
    }

}

// create a module with a componente
export default angular.module( name, [
    angularMeteor ])
    .component(name, {
        bindings: {
            entities: '<',
            votes: '<',
            lastVote: '<',
            onUserVote: '&',
            type: '@', //TODO: future, type vote (Borda, Unique, Multiple, Multiple Rating, etc...)
            test: '@'
        },
        template,
        controller: UserVotes,
    }
);
