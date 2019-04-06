import { Diploma } from '../../interfaces/diploma.interface';

export let DIPLOMAS: Diploma[] = [
{
  'id': '#diploma5',
  'name': '#diplomaCs',
  'category': 'Certification',
  'gallery': [{
    // 'image': '../../../assets/img/svg/education/udemy.svg',
    'image': 'assets/img/svg/education/udemy.svg',
    'name': 'udemy Logo',
    'alt': 'Image of udemy logo',
  }],
  'subjects': [
    { 'name': 'Javascript', 'spe': false },
    { 'name': 'Angular', 'spe': false },
    { 'name': 'Sass', 'spe': false },
    { 'name': 'front end', 'spe': false },
    { 'name': 'RegEx', 'spe': false },
  ],
  'school': {
    'name': 'udemy',
    'image': 'assets/img/svg/education/udemy.svg',
    'place': 'Online',
    'country': 'Online',
    'url': 'https://www.udemy.com/'
  },
  'dates': {
    'start': '2016-03-01',
    'end': '2019-01-01'
  },
  'projects': null
},

{
  'id': '#diploma4',
  'name': '#Btech',
  'category': 'Bachelor\'s Degree',
  'gallery': [{
    'image': 'assets/img/png/diplomas/au.jpeg',
    'name': 'Bachelor\'s Degree Diploma',
    'alt': 'Image of bachelor\'s degree diploma',
  }],
  'subjects': [
    { 'name': 'All csc', 'spe': true },
    { 'name': 'IT Management', 'spe': true },
    { 'name': 'Communication', 'spe': false },
    { 'name': 'Maths' , 'spe': false }
  ],
  'school': {
    'name': 'King collage of technology namakkal',
    'place': 'Tamil nadu',
    'country': 'India',
    'image': 'assets/img/png/diplomas/au.jpeg',
    'url': 'https://www.annauniv.edu/'
  },
  'dates': {
    'start': '2010-06-01',
    'end': '2013-06-20'
  },
  'projects': [{
    'id': '#project5',
    'name': '',
    'image': 'assets/img/png/diplomas/au.jpeg',
    'url': 'https://www.annauniv.edu/'
  }]
},

{
  'id': '#diploma3',
  'name': '#diploma',
  'category': 'University Diploma',
  'gallery': [{
    'image': 'assets/img/svg/education/gptccollage.jpg',
    'name': 'Diploma of Higher Education',
    'alt': 'Image of diploma of higher education',
  }],
  'subjects': [
    { 'name': 'cse', 'spe': true },
    { 'name': 'maths', 'spe': true },
    { 'name': 'Electronics', 'spe': true },
    { 'name': 'IT management', 'spe': false },
    { 'name': 'Software Dev', 'spe': false },
    { 'name': 'Communication', 'spe': false }
  ],
  'school': {
    'name': 'Government Polytechnic College, Chelakkara',
    'place': 'Thrissur',
    'country': 'India',
    'image': 'assets/img/svg/education/gptccollage.jpg',
    'url': 'Government Polytechnic College, Chelakkara'
  },
  'dates': {
    'start': '2006-09-01',
    'end': '2009-06-01'
  },
  'projects': [
    {
      'id': '#project1',
      'name': 'Noukari clone',
      'image': 'assets/img/svg/education/gptc.jpg',
      'url': null
    }
  ]
},

{
  'id': '#diploma2',
  'name': '#HSC',
  'category': 'University Degree',
  'gallery': [{
    'image': 'http://www.vhse.kerala.gov.in/vhse/images/logovhse.png',
    'name': 'VHSC',
    'alt': 'Image of university degree diploma',
  }],
  'subjects': [
    { 'name': 'Electronics', 'spe': true },
    { 'name': 'Maths', 'spe': false },
    { 'name': 'English', 'spe': false },
    { 'name': 'Social', 'spe': false },
    { 'name': 'Science', 'spe': false }
  ],
  'school': {
    'name': 'Vocational Higher Secondary Education',
    'place': 'Thrissur',
    'country': 'India',
    'image': 'http://www.vhse.kerala.gov.in/vhse/images/logovhse.png',
    'url': 'http://www.vhse.kerala.gov.in/'
  },
  'dates': {
    'start': '2003-06-01',
    'end': '2005-04-01'
  },
  'projects': [{
    'id': '#project0',
    'name': 'Radio , dancing light ',
    'image': 'http://www.vhse.kerala.gov.in/vhse/images/logovhse.png',
    'url': null
  }]
},

{
  'id': '#diploma1',
  'name': '#school',
  'category': 'Sslc / Metriculation',
  'gallery': [{
    'image': 'http://www.gvhsscherpu.in/logo/eb.png',
    'name': 'SSLC',
    'alt': 'Image of SSLC Diploma',
  }],
  'subjects': [
    { 'name': 'Biology', 'spe': false },
    { 'name': 'Physics/chemistry', 'spe': false },
    { 'name': 'Mathematics', 'spe': false },
    { 'name': 'Social Science', 'spe': false },
    { 'name': 'English', 'spe': false },
    { 'name': 'Sanskrit', 'spe': false },
    { 'name': 'Hindi', 'spe': false },
    { 'name': 'Malayalam', 'spe': false },
    { 'name': 'Chemistry', 'spe': false }
  ],
  'school': {
    'name': 'Cherpu Govt Vocational Higher Secondary school ',
    'place': 'Kerala , Thrissur',
    'country': 'India',
    'image': 'http://www.gvhsscherpu.in/logo/eb.png',
    'url': 'http://www.gvhsscherpu.in'
  },
  'dates': {
    'start': '1993-06-03',
    'end': '2003-04-20'
  },
  'projects': null
}];
