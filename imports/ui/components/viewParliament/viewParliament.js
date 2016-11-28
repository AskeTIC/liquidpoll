import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './viewParliament.html';
const name = 'viewParliament';

class ViewParliament {
  constructor($stateParams, $scope, $reactive) {
    'ngInject';

    this.parliamentName = $stateParams.parliamentName;

    $reactive(this).attach($scope);
    this.helpers({
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
