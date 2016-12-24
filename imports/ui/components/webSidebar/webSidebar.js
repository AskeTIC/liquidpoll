import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { name as chartsPie } from '../chartsPie/chartsPie';

import template from './webSidebar.html';

const name = 'webSidebar';

class WebSidebar {
  constructor($stateParams, $scope, $reactive) {
    'ngInject';
    $reactive(this).attach($scope);

    this.helpers({
      idCanvas() {
        return "pie";
      }
    });

  }

}

// create a module with a componente
export default angular.module( name, [
  angularMeteor,
  chartsPie
])
  .component(name, {
    templateUrl: template,
    controller: WebSidebar,
  });
