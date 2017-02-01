import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import { name as viewParliamentList } from '../viewParliamentList/viewParliamentList';
import { name as viewAgoraList } from '../viewAgoraList/viewAgoraList';
import { name as viewParliament } from '../viewParliament/viewParliament';
import { name as viewAgora } from '../viewAgora/viewAgora';
import { name as menuButtons } from '../menuButtons/menuButtons';


import template from './webMain.html';
const name = 'webMain';

class WebMain {}

// create a module with a componente
export default angular.module(name, [
  uiRouter,
  angularMeteor,
  menuButtons,
  viewAgoraList,
  viewAgora,
  viewParliamentList,
  viewParliament])
  .component(name, {
    template,
    controller: WebMain,
    controllerAs: name
  })
  .config(config)
  .run(run);

  function config($locationProvider, $urlRouterProvider) {
    'ngInject';

    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
  }

  function run($rootScope, $state) {
    'ngInject';

    $rootScope.$on('$stateChangeError', (event, toState, toParams, fromState, fromParams, error) => {
      if (error === 'AUTH_REQUIRED') {
        $state.go('app');
      }
    });
  }
