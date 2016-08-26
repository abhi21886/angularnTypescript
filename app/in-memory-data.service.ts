/**
 * Created with JetBrains WebStorm.
 * User: ze47zhk
 * Date: 25/8/16
 * Time: 8:35 AM
 * To change this template use File | Settings | File Templates.
 */

export class InMemoryDataService {
    createDb() {
        let heroes = [
            {id: 11, name: 'Mr. Nice'},
            {id: 12, name: 'Narco'},
            {id: 13, name: 'Bombasto'},
            {id: 14, name: 'Celeritas'},
            {id: 15, name: 'Magneta'},
            {id: 16, name: 'RubberMan'},
            {id: 17, name: 'Dynama'},
            {id: 18, name: 'Dr IQ'},
            {id: 19, name: 'Magma'},
            {id: 20, name: 'Tornado'}
        ];
        return {heroes};
    }
}
