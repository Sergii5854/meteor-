import {Vocabruary, Training} from "../collections";
import {check} from 'meteor/check'


Meteor.startup(()=>{
    Meteor.methods({
//=== WordAdd jsx ==//
        'word.add'(val) {
            Vocabruary.insert(val);
        },

//=== Training jsx ==//
        'training.check'(val) {
            console.log(val);
            return !!Training.findOne({_id: val._id, ru: val.ru});
        },

//=== Info jsx ==//
        'user.changeUsername'(username) {
            check(username, String);

            if (this.userId) {
                Accounts.setUsername(this.userId, username)
            }
        },

//=== Info jsx ==//
        'user.changeEmail'(email) {
            check(email, String);
            if (this.userId) {
                let currentUserEmail = Meteor.user().emails[0].address;
                console.log(Meteor.user().emails[0].address + " 222222222");
                Accounts.removeEmail(this.userId, currentUserEmail);
                Accounts.addEmail(this.userId, email);
            }
        },
 //=== Ava jsx ==//
        'user.saveAva'(imageBase64Url) {
            check(imageBase64Url, String);
            if (this.userId) {
                Meteor.users.update({_id: this.userId}, {
                    $set: {
                        avaUrl: imageBase64Url
                    }
                }, (err, doc) => {
                    if (err) {
                        Meteor.Error(err);
                    } else {
                        console.log(doc);
                    }
                })
            }
        }   // , <=  === Ava jsx ==//



    }); //Meteor.methods


});




