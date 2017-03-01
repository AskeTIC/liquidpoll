import { Meteor } from 'meteor/meteor';

Meteor.publish("user-loggings", function () {
    if (this.userId) {
        return Meteor.users.find({_id: this.userId},{fields: {'loggings': 1, _id : 0}});
    } else {
        this.ready();
    }
});
