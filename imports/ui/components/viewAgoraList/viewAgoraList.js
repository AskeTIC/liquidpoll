import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './viewAgoraList.html';
const name = 'viewAgoraList';

class ViewAgoraList {
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
