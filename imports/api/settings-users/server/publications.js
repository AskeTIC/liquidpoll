import { Meteor } from 'meteor/meteor';
import {SettingsUsers} from '../settings-users';

export default function(){
    //TODO: Podría valer para la subscripcion de parliaments recibiendo un string.
    Meteor.publish('user-participe', function(){
        if (this.userId) {
            return SettingsUsers.find({'_id': this.userId}, {fields: {'participation-agoras': 1}});
        } else {
            this.ready();
        }
    });
}
