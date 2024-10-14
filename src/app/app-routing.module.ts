import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'influencer', loadChildren: () => import('./influencer/influencer.module').then(m => m.InfluencerModule) },
  { path: 'brands', loadChildren: () => import('./brands/brands.module').then(m => m.BrandsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
