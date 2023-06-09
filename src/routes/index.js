import Home from '../views/Home.vue';
import Notfound from "../views/NotFound.vue";
import Details from "../views/Details.vue";
const routes = [
    {
        path: "/",
        name: "Homepage",
        component: Home
    },
    {
        path: "/Details/:id",
        name: "Details",
        component: Details
    },
    //redirect
    {
        path: "/",
        redirect: "/",
    },
    {
        path: "/:catchAll(.*)",
        name: "Not Found",
        component: Notfound,
    },
];



export default routes;