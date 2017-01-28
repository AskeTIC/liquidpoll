import angular from 'angular';
import angularMeteor from 'angular-meteor';

//TODO: Recibir por get o post el objeto con el 'parli' en lugar de hacer otra consulta a la BBDD
import { Agoras } from '../../../api/agoras/agoras'; //this cursors is going to work with monimongo

//Componentes incluidos (dependencias)
import { name as chartsBars } from '../chartsBars/chartsBars';

import template from './viewAgora.html';
const name = 'viewAgora';

class ViewAgora {
  constructor($stateParams, $scope, $reactive) {
    'ngInject';
    $reactive(this).attach($scope);

    var options = {
        bar : {
            width: 50,
            div: 1.5,
        },
        canvas : {
            width: 1,
            height: 200,
            ctx: '2d'
        }
    }

    //TOKNOW: Que diceferencia hay entre $scope o this con reactive y con agregarlos mediante esta function helpers() ???
    this.helpers({
        agora() {
            return Agoras.findOne({slug: $stateParams.agoraSlug });
        },
        options() {
            return options;
        },
        vote() {
            return function(entity){
                //TODO: Restar el voto anterior del usuario (client)
                this.agora.entities.forEach(function(value, key){
                    //TODO: Angular crea unas claves en los objetos que itera con ngRepeat,
                    //Urigo dice que usarndo los helpers se soluciona, pero no veo como, he tenido que usar el delete.
                    //por lo tanto no estamos libres de que aparezca otra clave de angular que Mongo no permita insertar.
                    delete value.$$hashKey;
                    console.log(value);
                    if(entity.siglas === value.siglas){
                        value.points += 1;
                    }
                })
                Agoras.update(
                    { _id: this.agora._id},
                    { $set: { entities: this.agora.entities
                            }
                    }
                );
            };
        }
    });
  }
}

// create a module
export default angular.module(name, [
        angularMeteor,
        chartsBars
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
        url: '/agoras/:agoraSlug',
        template: '<view-agora></view-agora>'
    });
}
