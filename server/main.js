import { Meteor } from 'meteor/meteor';
import {Parliaments} from '../imports/api/parliaments';
import {Agoras} from '../imports/api/agoras';
import {Surveys} from '../imports/api/surveys';
//console.log(Parliaments);
console.log(Agoras);
Meteor.startup(() => {
  // code to run on server at startup
  if (Parliaments.find().count() === 0) {
    const parliaments = [{
        'name': 'argentina',
        'description': 'Parlamento de Argentina.'
      }, {
        'name': 'españa',
        'description': 'Parlamento de España'
      }, {
        'name': 'euskadi',
        'description': 'Parlamento vasco.'
      }
    ];

    parliaments.forEach((parli) => {
      Parliaments.insert(parli)
    });
  }
  if (Agoras.find().count() === 0) {
    const agoras = [{
        'name': 'argentina',
        'description': 'Ágora argentina.'
      }, {
        'name': 'españa',
        'description': 'Ágora española'
      }, {
        'name': 'euskadi',
        'description': 'Ágora vasca.'
      }
    ];

    agoras.forEach((agora) => {
      Agoras.insert(agora)
    });
  }
});
