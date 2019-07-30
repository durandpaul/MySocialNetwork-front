import Api from '../Api';


export default {

    createNewPost(postData) {
      return Api().post('post/create', postData);        
    },

    deleteApost(postId) {
      return Api().delete('post/delete/'+ postId);        
    },

    updateApost(updatedData) {
        // console.log(updatedData);
      return Api().put('post/update', updatedData);        
    },

    getPostsByUser(userId) {
      return Api().get('post/all/'+ userId);    
    }

}