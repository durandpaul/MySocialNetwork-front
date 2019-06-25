import UserServices from '@/api/services/UserServices';

const state = {
    user: null,
    isAuthenticated: false,
    errors: null
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

    newConnection(state, userData) {
        state.isAuthenticated = true;
        state.user = userData;
    },

    setError(state, errors) {
        state.errors = errors;
    },

    disconnection(state) {
        state.isAuthenticated = false
        state.user = null;
    }
};

const actions = {
    create({
        dispatch,
        commit
    }, userData) {
        return new Promise((resolve, reject) => {
            UserServices.createUser(userData).then(({
                    data
                }) => {
                    commit('newUser', data.newuser);
                    resolve(data);
                })
                .catch(({
                    response
                }) => {
                    commit('setError', response.data.errors);
                    reject(response);
                });
        });
    },

    login({
        dispatch,
        commit
    }, userData) {
        return new Promise((resolve, reject) => {
            UserServices.userConnection(userData).then(({
                    data
                }) => {
                    commit('newConnection', data.user);
                    resolve(data);
                })
                .catch(({
                    response
                }) => {
                    commit('setError', response.data.errors);
                    reject(response);
                });
        });
    },
    logout({
        commit,
        dispatch
    }, id) {
        return new Promise((resolve, reject) => {
            UserServices.userDeconnection(id).then(({
                    data
                }) => {
                    console.log(data);
                    commit('disconnection');
                    resolve(data);
                })
                .catch(({
                    response
                }) => {                    
                    commit('setError', response.errors);
                    reject(response);
                });
        });
    },
};

export default {
    state,
    mutations,
    actions,
    getters
}