import { Meteor } from 'meteor/meteor';

Meteor.users.allow({
    update(userId) {
        return (userId);
    }
});
