
import PostServices from '@/api/services/PostServices';


const state = {
    posts: [],
    
}

const getters = {
    getPostArray() {
        return state.posts;
    },    
}

const mutations = {
    addPost(state, newpost) {
        state.posts.push(newpost);
    },
    
    deletePost(state, index) {
        state.posts.splice(index, 1)
    },

    updatePost(state, newData) {        
        state.posts.newData._id = newData; 
    },
    
    updatePosts(state, dataApi) {
        state.posts = dataApi; 
    },
}

const actions = {
    createPost({commit}, postData) {
        
        return new Promise((resolve, reject) => {
            PostServices.createNewPost(postData).then(({
                    data
                }) => {                    
                    commit('addPost', data.data);
                    resolve(data);
                })
                .catch(({
                    response
                }) => {
                    // commit('setError', response.data.errors);
                    reject(response);
                });
        });
    },

    deleteThisPost({commit}, id) {
        commit('deletePost', id);
    },

    updateThisPost({commit}, data) {    
        return new Promise((resolve, reject) => {
            PostServices.updateApost(data).then(({
                    data
                }) => {
                    commit('updatePost', data.data);
                    resolve(data);
                })
                .catch(({
                    response
                }) => {
                    // commit('setError', response.data.errors);
                    reject(response);
                });
        });
    },

    loadPostsByUser({commit}, userId) {
        return new Promise((resolve, reject) => {
            PostServices.getPostsByUser(userId).then(({
                    data
                }) => {
                    // console.log("data", data);
                    
                    commit('updatePosts', data.data);
                    resolve(data);
                })
                .catch(({
                    response
                }) => {
                    // commit('setError', response.data.errors);
                    reject(response);
                });
        });
    }
    
}

export default {
    state,
    mutations,
    actions,
    getters
}