import { Meteor } from 'meteor/meteor';
import {Parliaments} from '../imports/api/parliaments';
import {Agoras} from '../imports/api/agoras';
import {Surveys} from '../imports/api/surveys';
//console.log(Parliaments);
//console.log(Agoras);
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
           color:"orange"}
        ]
      },
      {
        'name': 'españa',
        'description': 'Parlamento de España',
        'entities' : [
          {name: 'PP',
           points: 250,
           percent:null,
           color:"brown" },
          {name: 'PSOE',
           points: 200,
           percent:null,
           color:"pink"},
          {name: 'ERC',
           points: 30,
           percent:null,
           color:"blue"},
          {name: 'PACMA',
           points: 50,
           percent:null,
           color:"lightgreen"},
          {name: 'Unidos Podemos',
           points: 220,
           percent:null,
           color:"violet"},
          {name: 'Ciudadanos',
           points: 130,
           percent:null,
           color:"orange"}
        ]
      },
      {
        'name': 'euskadi',
        'description': 'Parlamento vasco.',
        'entities':  [
          {name: 'PNV',
           points: 250,
           percent:null,
           color:"brown" },
          {name: 'EH Bildu',
           points: 200,
           percent:null,
           color:"pink"},
          {name: 'Ciudadanos',
           points: 30,
           percent:null,
           color:"blue"},
          {name: 'PSOE',
           points: 50,
           percent:null,
           color:"lightgreen"},
          {name: 'Elkarrekin Podemos',
           points: 250,
           percent:null,
           color:"violet"},
          {name: 'PP',
           points: 130,
           percent:null,
           color:"orange"}
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
        'description': 'Ágora argentina.',
        'entities' : [
          {name: 'Cambiemos',
           points: 250,
           percent:null,
           color:"blue" },
          {name: 'Frente para la victoria',
           points: 200,
           percent:null,
           color:"pink"},
          {name: 'Justicia social',
           points: 30,
           percent:null,
           color:"brown"},
          {name: 'Todo por la plata',
           points: 50,
           percent:null,
           color:"lightgreen"},
          {name: 'Iluminatis argentinos',
           points: 250,
           percent:null,
           color:"yellow"},
          {name: 'Partido maligno',
           points: 130,
           percent:null,
           color:"orange"},
          {name: 'Agarralo como puedas',
           points: 25,
           percent:null,
           color:"violet"},
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
        'description': 'Ágora española',
        'entities' : [
          {name: 'Cambiemos durante 200.000 años',
           points: 250,
           percent:null,
           color:"blue" },
          {name: 'Iluminatis del imperio de Espatraña',
           points: 200,
           percent:null,
           color:"pink"},
          {name: 'Partido Podrido',
           points: 30,
           percent:null,
           color:"brown"},
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
           color:"red"},
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
           color:"orange"},
          {name: 'Los hombres de negro II',
           points: 450,
           percent:null,
           color:"lightblue"}
        ]
      },
      {
        'name': 'euskadi',
        'description': 'Ágora vasca.',
        'entities':  [
          {name: 'Beltzako gizonak III',
           points: 250,
           percent:null,
           color:"lightblue" },
          {name: 'Iluminatis vascos',
           points: 200,
           percent:null,
           color:"brown"},
          {name: 'Partido Petaniños',
           points: 30,
           percent:null,
           color:"blue"},
          {name: 'Hartu duzu III',
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
          {name: 'Partido por los animales en el puchero (a la española)',
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
          {name: 'Partido Regionalista Vasco',
           points: 450,
           percent:null,
           color:"pink"}
        ]
      }
    ];
    agoras.forEach((agora) => {
      Agoras.insert(agora)
    });
  }
  if (Surveys.find().count() === 0) {
    const surveys = [{
        'context': {type: 'agora', name: 'españa'},
        'question': '¿Estas de acuerdo con la abstención del PSOE ?',
        'answers' : [
          {name: 'SI',
           points: 250,
           percent:null,
           color:"green" },
          {name: 'NO',
           points: 200,
           percent:null,
           color:"red"},
          {name: 'Me da igual',
           points: 30,
           percent:null,
           color:"lightblue"}
        ]
      },
      {
        'context': {type: 'agora', name: 'euskadi'},
        'question': '¿Estarías a favor de la independencia de Euskadi?',
        'answers' : [
          {name: 'Si, dependiendo las circustáncias',
           points: 250,
           percent:null,
           color:"lightgreen" },
          {name: 'Si, en todo caso',
           points: 200,
           percent:null,
           color:"green"},
          {name: 'No, en ningun caso',
           points: 30,
           percent:null,
           color:"red"},
          {name: 'Me da igual',
           points: 50,
           percent:null,
           color:"lightblue"}
        ]
      },
      {
        'context': {type: 'parliament', name: 'euskadi'},
        'question': '¿Estas a favor del derecho de autodeterminación de Euskadi?',
        'answers' : [
          {name: 'Si, y para todas las regiones de España',
           points: 250,
           percent:null,
           color:"lightgreen" },
          {name: 'Si',
           points: 200,
           percent:null,
           color:"green"},
          {name: 'No',
           points: 30,
           percent:null,
           color:"red"},
          {name: 'Me da igual',
           points: 50,
           percent:null,
           color:"lightblue"}
        ]
      },
      {
        'context': {type: 'parliament', name: 'euskadi'},
        'question': '¿Apoyas la decisión de no investigar en caso Bidegi?',
        'answers' : [
          {name: 'Si',
           points: 20,
           percent:null,
           color:"green"},
          {name: 'No',
           points: 3000,
           percent:null,
           color:"red"},
          {name: 'Me da igual',
           points: 50,
           percent:null,
           color:"lightblue"}
        ]
      }
    ];
    surveys.forEach((agora) => {
      Surveys.insert(agora)
    });
  }
});
