import { Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { DevotionsComponent } from './devotions/devotions.component';

export const routes: Routes = [
    {path:'home', component: LandingpageComponent},
    {path:'devotions', component: DevotionsComponent}
];
