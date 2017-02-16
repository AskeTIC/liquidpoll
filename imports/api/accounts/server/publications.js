import { Meteor } from 'meteor/meteor';

/*
Meteor.publish("userLoggings", function () {
    if (this.userId) {
        return Meteor.users.find({_id: this.userId},
                                 {fields: {'userLoggings': 1, _id : 0}});
    } else {
        this.ready();
    }
});
*/
