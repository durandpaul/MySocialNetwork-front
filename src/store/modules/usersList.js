import UserServices from '@/api/services/UserServices';


const state = {
    users: []
}

const getters = {
    all(state) {
        return state.users;
    },

    connected(state) {
        return state.users.filter(user => user.status === true);
    },

}


const mutations = {

    addList(state, usersList) {
        state.users = usersList;
    },
}

const actions = {

    loadUsersList({
        commit
    }) {
        return new Promise((resolve, reject) => {
            UserServices.getUsers().then(({
                    data
                }) => {
                    console.log('getUsersList', data);
                    commit('addList', data.data);
                    resolve(data);
                })
                .catch(({
                    response
                }) => {
                    commit('setError', response.errors);
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