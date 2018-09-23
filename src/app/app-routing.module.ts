import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {LandingComponent} from './landing/landing.component';

const appRoutes: Routes = [
  // TODO Need to place all paths here
  /**
   * Path for Landing page
   */
  {
    path: '',
    pathMatch: 'full',
    component: LandingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
