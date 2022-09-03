import * as types from '../actions/types'

const initialState = {
    cats: [],
    categories: [],
    category: {id: null, name: ''}
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case types.GET_CATEGORY_SUCCESS:
            return {
               ...state,
               categories: action.payload.data
            };
        case types.GET_CATS_SUCCESS:
            return {
               ...state,
               cats: action.payload.data
            };
        case types.SET_CATEGORY:
            return {
               ...state,
               category: action.payload
            };
        default:
            return state
    }
}

export default reducer
