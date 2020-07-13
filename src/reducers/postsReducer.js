import {POST_SLIDER} from "../actions/actionTypes"

const INITIAL_STATE = [
    {
        id: "1",
        name: "5 Reasons To Stan The Iconic Sunmi",
        img: "https://6.viki.io/image/c841a668a5df457699f408de7b9a3448.jpeg?s=900x600&e=t 900w",
        created_at: "2020-07-12",
        view: 20,
    },
    {
        id: "2",
        name: "Beautiful Female Stars With Captivating Visuals Who Hail From Daegu",
        img: "https://6.viki.io/image/df8743ed820a4167814134992df264ed.jpeg?s=900x600&e=t",
        created_at: "2020-07-12",
        view: 25,
    },
    {
        id: "3",
        name: "AOA’s Jimin Posts Apology Following Mina’s Allegations About Bullying + Mina Responds",
        img: "https://6.viki.io/image/52193fe664c04d94a9a92f87f1d616bb.jpeg?s=900x600&e=t",
        created_at: "2020-07-12",
        view: 30,
    },
    {
        id: "4",
        name: "Minzy, Jamie, And EXID’s Solji Talk About Malicious Comments And More + Sandara Park Cries Over Minzy’s Message To Her",
        img: "https://6.viki.io/image/2cb7979eba8345708ef23c59303543d4.jpeg?s=900x600&e=t",
        created_at: "2020-07-12",
        view: 50,
    },
    {
        id: "5",
        name: "July Girl Group Brand Reputation Rankings Announced",
        img: "https://6.viki.io/image/30b5a5c8383d4a2f98ffb0a248fb82cf.jpeg?s=900x600&e=t",
        created_at: "2020-07-12",
        view: 60,
    },
    {
        id: "6",
        name: "Rose: How you like that?",
        img: "https://i.pinimg.com/564x/cc/b2/ab/ccb2ab1e0cd75d74e2a5a4862815df2e.jpg",
        created_at: "2020-07-12",
        type: POST_SLIDER,
        view: 10,
    },
    {
        id: "7",
        name: "Joy beauty at MAMA 2019",
        img: "https://file.tinnhac.com/resize/600x-/music/2018/04/09/20180409115116-d0dd.jpg",
        created_at: "2020-07-12",
        type: POST_SLIDER,
        view: 13,
    },
    {
        id: "8",
        name: "Irene with Glass iconic",
        img: "https://i.pinimg.com/originals/21/95/ba/2195baa4baf3b1823746d3e0af7191d7.jpg",
        created_at: "2020-07-12",
        type: POST_SLIDER,
        view: 2,
    },
    {
        id: "9",
        name: "Solar at MAMA 2019. She is greatest!!!",
        img: "https://pbs.twimg.com/media/ELFJ2-lUYAA94Bq.jpg",
        created_at: "2020-07-12",
        type: POST_SLIDER,
        view: 1,
    },
    {
        id: "10",
        name: "Gaon Reveals Accumulated Digital And Album Charts For 1st Half Of 2020",
        img: "https://6.viki.io/image/ced7769319294571bf532a20d5d80ebb.jpeg?s=900x600&e=t",
        created_at: "2020-07-12",
        view: 300,
    },
    {
        id: "11",
        name: "Watch: “Hospital Playlist” Shows How Jo Jung Suk Pushed For Jeon Mi Do’s Casting, After Being Amazed By Her On Stage",
        img: "https://6.viki.io/image/70ff96251c7244c08cebfb9d3e01727f.jpeg?s=900x600&e=t",
        created_at: "2020-07-12",
        view: 2000,
    },
    {
        id: "12",
        name: "BLACKPINK, TWICE, SEVENTEEN, IU, Suga, And Baekhyun Top Gaon Monthly And Weekly Charts",
        img: "https://6.viki.io/image/d1fa086e16854312a2900d5d6cbb59fa.jpeg?s=900x600&e=t",
        created_at: "2020-07-12",
        view: 50,
    },
    {
        id: "13",
        name: "TWICE Maintains Lead With “MORE & MORE”; Soompi’s K-Pop Music Chart 2020, July Week 1",
        img: "https://6.viki.io/image/3b2bc20a1ac84d01a212a789ba0b7b61.jpeg?s=900x600&e=t",
        created_at: "2020-07-12",
        view: 5000,
    },
    {
        id: "14",
        name: "SEVENTEEN And BLOO Achieve Double Crowns On Gaon Weekly Charts",
        img: "https://6.viki.io/image/5e45992d132a44f89744c419ab5a9c23.jpeg?s=900x600&e=t",
        created_at: "2020-07-12",
        view: 1,
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

/**
 * Get popular posts by "view" field
 */
let postsPopularReducer = () => {
    return INITIAL_STATE.filter(e => !e.hasOwnProperty("type")).sort((a, b) => { return b.view - a.view });
}

export {postsReducer, postsSliderReducer, postsPopularReducer}