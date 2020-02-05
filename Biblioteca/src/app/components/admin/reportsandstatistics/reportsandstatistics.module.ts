import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsandstatisticsRoutingModule } from './reportsandstatistics-routing.module';
import { ReportsandstatisticsComponent } from './reportsandstatistics.component';


@NgModule({
  declarations: [ReportsandstatisticsComponent],
  imports: [
    CommonModule,
    ReportsandstatisticsRoutingModule
  ]
})
export class ReportsandstatisticsModule { }
