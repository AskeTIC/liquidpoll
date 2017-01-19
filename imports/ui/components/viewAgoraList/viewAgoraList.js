import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import { Agoras } from '../../../api/agoras';

//Componentes incluidos (dependencias)
import { name as chartsBars } from '../chartsBars/chartsBars';
//import { name as chartsPie } from '../chartsPie/chartsPie';

import template from './viewAgoraList.html';
const name = 'viewAgoraList';

class ViewAgoraList {
  constructor($stateParams, $scope, $reactive) {
    'ngInject';
    $reactive(this).attach($scope);

    var options = {
        bar : {
            width: 30,
            div: 2,
        },
        canvas : {
            width: 1,
            height: 1,
            ctx: '2d'
        }
    }

    this.helpers({
        options() {
            return options;
        },
        //TODO: Si cambia un valor debe de cambiar el tiempo real.
        agoras() {
            //TODO: Extraer solo las que pueda ver el user, y ordenar de level area más grande a menos.
            return Agoras.find({});
        }
    });
  }
}

// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter,
  chartsBars])
	.component(name, {
		templateUrl: template,
		controllerAs: name,
		controller: ViewAgoraList
	})
	.config(config);

function config($stateProvider) {
	'ngInject';
  $stateProvider
    .state('agoras', {
      url: '/agoras',
      template: '<view-agora-list></view-agora-list>'
    });
}
