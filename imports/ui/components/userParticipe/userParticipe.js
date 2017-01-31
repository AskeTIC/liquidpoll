import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './userParticipe.html';

const name = 'userParticipe';

class UserParticipe {
    constructor($stateParams, $scope, $reactive) {
        'ngInject';
        $reactive(this).attach($scope);
        console.log('userParticipe Controller !!!!!!!!!!!!!');
        //TODO: Consultar si el user puede participar en el agora y mostrar un componente u otro.
        //TODO: Consultar participación del usuario en el agora

    }
}

// create a module with a componente
export default angular.module( name, [
    angularMeteor ])
    .component(name, {
        bindings: {
            agora: '&',
        },
        templateUrl: template,
        controller: UserParticipe,
    }
);
