import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import { Parliaments } from '../../../api/parliaments';

import template from './viewParliamentList.html';
const name = 'viewParliamentList';

class ViewParliamentList {
  constructor($stateParams, $scope, $reactive) {
    'ngInject';
    $reactive(this).attach($scope);
    //console.log(Parliaments);

    this.helpers({
      parlis() {
        return Parliaments.find({});
      }
    });
  }
}

// create a module
export default angular.module(name, [angularMeteor, uiRouter])
	.component(name, {
		templateUrl: template,
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
