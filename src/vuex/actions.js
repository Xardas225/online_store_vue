import axios from 'axios';

const actions = {
    GET_PRODUCTS_FROM_API({commit}) {
        return axios('http://localhost:3000/products', {
            method: "GET"
        })
        .then((products) => {
            commit('SET_PRODUCTS_TO_STATE', products.data)
            return products;
        })
        .catch((error)=>{
            console.log(error);
            return error;
        })
    },
    GET_HOME_DATA_FROM_API({commit}) {
        return axios('http://localhost:3000/home_data',{
            method: 'GET'
        })
        .then((data)=> {
            commit('SET_HOME_DATA_TO_STATE', data.data)
            return data
        })
        .catch((error)=>{
            console.log(error);
            return error;
        })
    },
    ADD_TO_CART({commit}, product) {
        commit('SET_CART', product)
    },
    DELETE_FROM_CART({commit}, index) {
        commit('DELETE_FROM_CART', index)
    }
}

export default actions;