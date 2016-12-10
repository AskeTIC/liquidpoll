import angular from 'angular';
import angularMeteor from 'angular-meteor';

//TODO: Recibir por get o post el objeto con el 'parli' en lugar de hacer otra consulta a la BBDD
import { Agoras } from '../../../api/agoras';

import template from './viewAgora.html';
const name = 'viewAgora';

class ViewAgora {
  constructor($stateParams, $scope, $reactive) {
    'ngInject';

    this.name = $stateParams.agoraName;
    $reactive(this).attach($scope);

    this.helpers({
      agora() {
        return Agoras.findOne({name: $stateParams.agoraName });
      }
    });
  }
}

// create a module
export default angular.module(name, [
  angularMeteor
  ])
	.component(name, {
		templateUrl: template,
		controllerAs: name,
		controller: ViewAgora
	})
	.config(config);

function config($stateProvider) {
	'ngInject';
  $stateProvider
    .state('agora', {
      url: '/agora/:agoraName',
      template: '<view-agora></view-agora>'
    });
}
