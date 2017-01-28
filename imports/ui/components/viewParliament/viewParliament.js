import angular from 'angular';
import angularMeteor from 'angular-meteor';

//TODO: Recibir por get o post el objeto con el 'parli' en lugar de hacer otra consulta a la BBDD
import { Parliaments } from '../../../api/parliaments/parliaments'; //this cursors is going to work with monimongo

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
        return Parliaments.findOne({slug: $stateParams.parliSlug });
      }
    });
  }
}

// create a module
export default angular.module(name, [angularMeteor])
	.component(name, {
		templateUrl: template,
		controller: ViewParliament
	})
	.config(config);

function config($stateProvider) {
	'ngInject';
  $stateProvider
    .state('parliament', {
      url: '/parlamentos/:parliSlug',
      template: '<view-parliament></view-parliament>'
    });
}
