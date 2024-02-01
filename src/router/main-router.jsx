import { Home } from './../pages/home/home';
import About from './../pages/about/About';
import { Services } from './../pages/services/services';
import { Doctors } from './../pages/doctors/doctors';
import { Contacts } from './../pages/contacts/contacts';
import { Appointment } from './../pages/appointment/appointment';
import { News } from './../pages/news/news';
import { SingleNew } from './../pages/singleNew/singleNew';



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
    component: <Doctors/>,
    path: "doctors"
  },
  {
    component: <Contacts/>,
    path: "contact"
  },
  {
    component: <Appointment/>,
    path: "appointment"
  },
  {
    component: <News/>,
    path: "news"
  },
  {
    component: <SingleNew/>,
    path: "singleNew"
  }
];
