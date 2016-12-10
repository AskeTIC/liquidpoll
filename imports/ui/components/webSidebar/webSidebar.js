import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
/*
import { name as viewParliamentList } from '../viewParliamentList/viewParliamentList';
import { name as viewAgoraList } from '../viewAgoraList/viewAgoraList';
import { name as viewParliament } from '../viewParliament/viewParliament';
import { name as viewAgora } from '../viewAgora/viewAgora';
*/
import template from './webSidebar.html';

const name = 'webSidebar';

class WebSidebar {
  constructor($stateParams, $scope, $reactive) {
    'ngInject';

  }

}

// create a module with a componente
export default angular.module( name, [
  angularMeteor,
  uiRouter
  //viewAgora,
  //viewParliament,
  //viewAgoraList,
  //viewParliamentList
])
  .component(name, {
    templateUrl: template,
    controller: WebSidebar,
    controllerAs: name
  });
