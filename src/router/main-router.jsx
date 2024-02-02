import { Home } from "./../pages/home/home";
import About from "./../pages/about/About";
import { Services } from "./../pages/services/services";
import { Doctors } from "./../pages/doctors/doctors";
import { Contacts } from "./../pages/contacts/contacts";
import { Appointments } from "../pages/appointment/appointment";
import New from "../pages/news/New";
import { SingleNew } from "./../pages/singleNew/singleNew";

export const main_pages = [
  {
    component: <Home />,
  },
  {
    component: <About />,
    path: "about",
  },
  {
    component: <Services />,
    path: "services",
  },
  {
    component: <Doctors />,
    path: "doctors",
  },
  {
    component: <Contacts />,
    path: "contact",
  },
  {
    component: <Appointments />,
    path: "appointments",
  },
  {
    component: <New />,
    path: "news",
  },
  {
    component: <SingleNew />,
    path: "singleNew",
  },
];
