import { Project } from '../../interfaces/project.interface';

export let PROJECTS: Project[] = [{
  'id': '#project16',
  'name': 'This Portfolio',
  'image': '../../../assets/img/svg/projects/portfoliov3.svg',
  'featured': true,
  'active': true,
  'category': 'Portfolio',
  'company': null,
  'client': null,
  'desc': '#projectDescPortfolio3',
  'techs': [
    {
      'name': 'Angular',
      'logo': '../../../assets/img/svg/skills/angular.svg'
    },
    {
      'name': 'Sass',
      'logo': '../../../assets/img/svg/skills/Sass.svg'
    },
    {
      'name': 'Gulp',
      'logo': '../../../assets/img/svg/skills/gulp.svg'
    },
    {
      'name': 'jQuery',
      'logo': '../../../assets/img/svg/skills/jquery.svg'
    },
    {
      'name': 'Node',
      'logo': '../../../assets/img/svg/skills/node.svg'
    }
  ],
  'gallery': null,
  'prototypes': null,
  'docs': null,
  'dates': {
    'start': '2017-01-01',
    'end': null
  },
  'confidentiality': null,
  'url': '',
  'github': 'https://github.com/vimalkovath/vimlkovath.github.io'
},
{
  'id': '#project15',
  'name': 'Travel Visa Assistant',
  'image': 'https://www.fulfillsolutions.com/wp-content/themes/fulfill/assets/images/logo.png',
  'featured': true,
  'active': true,
  'category': 'Web App',
  'company': {
    'name': 'Fulfill Solutions',
    'logo': 'https://www.fulfillsolutions.com/wp-content/themes/fulfill/assets/images/logo.png',
    'url': 'https://www.fulfillsolutions.com',
    'role': 'Meanstack Developer & UI Architect'
  },
  'client': {
    'name': 'Mastercard',
    'logo': 'https://www.fulfillsolutions.com/mastercard/assets/images/Logo.svg',
    'url': 'https://surelygroup.com/',
    'featured': true
  },
  'desc': '#projectDescFulfill',
  'techs': [
    {
      'name': 'PHP',
      'logo': '../../../assets/img/svg/skills/php.svg'
    },
    {
      'name': 'Javascript',
      'logo': '../../../assets/img/svg/skills/javascript.svg'
    },
    {
      'name': 'CSS',
      'logo': '../../../assets/img/svg/skills/css.svg'
    }
    ,
    {
      'name': 'Node',
      'logo': '../../../assets/img/svg/skills/node.svg'
    }
    ,
    {
      'name': 'scss',
      'logo': '../../../assets/img/svg/skills/Sass.svg'
    }
    ,
    {
      'name': 'angular',
      'logo': '../../../assets/img/svg/skills/angular.svg'
    },
    {
      'name': 'javascript',
      'logo': '../../../assets/img/svg/skills/javascript.svg'
    }
  ],
  'gallery': null,
  'prototypes': null,
  'docs': null,
  'dates': {
    'start': '2018-04-13',
    'end': '2018-04-20'
  },
  'confidentiality': null,
  'url': 'https://www.fulfillsolutions.com/mastercard/render/Dashboard_1',
  'github': null
},

{
  'id': '#project8',
  'name': 'IFX_GP4',
  'image': 'https://www.marlabs.com/wp-content/uploads/2017/09/marlabs_logo.png',
  'featured': true,
  'active': true,
  'category': 'Web App',
  'company': {
    'name': 'Marlabs',
    'logo': 'https://www.marlabs.com/wp-content/uploads/2017/09/marlabs_logo.png',
    'url': 'https://www.marlabs.com//',
    'role': 'Java Developer '
  },
  'client': {
    'name': 'egate',
    'logo': 'http://www.egate-solutions.com/layout/images/egate-solutions_sprite.png?453',
    'url': 'http://www.egate-solutions.com/home',
    'featured': true
  },
  'desc': '#projectDescImakr',
  'techs': [
   
    {
      'name': 'Bootstrap',
      'logo': '../../../assets/img/svg/skills/bootstrap.svg'
    },
    {
      'name': 'jQuery',
      'logo': '../../../assets/img/svg/skills/jquery.svg'
    },
    {
      'name': 'java',
      'logo': '../../../assets/img/svg/skills/java.svg'
    },
    {
      'name': 'html',
      'logo': '../../../assets/img/svg/skills/html.svg'
    },
    {
      'name': 'CSS',
      'logo': '../../../assets/img/svg/skills/css.svg'
    }
  ],
  'gallery': [
  //   {
  //   'image': '../../../assets/img/png/projects/imakr/imakr_home.png',
  //   'name': 'Home Page',
  //   'alt': 'Image of home page',
  // },
  // {
  //   'image': '../../../assets/img/png/projects/imakr/imakr_home_top.png',
  //   'name': 'Home Page top section',
  //   'alt': 'Image of top section of home',
  // },  
  // {
  //   'image': '../../../assets/img/png/projects/imakr/imakr_mockup_grid.png',
  //   'name': 'Mockup Grid',
  //   'alt': 'Image of mockup of grid',
  // }
],
  'prototypes': [
  //   {
  //   'name': 'Home Page',
  //   'url': 'https://kevinliozon.com/prototypes/imakr_homepage_alpha/index.html',
  // }
],
  'docs': [
  //   {
  //   'name': 'Mockup Homepage',
  //   'url': '../../../assets/docs/imakr/homepage.pdf',
  // }
],
  'dates': {
    'start': '2016-02-14',
    'end': '2016-03-31'
  },
  'confidentiality': null,
  'url': 'https://www.marlabs.com/',
  'github': null
},
// {
//   'id': '#project4',
//   'name': 'HCE',
//   'image': '../../../assets/img/png/projects/hce/hce.png',
//   'featured': false,
//   'active': false,
//   'category': 'Web App',
//   'company': {
//     'name': 'Digitela',
//     'logo': '../../../assets/img/svg/companies/digitela.svg',
//     'url': 'http://www.digitela.fr/',
//     'role': 'UI Designer'
//   },
//   'client': {
//     'name': 'Haute Coiffure et Esthétique',
//     'logo': '../../../assets/img/png/projects/hce/hce.png',
//     'featured': false,
//     'url': 'http://reseau-beaute.com/',
//   },
//   'desc': '#projectDescHce',
//   'techs': [
//     {
//       'name': 'Wordpress',
//       'logo': '../../../assets/img/svg/skills/wp.svg'
//     },
//     {
//       'name': 'Illustrator',
//       'logo': '../../../assets/img/svg/skills/illustrator.svg'
//     },
//     {
//       'name': 'Photoshop',
//       'logo': '../../../assets/img/svg/skills/photoshop.svg'
//     },
//     {
//       'name': 'CSS',
//       'logo': '../../../assets/img/svg/skills/css.svg'
//     }
//   ],
//   'gallery': [{
//     'image': '../../../assets/img/png/projects/hce/hce_mockup.png',
//     'name': 'Zoning',
//     'alt': 'Image of zoning',
//   },
//   {
//     'image': '../../../assets/img/png/projects/hce/hce_home.png',
//     'name': 'Home Page',
//     'alt': 'Image of home page',
//   },
//   {
//     'image': '../../../assets/img/png/projects/hce/hce_header1.png',
//     'name': 'Header Background',
//     'alt': 'Image of Header Background',
//   },
//   {
//     'image': '../../../assets/img/png/projects/hce/hce_header2.png',
//     'name': 'Header Background',
//     'alt': 'Image of Header Background',
//   }],
//   'prototypes': null,
//   'docs': null,
//   'dates': {
//     'start': '2015-04-01',
//     'end': '2015-06-14'
//   },
//   'confidentiality': null,
//   'url': 'http://reseau-beaute.com/',
//   'github': null
// }
];
