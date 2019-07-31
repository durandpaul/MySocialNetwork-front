import Api from '../Api';


export default {

    createNewResponse(responseData) {
        // console.log("createNewResponse", responseData);
        return Api().post('response/create', responseData);
    },

    deleteAresponse(responseId) {
        return Api().delete('response/delete/' + responseId);
    },

    updateAresponse(updatedData) {
        return Api().put('response/update', updatedData);
    },

    getResponsesByUser(userId) {
        return Api().get('response/all/' + userId);
    },

    getResponsesByPost(postId) {
        // console.log("getResponsesByPost", postId);
        return Api().get('response/apostresponse/' + postId);
    }
}