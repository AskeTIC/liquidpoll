import { Mongo } from 'meteor/mongo';
export const Agoras = new Mongo.Collection('agoras');

Agoras.allow({
    insert(userId, agora) {
        //TODO: Insertar un ágora solo podrá el admin de Acropolis.
        //Tenemos que coger el admin quizás con la colección de Users.
        return (agora);
    },
    update(userId, agora) {
        //TODO: Insertar un ágora solo podrá el admin del ágora.
        //Ese atributo estará en el objeto agora, quizás por que igual no es bueno que exista en cliente.
        return (agora);
    },
    remove(userId, agora) {
        //TODO: Insertar un ágora solo podrá el admin de Acropolis.
        //Tenemos que coger el admin quizás con la colección de Users.
        return (agora);
    }
});
