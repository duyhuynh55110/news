import {POST_SLIDER} from "../actions/actionTypes"

const INITIAL_STATE = [
    {
        id: "1",
        name: "5 Reasons To Stan The Iconic Sunmi",
        image: "https://6.viki.io/image/c841a668a5df457699f408de7b9a3448.jpeg?s=900x600&e=t 900w",
        created_at: "2020-07-12"
    },
    {
        id: "2",
        name: "Beautiful Female Stars With Captivating Visuals Who Hail From Daegu",
        image: "https://6.viki.io/image/df8743ed820a4167814134992df264ed.jpeg?s=900x600&e=t",
        created_at: "2020-07-12"
    },
    {
        id: "3",
        name: "AOA’s Jimin Posts Apology Following Mina’s Allegations About Bullying + Mina Responds",
        image: "https://6.viki.io/image/52193fe664c04d94a9a92f87f1d616bb.jpeg?s=900x600&e=t",
        created_at: "2020-07-12"
    },
    {
        id: "4",
        name: "Minzy, Jamie, And EXID’s Solji Talk About Malicious Comments And More + Sandara Park Cries Over Minzy’s Message To Her",
        image: "https://6.viki.io/image/2cb7979eba8345708ef23c59303543d4.jpeg?s=900x600&e=t",
        created_at: "2020-07-12"
    },
    {
        id: "5",
        name: "July Girl Group Brand Reputation Rankings Announced",
        image: "https://6.viki.io/image/30b5a5c8383d4a2f98ffb0a248fb82cf.jpeg?s=900x600&e=t",
        created_at: "2020-07-12"
    },
    {
        id: "6",
        name: "Rose: How you like that?",
        image: "https://i.pinimg.com/564x/cc/b2/ab/ccb2ab1e0cd75d74e2a5a4862815df2e.jpg",
        created_at: "2020-07-12",
        type: POST_SLIDER,
    },
    {
        id: "7",
        name: "Joy beauty at MAMA 2019",
        image: "https://file.tinnhac.com/resize/600x-/music/2018/04/09/20180409115116-d0dd.jpg",
        created_at: "2020-07-12",
        type: POST_SLIDER,
    },
    {
        id: "8",
        name: "Irene with Glass iconic",
        image: "https://i.pinimg.com/originals/21/95/ba/2195baa4baf3b1823746d3e0af7191d7.jpg",
        created_at: "2020-07-12",
        type: POST_SLIDER,
    },
    {
        id: "9",
        name: "Wendy become iconic in Tokyo Music Award",
        image: "https://i.pinimg.com/564x/85/35/99/853599b18fa7c2b424f15a8c72c296a5.jpg",
        created_at: "2020-07-12",
        type: POST_SLIDER,
    },
];

/**
 * Get data list
 */
let postsReducer = () => {
    return INITIAL_STATE.filter(e => !e.hasOwnProperty("type"));
}

/**
 * Get slide data list
 */
let postsSliderReducer = () => {
    return INITIAL_STATE.filter(e => e.hasOwnProperty("type") && e.type === POST_SLIDER);
}


export {postsReducer, postsSliderReducer}