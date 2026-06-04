import { Routes } from '@angular/router';

export const routes: Routes = [
        {path:'',loadComponent:()=>import('./features/home/pages/home/home.component').then((m)=> m.HomeComponent)},
        {path:'about',loadComponent:()=>import('./features/about/pages/about-page/about-page.component').then((m)=> m.AboutPageComponent)},
        {path:'test',loadComponent:()=>import('./features/tests/pages/test-list-page/test-list-page.component').then((m)=> m.TestListPageComponent)},
];
