import { Routes } from '@angular/router';
import { Admin } from './admin/admin';
import { App } from './app';
import { Front } from './front/front';

export const routes: Routes = [
    {path: 'admin', component: Admin},
    {path: '',      component: Front},
];