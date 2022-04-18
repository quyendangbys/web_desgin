import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { CarouselHomeComponent } from './carousel-home/carousel-home.component';
import { HomeComponent } from './home/home.component';
import { PlatformsComponent } from './platforms/platforms.component';
import { SolutionsComponent } from './solutions/solutions.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent  },
  { path: 'platforms', component: PlatformsComponent  },
  {path: 'solutions', component: SolutionsComponent},

  {path: 'carousel-home', component: CarouselHomeComponent},
  
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
