import Api from '../Api';
import axios from 'axios';

export default {

    createUser(userObj) {
       console.log(userObj);
       return Api().post('user/create', userObj);
    },
    
    getUsers() {
       return Api().get('user/all').catch(err => {           
            throw new Error(`ApiService ${err}`);
       });        
    },

}