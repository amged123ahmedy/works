import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjectComponent } from './components/project/project.component';
import { SeviceComponent } from './components/sevice/sevice.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { FaqComponent } from './components/faq/faq.component';
import { FilleComponent } from './components/fille/fille.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'projects', component: ProjectComponent },
    { path: 'service', component: SeviceComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'project-details', component: ProjectDetailsComponent },
    { path: 'About-me', component: AboutMeComponent },
    { path: 'pricing', component: PricingComponent },
    { path: 'faq', component: FaqComponent },
    { path: 'fille', component: FilleComponent },
];
