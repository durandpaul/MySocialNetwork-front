import ResponseServices from '@/api/services/ResponseServices';


const state = {
    responses: [],
}

const getters = {
    getResponseArray(state) {
        return state.responses;
    },

    getResponsesById: state => id => {
        return state.responses.filter(response => response.postId === id);
    }
}

const mutations = {

    addResponse(state, newResponse) {

        if (state.responses.length == 0) {
            let data = [{
                postId: newResponse.postId,
                data: newResponse
            }]
            state.responses.push(data);
        } else {
            for (let i = 0; i < state.responses.length; i++) {
                
                if (newResponse.postId === state.responses[i].postId) {
                    state.responses[i].data.push(newResponse);
                } 
            }
        }
    },

    getPostsResponses(state, dataApi) {
        let data = {
            postId: dataApi[0].postId,
            data: dataApi
        }
        state.responses.push(data);
    }
}

const actions = {

    addResponseToPost({
        commit
    }, data) {
        return new Promise((resolve, reject) => {
            ResponseServices.createNewResponse(data).then(({
                    data
                }) => {
                    console.log("addResponseToPost", data);

                    commit('addResponse', data.data);
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

    loadResponseByPost({
        commit
    }, postId) {

        return new Promise((resolve, reject) => {
            ResponseServices.getResponsesByPost(postId).then(({
                    data
                }) => {
                    console.log(data.data);

                    commit('getPostsResponses', data.data);
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

    loadResponses({
        commit
    }) {

        // console.log("loadResponseByPost", postId);
        return new Promise((resolve, reject) => {
            ResponseServices.getResponses.then(({
                    data
                }) => {
                    commit('addResponse', data.data);
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