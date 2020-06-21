import Detail from "../modules/User/pages/Detail"
import About from "../modules/User/pages/About"
import Home from "../modules/User/pages/Home"

const routes = [
    {
        name: "Detail",
        path: "/detail",
        component: Detail,
    },
    {
        name: "About",
        path: "/about",
        component: About,
    },
    {
        name: "Index",
        path: "/",
        component: Home,
        exact: true,
    },
];

export default routes;