import { Routes } from '@angular/router';

import { ContactComponent } from './Pages/contact/contact.component';
import { AboutComponent } from './Pages/about/about.component';
import { HelpComponent } from './Pages/help/help.component';
import { AutoDockerComponent } from './Pages/auto-docker/auto-docker.component';

export const routes: Routes = [
    { path: '', component: AutoDockerComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent},
    { path: 'help', component: HelpComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];