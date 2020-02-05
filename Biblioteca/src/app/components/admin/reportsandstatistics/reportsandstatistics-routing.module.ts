import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportsandstatisticsComponent } from './reportsandstatistics.component';

const routes: Routes = [{ path: '', component: ReportsandstatisticsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsandstatisticsRoutingModule { }
