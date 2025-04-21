import { Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { DevotionsComponent } from './devotions/devotions.component';
import { FyiComponent } from './fyi/fyi.component';
import { ExploreComponent } from './explore/explore.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    {path:'home', component: LandingpageComponent},
    {path:'devotions', component: DevotionsComponent},
    {path:'fyi', component: FyiComponent},
    {path:'explore', component: ExploreComponent},
    {path: 'about', component: AboutComponent}
];
