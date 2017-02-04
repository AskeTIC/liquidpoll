import { Meteor } from 'meteor/meteor';
import { Agoras } from '../agoras';

export default function(){
    Meteor.publish('agoras', function(){
        //TODO: Publicar solo las que tenga acceso el userId o todas y limitar la acción de votar (por decidir).
        //En la segunda opción, habría que poner una paginación y buscador, o un mapa del mundo.
        return Agoras.find({}, {fields: {entities: 0}});
    });
    Meteor.publish('entities', function(agoraSlug){
        //TODO: validar agoraSlug
        return Agoras.find({'slug': agoraSlug}, {fields: {entities: 1}});
    });
}
