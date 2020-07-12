// Members 
import MemberHome from "../modules/User/pages/Members/pages/Home"
import MemberDetail from "../modules/User/pages/Members/pages/Detail"

import About from "../modules/User/pages/About"
import Home from "../modules/User/pages/Home/pages"

const ROUTES = [
    {
        name: "Members",
        key: "members",
        path: "/members",
        component: MemberHome,
        menu: 2,
        subs: [
            {
                name: "Member Detail",
                key: "member_detail",
                path: "/detail/:id",
                component: MemberDetail,
            }
        ]
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

export default ROUTES;