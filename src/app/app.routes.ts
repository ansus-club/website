import { Routes } from '@angular/router';
import { Contact } from './contact/contact';
import { Home } from './home/home';
import { Photos } from './photos/photos';

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
        path: 'photos',
        component: Photos
    },
    {
        path: 'privacy',
        loadComponent: () => import('./privacy/privacy').then(c => c.Privacy)
    }
];
