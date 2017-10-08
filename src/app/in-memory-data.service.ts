import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {id: 0, name: 'Zero'},
      {id: 11, name: 'Bombasto'},
      {id: 12, name: 'Mr.Nice'},
      {id: 13, name: 'Narco'},
      {id: 14, name: 'Hero'},
      {id: 15, name: 'Celeritas'},
      {id: 16, name: 'Rubber Man'},
      {id: 17, name: 'Magneta'},
      {id: 18, name: 'Dr IQ'},
      {id: 19, name: 'Magma'},
      {id: 20, name: 'Tornado'},
    ];
    return {heroes};
  }
}
