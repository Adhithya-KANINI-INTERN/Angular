import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { InputComponent } from './input/input.component';
import { Component } from '@angular/core';
import { PostsComponent } from './posts/posts.component';

export const routes: Routes = [
    { path:'home', component: HomeComponent, children: [
        {path: 'child-a', component: ChildAComponent}, 
        {path: 'child-b', component: ChildBComponent}
    ]},
    { path:'about', component: AboutComponent},
    { path:'blog', component: BlogComponent},
    { path:'contact', component: ContactComponent},
    { path: 'input/:value', component: InputComponent},
    { path: 'lazyloading', loadComponent: () => import("./lazyloadingfeature/lazyloadingfeature.component").then(m => m.LazyloadingfeatureComponent)},
    { path: 'posts', component: PostsComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: NotfoundComponent}
];
