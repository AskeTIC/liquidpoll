import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import { Agoras } from '../../../api/agoras/agoras'; //this cursors is going to work with monimongo

//Componentes incluidos (dependencias)
import { name as chartsBars } from '../chartsBars/chartsBars';
//import { name as chartsPie } from '../chartsPie/chartsPie';

import template from './viewAgoraList.html';
const name = 'viewAgoraList';

class ViewAgoraList {
  constructor($stateParams, $scope, $reactive) {
    'ngInject';
    $reactive(this).attach($scope);

    this.subscribe('agoras', null, {
        onStart: function () {
          console.log("Subscrito a todas las agoras");
        },
        onReady: function () {
          console.log("Preparada la subscripcion y los items han llegado");
          //subscriptionHandle.stop();  // Stopping the subscription, will cause onStop to fire
        },
        onStop: function (error) {
          if (error) {
            console.log('An error happened - ', error);
          } else {
            console.log('The subscription stopped');
          }
        }
    })

    //Options para la creación de la chart.
    var options = {
        bar : {
            width: 22,
            div: 1,
        },
        canvas : {
            width: 1,
            height: 1,
            ctx: '2d'
        }
    }

    this.$onChanges = function(changes){
        console.log('On Changes in viewAgoraList!!');
        //TODO: Emitir este evento cuando cambia los datos de la susbcripción.
        $scope.$broadcast('changes-in-agoras'); //Esto es para un solo cliente, no hay sincronización.
    }

    this.helpers({
        options() {
            return options;
        },
        agoras() {
            //TODO: Extraer solo las que pueda ver el user, y ordenar de level area más grande a menos (por decidir).
            return Agoras.find({});
        }
    });
  }
}

// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter,
  chartsBars])
	.component(name, {
		template,
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
