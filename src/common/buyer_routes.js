import About from "../modules/User/about"
import Index from "../modules/User"

const routes = [
    {
        name: "About",
        path: "/about",
        component: About,
    },
    {
        name: "Index",
        path: "/",
        component: Index,
        exact: true,
    },
];

export default routes;