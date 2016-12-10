import angular from 'angular';
import angularMeteor from 'angular-meteor';

//TODO: Recibir por get o post el objeto con el 'parli' en lugar de hacer otra consulta a la BBDD
import { Parliaments } from '../../../api/parliaments';

import template from './viewParliament.html';
const name = 'viewParliament';

class ViewParliament {
  constructor($stateParams, $scope, $reactive) {
    'ngInject';
    //var parlis = Parliaments.findOne({name: $stateParams.parliamentName });
    //console.log(parlis);
    //this.par = parlis.parliamentName;
    $reactive(this).attach($scope);

    this.helpers({
      parli() {
        return Parliaments.findOne({name: $stateParams.parliamentName });
      }
    });
  }
}

// create a module
export default angular.module(name, [angularMeteor])
	.component(name, {
		templateUrl: template,
		controllerAs: name,
		controller: ViewParliament
	})
	.config(config);

function config($stateProvider) {
	'ngInject';
  $stateProvider
    .state('parliament', {
      url: '/parlamento/:parliamentName',
      template: '<view-parliament></view-parliament>'
    });
}
