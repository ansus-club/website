import { Routes } from '@angular/router';
import { Contact } from './contact/contact';
import { Home } from './home/home';
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
        path: 'about-us',
        component: About
    },
    {
        path: 'photos',
        loadComponent: () => import('./photos/photos').then(p => p.Photos)
    },
    {
        path: 'privacy',
        loadComponent: () => import('./privacy/privacy').then(c => c.Privacy)
    }
];
