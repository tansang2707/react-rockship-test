//action type
const SET_ALBUM = "SET_ALBUM"
const CREATE_NEW_ALBUM = "CREATE_NEW_ALBUM"
const TOGGLE_FAVORITE = "TOGGLE_FAVORITE"

const initialState = []
//
export default (state = initialState, action) => {
    switch (action.type) {
        case SET_ALBUM:
            return action.payload
        case CREATE_NEW_ALBUM:
            return [...state, action.payload]
        case TOGGLE_FAVORITE:
            return state.map(item => {
                if (item.id === action.payload) {
                    item.isFavorite = !item.isFavorite
                }
                return item
            })
        default:
            return state
    }
}

//action

export const setAlbum = (data) => dispatch => {
    dispatch({
        type: SET_ALBUM,
        payload: data
    })
}

export const createNewAlbum = (data) => dispatch => {
    dispatch({
        type: CREATE_NEW_ALBUM,
        payload: data
    })
}

export const toggleFavorite = (id) => async dispatch => {
    await dispatch({
        type: TOGGLE_FAVORITE,
        payload: id
    })
}