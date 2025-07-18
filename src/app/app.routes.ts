import { Routes } from '@angular/router';


export const routes: Routes = [

    // Define your routes here
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {path:'home', loadComponent: () => import('./home/hero-component/hero-component').then(m => m.HeroComponent)},
   
    
    // Lazy load the AboutComponent
     {path:'about',redirectTo:'about', pathMatch: 'full'},
    {path:'about', loadComponent:() => import('./components/navbar/about-component/about-component').then(m => m.AboutComponent)} ,

    {path:'services',redirectTo:'services', pathMatch: 'full'},
    {path:'services', loadComponent:() => import('./components/navbar/services-component/services-component').then(m => m.ServicesComponent)}
];
