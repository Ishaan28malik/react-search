import { LOADER_OFF, LOADER_ON, SEARCH_DATA, SEARCH_REPO } from "./types"

export const searchQuery = (payload) => {
    return {
        type: SEARCH_REPO,
        payload
    }
}

export const saveData = (payload) => {
    return {
        type: SEARCH_DATA,
        payload
    }
}
export const loaderOn = () => {
    return {
        type: LOADER_ON
    }
}
export const loaderOff = () => {
    return {
        type: LOADER_OFF
    }
}