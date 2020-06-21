// Members 
import MemberHome from "../modules/User/pages/Members/pages/Home"

import About from "../modules/User/pages/About"
import Home from "../modules/User/pages/Home"

const routes = [
    {
        name: "Members",
        key: "members",
        path: "/members",
        component: MemberHome,
        menu: 2,
    },
    {
        name: "About",
        key: "about",
        path: "/about",
        component: About,
        menu: 3,
    },
    {
        name: "Home",
        key: "home",
        path: "/",
        component: Home,
        exact: true,
        menu: 1,
    },
];

export default routes;