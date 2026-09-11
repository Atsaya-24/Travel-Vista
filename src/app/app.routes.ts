import { Routes } from '@angular/router';

import { Home } from './home/home';
import { Destinations } from './destinations/destinations';
import { Packages } from './packages/packages';
import { Gallery } from './gallery/gallery';
import { Contact } from './contact/contact';
import { About } from './about/about';
import { Login } from './login/login';
import { Signup } from './signup/signup';

export const routes: Routes = [

  {
    path: '',
    component: Home
  },

  {
    path: 'destinations',
    component: Destinations
  },

  {
    path: 'packages',
    component: Packages
  },

  {
    path: 'gallery',
    component: Gallery
  },

  {
    path: 'about',
    component: About
  },

  {
    path: 'contact',
    component: Contact
  },

  {
    path: 'login',
    component: Login
  },

  {
    path: 'signup',
    component: Signup
  }

];