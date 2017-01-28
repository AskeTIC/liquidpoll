import { Meteor } from 'meteor/meteor';
import { Agoras } from '../agoras';

export default function(){
    Meteor.publish('agoras', function(){
        return Agoras.find({});
    });
    Meteor.publish('agora', function(data){
        return Agoras.findOne({'slug': data.slug });
    });
}
