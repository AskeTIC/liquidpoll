import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import { Agoras } from '../../../api/agoras/agoras'; //this cursors is going to work with monimongo
import { Meteor } from 'meteor/meteor';

Meteor.subscribe('agoras', {
    onReady: function(){
        console.log("Subscrito a las "+ Agoras.find({}).count()+ " agoras!!");
    }
})
//Componentes incluidos (dependencias)
import { name as chartsBars } from '../chartsBars/chartsBars';
//import { name as chartsPie } from '../chartsPie/chartsPie';

import template from './viewAgoraList.html';
const name = 'viewAgoraList';

class ViewAgoraList {
  constructor($stateParams, $scope, $reactive) {
    'ngInject';
    $reactive(this).attach($scope);

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

    var agora = { "name" : "Guatemala",
                  "slug" : "guatemala",
                  "description" : "Ágora guatemalteca.",
                  "entities" : [
                      { "name" : "Cambiemos", "siglas" : "Cambiemos", "points" : 5, "percent" : null, "color" : "blue" },
                      { "name" : "Frente para la victoria","siglas" : "FxV","points" : 2,"percent" : null, "color" : "pink" },
                      { "name" : "Justicia social", "siglas" : "JS", "points" : 3, "percent" : null, "color" : "brown" },
                      { "name" : "Todo por la plata", "siglas" : "TxP", "points" : 10, "percent" : null, "color" : "lightgreen" },
                      { "name" : "Iluminatis argentinos", "siglas" : "Iluminatis", "points" : 12, "percent" : null, "color" : "yellow" },
                      { "name" : "Partido maligno", "siglas" : "PM", "points" : 13, "percent" : null, "color" : "orange" },
                      { "name" : "Agarralo como puedas", "siglas" : "Agarralo", "points" : 7, "percent" : null, "color" : "violet" },
                      { "name" : "Los viejos verdes", "siglas" : "LV", "points" : 4, "percent" : null, "color" : "green" },
                      { "name" : "Los jovenes con el pindar rojo", "siglas" : "PC", "points" : 4, "percent" : null, "color" : "red" },
                      { "name" : "Los hombres de negro", "siglas" : "Sociatas", "points" : 1, "percent" : null, "color" : "lightblue" }
                  ],
                  "subagoras" : [
                      { "name" : "Cordoba", "slug" : "cordoba" },
                      { "name" : "Buenos Aires", "slug" : "buenos-aires" }
                  ],
                  "topagoras" : [ ],
                  "settings" : { "nodes" : [ 1 ], "area-level" : 4, "area-type" : 3 }
              };



    //TOKNOW: Los helpers se ejecutan cunado se crea el controller, para poner datos o métodos en disposicion de la vista, sin embargo si
    this.helpers({
        options() {
            return options;
        },
        //TODO: Si cambia un valor debe de cambiar el tiempo real.
        agoras() {
            //TODO: Extraer solo las que pueda ver el user, y ordenar de level area más grande a menos.
            return Agoras.find({});
        },
        addAgora() {
            console.log('preparando helper addAgora');
            return function(){
                console.log('AddAgora!!!!');
                Agoras.insert(agora);
            }
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
