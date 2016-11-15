import {Mongo} from 'meteor/mongo'
const Vocabruary = new Mongo.Collection('vocabruary');
const Training = new Mongo.Collection('training');

export {Vocabruary, Training};