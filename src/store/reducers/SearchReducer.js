import { LOADER_OFF, LOADER_ON, SEARCH_DATA } from "../actions/types"

const initialState = {
    searchResult: null,
    loading: false
}

export default (state = initialState, action) => {
    switch(action.type){
        case SEARCH_DATA:
            return { ...state, searchResult: action.payload, loading: false}
        case LOADER_ON:
            return { ...state, loading: true}
        case LOADER_OFF:
            return { ...state, loading: false}
        default:
            return state
    }
}