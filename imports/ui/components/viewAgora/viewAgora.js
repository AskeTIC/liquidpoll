import angular from 'angular';
import angularMeteor from 'angular-meteor';

//TODO: Recibir por get o post el objeto con el 'parli' en lugar de hacer otra consulta a la BBDD
import { Agoras } from '../../../api/agoras';

//Componentes incluidos (dependencias)
import { name as chartsBars } from '../chartsBars/chartsBars';

import template from './viewAgora.html';
const name = 'viewAgora';

class ViewAgora {
  constructor($stateParams, $scope, $reactive) {
    'ngInject';

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
  angularMeteor,
  chartsBars
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
