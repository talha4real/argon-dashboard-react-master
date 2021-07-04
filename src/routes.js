import Index from "views/Index";
import Profile from "views/examples/Profile";
import Maps from "views/examples/Maps";
import Register from "views/examples/Register";
import Login from "views/examples/Login";
import Tables from "views/examples/Tables";
import CreateNFT from "views/examples/CreateNFT";
var routes = [
  {
    path: "/index",
    name: "Explore",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/items",
    name: "My Items",
    icon: "ni ni-planet text-blue",
    component: Profile,
    layout: "/admin",
  },
  {
    path: "/following",
    name: "Following",
    icon: "ni ni-pin-3 text-orange",
    component: Maps,
    layout: "/admin",
  },
  {
    path: "/activity",
    name: "Activity",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin",
  },
  {
    path: "/guidelines",
    name: "How it works",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin",
  },
  {
    path: "/community",
    name: "Community",
    icon: "ni ni-single-02 text-yellow",
    component: Tables,
    layout: "/admin",
  },
  {
    path: "/create",
    name: "Create",
    icon: "ni ni-single-02 text-yellow",
    component: CreateNFT,
    layout: "/admin",
  },
  
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth",
  },
];
export default routes;
