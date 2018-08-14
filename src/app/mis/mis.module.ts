import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MISRoutingModule } from './mis-routing.module';
import { HourlyReportComponent } from './hourly-report/hourly-report.component';

@NgModule({
  imports: [
    CommonModule,
    MISRoutingModule
  ],
  declarations: [HourlyReportComponent]
})
export class MISModule { }
