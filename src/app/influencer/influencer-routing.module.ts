import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfluencerComponent } from './influencer.component';

const routes: Routes = [{ path: '', component: InfluencerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfluencerRoutingModule { }
