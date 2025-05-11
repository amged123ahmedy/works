import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { SeviceComponent } from './sevice/sevice.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PricingComponent } from './pricing/pricing.component';
import { FaqComponent } from './faq/faq.component';
import { FilleComponent } from './fille/fille.component';


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
]
