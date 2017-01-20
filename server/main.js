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
            'provincia' : 3, //conjunto de municipios (condado en USA por ejemplo).
            'country'   : 4, //conjunto de provincias (State en USA, comunidades autónomás en España, republica en Rusia, por ejemplo).
            'federation': 5  //conjunto de estados o paises (Rusia, USA, España, etc...).
        },
        'area-type' : {
            'representative' : 1, //representative (la mierda actual)
            'direct'         : 2, //representative but direct (decisiones importantes por referendums)
            'liquid'         : 3, //liquid (todos proponemos y todos decidimos)
            'delegated'      : 4  //liquid but delegated (algunas personas delegan en otras ciertas decisiones)
        },
        'entity-type': {
            'agrupación': 1,
            'partido'   : 2,
            'coalición' : 3,
            'absorbido' : 4
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
           points: 15,
           percent:null,
           color:"brown" },
          {name: 'Cambiemos',
           points: 4,
           percent:null,
           color:"pink"},
          {name: 'Justicia social',
           points: 3,
           percent:null,
           color:"blue"},
          {name: 'Partido maligno',
           points: 5,
           percent:null,
           color:"lightgreen"},
          {name: 'Iluminatis argentinos',
           points: 2,
           percent:null,
           color:"violet"},
          {name: 'Todo por la plata',
           points: 1,
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
           points: 0,
           percent:null,
           color:"brown" },
          {name: 'PSOE',
           points: 2,
           percent:null,
           color:"pink"},
          {name: 'ERC',
           points: 3,
           percent:null,
           color:"blue"},
          {name: 'PACMA',
           points: 5,
           percent:null,
           color:"lightgreen"},
          {name: 'Unidos Podemos',
           points: 12,
           percent:null,
           color:"violet"},
          {name: 'Ciudadanos',
           points: 7,
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
           points: 5,
           percent:null,
           color:"brown" },
          {name: 'EH Bildu',
           points: 15,
           percent:null,
           color:"pink"},
          {name: 'Ciudadanos',
           points: 0,
           percent:null,
           color:"blue"},
          {name: 'PSOE',
           points: 2,
           percent:null,
           color:"lightgreen"},
          {name: 'Elkarrekin Podemos',
           points: 10,
           percent:null,
           color:"violet"},
          {name: 'PP',
           points: 3,
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
    const agoras = [
        {
        'name': 'Argentina',
        'slug': 'argentina',
        'description': 'Ágora argentina.',
        'entities' : [
            {
                name: 'Cambiemos',
                siglas: 'Cambiemos',
                points: 5,
                percent:null,
                color:"blue"
            },
            {
                name: 'Frente para la victoria',
                siglas: 'FxV',
                points: 2,
                percent:null,
                color:"pink"
            },
            {
                name: 'Justicia social',
                siglas: 'JS',
                points: 3,
                percent:null,
                color:"brown"
            },
            {
                name: 'Todo por la plata',
                siglas: 'TxP',
                points: 10,
                percent:null,
                color:"lightgreen"
            },
            {
                name: 'Iluminatis argentinos',
                siglas: 'Iluminatis',
                points: 12,
                percent:null,
                color:"yellow"
            },
            {
                name: 'Partido maligno',
                siglas: 'PM',
                points: 13,
                percent:null,
                color:"orange"
            },
            {
                name: 'Agarralo como puedas',
                siglas: 'Agarralo',
                points: 7,
                percent:null,
                color:"violet"
            },
            {
                name: 'Los viejos verdes',
                siglas: 'LV',
                points: 4,
                percent:null,
                color:"green"
            },
            {
                name: 'Los jovenes con el pindar rojo',
                siglas: 'PC',
                points: 4,
                percent:null,
                color:"red"
            },
            {
                name: 'Los hombres de negro',
                siglas: 'Sociatas',
                points: 1,
                percent:null,
                color:"lightblue"
            }
        ],
        'subagoras': [
            {
                'name': 'Cordoba',
                'slug': 'cordoba'
            },
            {
                'name': 'Buenos Aires',
                'slug': 'buenos-aires'
            }
        ],
        'settings' : {
          'nodes' : [1],
          'area'  : 4,
          'type'  : 3
        }
      },
      {
        'name': 'España',
        'slug': 'españa',
        'description': 'Ágora española',
        'entities' : [
            {
                name: 'Cambiemos durante 200.000 años',
                siglas: 'EH Bildu',
                points: 2,
                percent:null,
                color:"blue"
            },
            {
                name: 'Iluminatis del imperio de Espatraña',
                siglas: 'PSOE',
                points: 2,
                percent:null,
                color:"pink"},
            {
                name: 'Partido Podrido',
                siglas: 'PP',
                points: 3,
                percent:null,
                color:"brown"
            },
            {
                name: 'Partido por los animales en el puchero',
                siglas: 'PACMA',
                points: 5,
                percent:null,
                color:"lightgreen"
            },
            {
                name: 'Justicia social para pablete y sus amigos',
                siglas: 'UP',
                points: 10,
                percent:null,
                color:"violet"
            },
            {
                name: 'Todo por la patria',
                siglas: 'PCPE',
                points: 13,
                percent:null,
                color:"red"
            },
            {
                name: 'Agarralo como puedas II',
                siglas: 'JxS',
                points: 15,
                percent:null,
                color:"yellow"
            },
            {
                name: 'Los viejos verdes II',
                siglas: 'Equo',
                points: 9,
                percent:null,
                color:"green"
            },
            {
                name: 'Los jovenes imperialistas con el pindar rojo',
                siglas: 'Cs',
                points: 4,
                percent:null,
                color:"orange"
            },
            {
                name: 'Los hombres de negro II',
                siglas: 'PNV',
                points: 8,
                percent:null,
                color:"lightblue"
            }
        ],
        'subagoras': [
            {
                'name': 'Madrid',
                'slug': 'madrid'
            },
            {
                'name': 'Castilla la Mancha',
                'slug': 'castilla-la-mancha'
            },
            {
                'name': 'Euskadi',
                'slug': 'euskadi'
            }
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
            {
                name: 'Beltzako gizonak III',
                siglas: 'PNV',
                points: 5,
                percent:null,
                color:"lightblue"
            },
            {
                name: 'Iluminatis vascos',
                siglas: 'EH Bildu',
                points: 14,
                percent:null,
                color:"brown"},
            {
                name: 'Partido Petaniños',
                siglas: 'PP',
                points: 3,
                percent:null,
                color:"blue"
            },
            {
                name: 'Hartu duzu III',
                siglas: 'PSOE',
                points: 5,
                percent:null,
                color:"lightgreen"},
            {
                name: 'Justicia social para pablete y sus amigos (a la española)',
                siglas: 'UP',
                points: 10,
                percent:null,
                color:"violet"
            },
            {
                name: 'Todo por la patria de al lado',
                siglas: 'Cs',
                points: 1,
                percent:null,
                color:"orange"
            },
            {
                name: 'Partido por los animales en el puchero (a la española)',
                siglas: 'PACMA',
                points: 4,
                percent:null,
                color:"yellow"
            },
            {
                name: 'V de Berdeak III',
                siglas: 'Equo',
                points: 8,
                percent:null,
                color:"green"},
            {
                name: 'Los jovenes despistados con el pindar rojo',
                siglas: 'PCPE',
                points: 0,
                percent:null,
                color:"red"},
            {
                name: 'Partido Regionalista Vasco',
                siglas: 'PNV',
                points: 6,
                percent:null,
                color:"pink"}
        ],
        'subagoras': [
            {
                'name': 'Araba',
                'slug': 'araba'
            },
            {
                'name': 'Bizkaia',
                'slug': 'bizkaia'
            },
            {
                'name': 'Gipuzkoa',
                'slug': 'gipuzkoa'
            }
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
        'areas': {
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
