import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { SeviceComponent } from './sevice/sevice.component';
import { ContactComponent } from './contact/contact.component';


export const routes: Routes = [
    { path: '', component: HomeComponent }, 
    { path: 'home', component: HomeComponent },
    { path: 'projects', component: ProjectComponent },
    { path: 'service', component:SeviceComponent },
    { path: 'contact', component: ContactComponent },
]
