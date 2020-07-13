import {postsReducer, postsSliderReducer, postsPopularReducer} from './postsReducer'
import categoriesReducer from "./categoriesReducer"
import { combineReducers } from "redux"

const allReducers = combineReducers ({
    posts: postsReducer,
    postsSlider: postsSliderReducer,
    postsPopular: postsPopularReducer,
    categories: categoriesReducer,
})

export default allReducers