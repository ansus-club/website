import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { About } from './about/about';

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
        loadComponent: () => import('./privacy/privacy').then(c => c.Privacy)
    }
];
