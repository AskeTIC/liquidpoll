import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './userParticipe.html';

const name = 'userParticipe';

class UserParticipe {
  constructor($stateParams, $scope, $reactive) {
    'ngInject';
    $reactive(this).attach($scope);
    console.log('userParticipe Controller !!!!!!!!!!!!!');
    //TODO: Consultar participantes en Agora.

    this.votes.forEach(function(value, key){});
  }

}

// create a module with a componente
export default angular.module( name, [
    angularMeteor ])
    .component(name, {
        bindings: {
            votes: '<',
        },
        templateUrl: template,
        controller: MenuButtons,
    }
);
