import Api from '../Api';

export default {

   createUser(userObj) {
      return Api().post('user/create', userObj);
   },

   userConnection(userObj) {   
      return Api().post('user/login', userObj);
   },

   userDeconnection(id) {
      return Api().post('user/logout', id);
   },

   getUsers() {
      return Api().get('user/all').catch(err => {
         throw new Error(`ApiService ${err}`);
      });
   },

   // getConnection() {
   //    return Api().get('user/isconnect').catch(err => {
   //       throw new Error(`ApiService ${err}`);
   //    });
   // }
}