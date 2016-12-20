import { Meteor } from 'meteor/meteor';
import {Settings} from '../imports/api/settings';
import {Parliaments} from '../imports/api/parliaments';
import {Agoras} from '../imports/api/agoras';
import {Surveys} from '../imports/api/surveys';
//console.log(Parliaments);
//console.log(Agoras);
Meteor.startup(() => {
  // code to run on server at startup
  if(Settings.find().count() === 0){
    const settings = [{
      'node' : 0,
      'settings' : {
        'area' : {
          'barrio'    : 1, //conjunto de calles y/o parcelas de terreno (distritos).
          'municipio' : 2, //conjunto de barrios (ciudad, pueblo, villa, etc...).
          'provincia' : 3, //conjunto de municipios ().
          'state'     : 4, //conjunto de provincias (comunidades autónomicas, regiones culturales, etc..).
          'country'   : 5, //conjunto de estados (algunos paises es conjunto de privincias, no tienen estados).
          'federation': 6  //conjunto de paises y/o estados y/o provincias (Rusia tiene de los 3 tipos).
        },
        'types' : {
          'representative' : 1, //representative (la mierda actual)
          'direct'         : 2, //representative but direct (decisiones importantes por referendums)
          'liquid'         : 3, //liquid (todos proponemos y todos decidimos)
          'delegated'      : 4  //liquid but delegated (algunas personas delegan en otras ciertas decisiones)
        }
      }
    }];
    settings.forEach((parli) => {
      Settings.insert(parli);
    });
  }
  if(Parliaments.find().count() === 0) {
    const parliaments = [{
        'name': 'Argentina',
        'slug': 'argentina',
        'description': 'República de Argentina.',
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
        ],
        'settings' : {
          'nodes' : [0],
          'area' : 5,
          'type'  : 1
        }
      },
      {
        'name': 'España',
        'slug': 'españa',
        'description': 'Reino de España',
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
        ],
        'settings' : {
          'nodes' : [0],
          'area' : 5,
          'type'  : 1
        }
      },
      {
        'name': 'Euskadi',
        'slug': 'euskadi',
        'description': 'Comunidad Autónoma del País Vasco',
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
        ],
        'settings' : {
          'nodes' : [0],
          'area' : 4,
          'type' : 1
        }
      }
    ];
    parliaments.forEach((parli) => {
      Parliaments.insert(parli)
    });
  }
  if(Agoras.find().count() === 0) {
    const agoras = [{
        'name': 'Argentina',
        'slug': 'argentina',
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
        ],
        'settings' : {
          'nodes' : [0],
          'level' : 5,
          'type'  : 3
        }
      },
      {
        'name': 'España',
        'slug': 'españa',
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
        ],
        'settings' : {
          'nodes' : [0],
          'area'  : 5,
          'type'  : 3
        }
      },
      {
        'name': 'Euskadi',
        'slug': 'euskadi',
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
        ],
        'settings' : {
          'nodes' : [0],
          'area'  : 4,
          'type'  : 3
        }
      }
    ];
    agoras.forEach((agora) => {
      Agoras.insert(agora)
    });
  }
  if(Surveys.find().count() === 0) {
    const surveys = [{
        'scope': {
          types: [1],
          slug: ['españa']
        },
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
        'scope': {
          types: [3],
          slug: ['euskadi']
        },
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
        'scope': {
          types: [1],
          slug: ['euskadi']
        },
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
        'scope': {
          types: [1],
          slug: ['euskadi']
        },
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
    surveys.forEach((survey) => {
      Surveys.insert(survey)
    });
  }
});
