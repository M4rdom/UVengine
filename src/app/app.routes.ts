import { Routes } from '@angular/router';

import { HomeComponent } from './Pages/home/home.component';
import { AboutComponent } from './Pages/about/about.component';
import { HelpComponent } from './Pages/help/help.component';
import { ConfigurationComponent } from './Pages/configuration/configuration.component';


export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'Configuration', component: ConfigurationComponent},
    { path: 'about', component: AboutComponent },
    { path: 'help', component: HelpComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];