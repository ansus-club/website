import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { About } from './about/about';
import { Privacy } from './privacy/privacy';

export const routes: Routes = [
    {
        path: '',
        component: Home,
        pathMatch: 'full'
    },
    {
        path: 'contact',
        component: Contact
    },
    {
        path: 'about',
        component: About
    },
    {
        path: 'privacy',
        component: Privacy
    }
];
