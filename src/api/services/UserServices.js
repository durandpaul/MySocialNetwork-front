import Api from '../Api';

export default {

   createUser(userObj) {
      // console.log(userObj);
      return Api().post('user/create', userObj);
   },

   userConnection(userObj) {
      console.log(userObj);
      return Api().post('user/login', userObj)
   },

   getUsers() {
      return Api().get('user/all').catch(err => {
         throw new Error(`ApiService ${err}`);
      });
   },

}