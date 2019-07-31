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
        state.user = {
            username: userData.username,
            status: true,
            _id: userData._id
        };
        localStorage.setItem('username', userData.username);
        localStorage.setItem('userid', userData._id);
        localStorage.setItem('status', userData.status);
        // JwtService.saveToken(state.user.token);
    },

    newConnection(state, userData) {
        state.isAuthenticated = true;
        state.user = {
            username: userData.username,
            status: true,
            _id: userData._id
        };
        localStorage.setItem('username', userData.username);
        localStorage.setItem('userid', userData._id);
        localStorage.setItem('status', "true");
    },

    setError(state, errors) {
        state.errors = errors;
    },

    disconnection(state) {
        state.isAuthenticated = false;
        state.user = null;
        localStorage.clear();
    },

    isConnect(state) {
        state.isAuthenticated = true;
        if (localStorage.getItem("status") === "false") {
            localStorage.setItem("status", "true");
        }

        state.user = {
            username: localStorage.getItem("username"),
            status: localStorage.getItem("status"),
            _id: localStorage.getItem("userid")
        };
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
        console.log(id);
        
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

    getConnection({
        commit,
        dispatch
    }) {
        commit('isConnect');
    },

};

export default {
    state,
    mutations,
    actions,
    getters
}