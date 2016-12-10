import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './viewAgora.html';
const name = 'viewAgora';

class ViewAgora {
  constructor($stateParams, $scope, $reactive) {
    'ngInject';

    this.name = $stateParams.agoraName;

  }
}

// create a module
export default angular.module(name, [
  angularMeteor,
  chartsPie
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
