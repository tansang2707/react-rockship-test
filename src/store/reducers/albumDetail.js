//aciton type

const SET_ALBUM_DETAIL = "SET_ALBUM_DETAIL"
const TOGGLE_LOVE = "TOGGLE_LOVE"
const ADD_PHOTO = "ADD_PHOTO"

//initial state

const initialState = {}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_ALBUM_DETAIL:
            return action.payload
        case TOGGLE_LOVE:
            const image = state.image.map(item => {
                if (item.id === action.payload) {
                    item.isLove = !item.isLove
                }
                return item
            })
            return { ...state, image }
        case ADD_PHOTO:
            const photos = state.image
            photos.push(action.payload)
            return { ...state, image: photos }
        default:
            return state
    }
}

//aciton
export const setAlbumDetail = (data) => dispatch => {
    dispatch({
        type: SET_ALBUM_DETAIL,
        payload: data || ""
    })
}

export const toggleLove = (id) => dispatch => {
    dispatch({
        type: TOGGLE_LOVE,
        payload: id
    })
}

export const addPhoto = (data) => dispatch => {
    dispatch({
        type: ADD_PHOTO,
        payload: data
    })
}