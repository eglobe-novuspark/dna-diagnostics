import { Routes } from '@angular/router';

export const routes: Routes = [
        {path:'',loadComponent:()=>import('./features/home/pages/home/home.component').then((m)=> m.HomeComponent)},
        {path:'about',loadComponent:()=>import('./features/about/pages/about-page/about-page.component').then((m)=> m.AboutPageComponent)},
        {path:'tests',loadComponent:()=>import('./features/tests/pages/test-list-page/test-list-page.component').then((m)=> m.TestListPageComponent)},
        {path:'test/:slug',loadComponent:()=>import('./features/tests/pages/test-details-page/test-details-page.component').then((m)=> m.TestDetailsPageComponent)},
        {path:'contact-us',loadComponent:()=>import('./features/contact/contact.component').then((m)=> m.ContactComponent)},
        {
  path: 'blog',
  loadComponent: () =>
    import('./features/blog/pages/blog-page/blog-page.component')
      .then(m => m.BlogPageComponent)
},

{
  path: 'blog/:slug',
  loadComponent: () =>
    import('./features/blog/pages/blog-details-page/blog-details-page.component')
      .then(m => m.BlogDetailsPageComponent)
}
        
 
];
