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

        this.vote = function(entity){
            //TODO: Restar el voto anterior del usuario (client)
            this.entities.forEach(function(value, key){
                //TODO: Angular crea unas claves en los objetos que itera con ngRepeat,
                //Urigo dice que usarndo los helpers se soluciona, pero no veo como, he tenido que usar el delete.
                //por lo tanto no estamos libres de que aparezca otra clave de angular que Mongo no permita insertar.
                delete value.$$hashKey;
                if(entity.siglas === value.siglas){
                    value.points += 1;
                }
                //console.log(value);
            });

            this.onUserVote({$event: {entities: this.entities}});

        };
    }

}

// create a module with a componente
export default angular.module( name, [
    angularMeteor ])
    .component(name, {
        bindings: {
            entities: '<',
            onUserVote: '&',
            type: '&',
        },
        templateUrl: template,
        controller: UserVotes,
    }
);
