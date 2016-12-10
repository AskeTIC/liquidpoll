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
        'description': 'Parlamento de Argentina.',
        'entities' : [
          {name: 'Frente para la victoria',
           points: 250,
           percent:null,
           color:"brown" },
          {name: 'Cambiemos',
           points: 200,
           percent:null,
           color:"pink"},
          {name: 'Justicia social',
           points: 30,
           percent:null,
           color:"blue"},
          {name: 'Partido maligno',
           points: 50,
           percent:null,
           color:"lightgreen"},
          {name: 'Iluminatis argentinos',
           points: 250,
           percent:null,
           color:"violet"},
          {name: 'Todo por la plata',
           points: 130,
           percent:null,
           color:"orange"},
          {name: 'Agarralo como puedas',
           points: 25,
           percent:null,
           color:"yellow"},
          {name: 'Los viejos verdes',
           points: 340,
           percent:null,
           color:"green"},
          {name: 'Los jovenes con el pindar rojo',
           points: 400,
           percent:null,
           color:"red"},
          {name: 'Los hombres de negro',
           points: 450,
           percent:null,
           color:"lightblue"}
        ]
      },
      {
        'name': 'españa',
        'description': 'Parlamento de España',
        'entities' : [
          {name: 'Cambiemos durante 200.000 años',
           points: 250,
           percent:null,
           color:"brown" },
          {name: 'Iluminatis del imperio de Espatraña',
           points: 200,
           percent:null,
           color:"pink"},
          {name: 'Partido Podrido',
           points: 30,
           percent:null,
           color:"blue"},
          {name: 'Partido por los animales en el puchero',
           points: 50,
           percent:null,
           color:"lightgreen"},
          {name: 'Justicia social para pablete y sus amigos',
           points: 250,
           percent:null,
           color:"violet"},
          {name: 'Todo por la patria',
           points: 130,
           percent:null,
           color:"orange"},
          {name: 'Agarralo como puedas II',
           points: 25,
           percent:null,
           color:"yellow"},
          {name: 'Los viejos verdes II',
           points: 340,
           percent:null,
           color:"green"},
          {name: 'Los jovenes imperialistas con el pindar rojo',
           points: 400,
           percent:null,
           color:"red"},
          {name: 'Los hombres de negro II',
           points: 450,
           percent:null,
           color:"lightblue"}
        ]
      },
      {
        'name': 'euskadi',
        'description': 'Parlamento vasco.',
        'entities':  [
          {name: 'Partido Regionalista Vasco',
           points: 250,
           percent:null,
           color:"brown" },
          {name: 'Iluminatis vascos',
           points: 200,
           percent:null,
           color:"pink"},
          {name: 'Partido Petaniños',
           points: 30,
           percent:null,
           color:"blue"},
          {name: 'Partido por los animales en el puchero (a la española)',
           points: 50,
           percent:null,
           color:"lightgreen"},
          {name: 'Justicia social para pablete y sus amigos (a la española)',
           points: 250,
           percent:null,
           color:"violet"},
          {name: 'Todo por la patria de al lado',
           points: 130,
           percent:null,
           color:"orange"},
          {name: 'Hartu duzu III',
           points: 25,
           percent:null,
           color:"yellow"},
          {name: 'V de Berdeak III',
           points: 340,
           percent:null,
           color:"green"},
          {name: 'Los jovenes despistados con el pindar rojo',
           points: 400,
           percent:null,
           color:"red"},
          {name: 'Beltzako gizonak III',
           points: 450,
           percent:null,
           color:"lightblue"}
        ]
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
