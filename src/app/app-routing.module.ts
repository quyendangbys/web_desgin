import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlatformsComponent } from './platforms/platforms.component';
import { SolutionsComponent } from './solutions/solutions.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent  },
  { path: 'platforms', component: PlatformsComponent  },
  {path: 'solutions', component: SolutionsComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
