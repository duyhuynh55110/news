import {postsReducer, postsSliderReducer} from './postsReducer'
import { combineReducers } from "redux"

const allReducers = combineReducers ({
    posts: postsReducer,
    postsSlider: postsSliderReducer,
})

export default allReducers