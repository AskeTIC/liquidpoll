import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './menuButtons.html';

const name = 'menuButtons';

class MenuButtons {
  constructor($stateParams, $scope, $reactive) {
    'ngInject';
    $reactive(this).attach($scope);
    //console.log('menuButtons Controller !!!!!!!!!!!!!');
    //console.log(this.items);

    this.$onChanges = function(changes){
        console.log('On Changes in menu Buttons!! XD');
        //console.log(changes);
    }


  }

}

// create a module with a componente
export default angular.module( name, [
  angularMeteor ])
    .component(name, {
        transclude: true,
        bindings: {
            items: '<',
            classes: '@'
        },
        template,
        controller: MenuButtons,
    }
);
