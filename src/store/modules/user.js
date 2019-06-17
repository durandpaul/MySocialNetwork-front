import UserServices from '@/api/services/UserServices';

const state = {
    errors: null,
    user: null,
    isAuthenticated: false
    // !!JwtService.getToken() 
};

const getters = {
    currentUser(state) {
        return state.user;
    },

    isAuthenticated(state) {
        return state.isAuthenticated;
    }
};

const mutations = {
    newUser(state, userData) {
        state.isAuthenticated = true;
        state.user = userData;
        // JwtService.saveToken(state.user.token);
    },
    setError(state,errors){
        state.errors = errors;
    }
};

const actions = {
    create(context, userData) {
        console.log('create userData', userData);
        return new Promise((resolve, reject) => {

            UserServices.createUser(userData).then(({
                    data
                }) => {
                    context.commit('newUser', data.user);
                    resolve(data);
                })
                .catch(({
                    response
                }) => {
                    context.commit('setError', response.data.errors);
                    reject(response);
                });

            //   ApiService.post("users", { user: credentials })
            //     .then(({ data }) => {
            //       context.commit(SET_AUTH, data.user);
            //       resolve(data);
            //     })
            //     .catch(({ response }) => {
            //       context.commit(SET_ERROR, response.data.errors);
            //       reject(response);
            //     });
        });
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}