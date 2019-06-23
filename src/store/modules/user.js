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
    newConnection(state, userData) {
        state.isAuthenticated = true;
        state.user = userData;
    },
    setError(state, errors) {
        state.errors = errors;
    }
};

const actions = {
    create({
        dispatch,
        commit
    }, userData) {
        console.log('create userData', userData);
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
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}