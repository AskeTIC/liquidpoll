import { Meteor } from 'meteor/meteor';
import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import { SettingsUsers } from '../../../api/settings-users/settings-users';


import template from './viewUserDashboard.html';
const name = 'viewUserDashboard';

class ViewUserDashboard {
    constructor($stateParams, $scope, $rootScope, $reactive) {
        'ngInject';
        $reactive(this).attach($scope);
        var that = this;
        console.log(`viewUserDashboard() controller`);
        console.log($stateParams);
        this.helpers({
            user(){
                return $stateParams.user.profile; 
            }
        });
    }
}

// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter])
	.component(name, {
		template,
		controllerAs: name,
		controller: ViewUserDashboard
	})
	.config(config)
    .run(run);

function config($stateProvider) {
    'ngInject';
    console.log(`config() de viewUserDashboard.........`);
}

function run(){
    'ngInject';
    console.log(`run() de viewUserDashboard........`);
}
