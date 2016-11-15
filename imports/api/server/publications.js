import {Vocabruary, Training} from "../collections";


Meteor.publish('Vocabruary', function () {
    if (this.userId) {
        return Vocabruary.find();
    } else {
        throw new Meteor.Error('You must authorize!!!')
    }
});

Meteor.publish('user', function () {
    if (this.userId) {
        return Meteor.users.find({_id: this.userId});
    } else {
        throw new Meteor.Error('You must authorize!!!')
    }
});


Meteor.publish('Training', function () {
    if (this.userId) {
        return Training.find();
    } else {
        throw new Meteor.Error('You must authorize for path Training!!!')
    }
});


