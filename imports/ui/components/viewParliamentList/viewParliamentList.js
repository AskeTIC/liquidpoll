import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './viewParliamentList.html';
const name = 'viewParliamentList';

class ViewParliamentList {
  constructor($stateParams, $scope, $reactive) {
    'ngInject';
    $reactive(this).attach($scope);
    this.helpers({
    });
  }
}

// create a module
export default angular.module(name, [angularMeteor, uiRouter])
	.component(name, {
		templateUrl: template,
		controllerAs: name,
		controller: ViewParliamentList
	})
	.config(config);

function config($stateProvider) {
	'ngInject';
  $stateProvider
    .state('parliaments', {
      url: '/parliaments',
      template: '<view-parliament-list></view-parliament-list>'
    });
}
