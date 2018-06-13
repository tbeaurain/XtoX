
// SERVICE TO TEST OUR FUNCTIONS ! TO BE DELETED WHEN DB IS CONNECTED
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 11, firstname: 'Mr', lastname: 'Nice', email: 'azerty@gmail.com', phone: '0122334455', password: 'aeer' },
      { id: 12, firstname: 'Narco', lastname: 'Gégé', email: 'gerard@gmail.com', phone: '0987654321', password: 'aeer' },
      { id: 13, firstname: 'Bombasto', lastname: 'Kale', email: 'kale@gmail.com', phone: '0283848586', password: 'aeer' },
      { id: 14, firstname: 'Celeritas', lastname: 'Oubi', email: 'oubi@gmail.com', phone: '0994939592', password: 'aeer' },
      { id: 15, firstname: 'Magneta', lastname: 'Podur', email: 'podur@gmail.com', phone: '0493958493', password: 'aeer' },
      { id: 16, firstname: 'RubberMan', lastname: 'Palabre', email: 'palabre@gmail.com', phone: '0947362056', password: 'aeer' },
      { id: 17, firstname: 'Dynama', lastname: 'cornflex', email: 'cornflex@gmail.com', phone: '0564738209', password: 'aeer' },
      { id: 18, firstname: 'Dr IQ', lastname: 'postum', email: 'postum@gmail.com', phone: '0474635493', password: 'aeer' },
      { id: 19, firstname: 'Magma', lastname: 'sylve', email: 'sylve@gmail.com', phone: '0909876570', password: 'aeer' },
      { id: 20, firstname: 'Tornado', lastname: 'patate', email: 'patate@gmail.com', phone: '0234543234', password: 'aeer' }    
    ];
    return {users};
  }
}