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

    //recoger las entidades del ágora
    //TODO: recoger directamente el array de la BBDD
    //var agora = Agoras.findOne({name: $stateParams.agoraName }, {name: 0, description: 0, entities:1});

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

    this.helpers({
        options() {
            return options;
        },
        agora() {
            return Agoras.findOne({slug: $stateParams.agoraSlug });;
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
        url: '/agoras/:agoraSlug',
        template: '<view-agora></view-agora>'
    });
}
