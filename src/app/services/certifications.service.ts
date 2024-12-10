import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CertificationsService {

  getCertifications () {

    return [
      {
        logo: '',
        certification: 'Certified Scrum Master',
        delivered_by: 'Agile Bee',
        date: '2010',
        link: ''
      },
      {
        logo: '',
        certification: 'AWS Developer Associate',
        delivered_by: 'AWS',
        date: '',
        link: ''
      },
      {
        logo: '',
        certification: 'Gitlab Practitioner',
        delivered_by: 'Gitlab',
        date: '',
        link: ''
      },
      {
        logo: '',
        certification: 'ISTQB Foundation Level',
        delivered_by: 'ISTQB',
        date: '2015',
        link: ''
      },
      {
        logo: '',
        certification: 'ISTQB Test Manager',
        delivered_by: 'ISTQB',
        date: '2015',
        link: ''
      },
      {
        logo: '',
        certification: 'English C1 > C1+',
        delivered_by: '',
        date: '',
        link: ''
      },
      {
        logo: '',
        certification: 'AT Internet Gold User',
        delivered_by: 'AT Internet',
        date: '',
        link: ''
      },
      {
        logo: '',
        certification: 'Sauveteur Secouriste du Travail',
        delivered_by: '',
        date: '',
        link: ''
      },
      {
        logo: '',
        certification: 'Advanced Cypress Professionnal',
        delivered_by: '',
        date: '',
        link: ''
      }
    ]
  }

  constructor() { }
}
