import { Mongo } from 'meteor/mongo';
export const SettingsUsers = new Mongo.Collection('settings-users');

SettingsUsers.allow({
    insert(userId, participant) {
        //TODO: Validar el userid y el objeto participante
        //Insertar un user podrá un usuario logueado. Se tendrá que insertar al crear el usuario.
        return (user);
    },
    update(userId, participation, area) {
        //TODO: Validar que el userId, el objeto de participación y el objeto area.
        //Modificar será insertar una participación en algún agora o parliament del usuario.
        //El 'area' será un objeto "type: 'agora' (o parliament)" y "slug : 'argentina'".
        return (participation);
    }
    //No se podrá eliminar de momento.
});
