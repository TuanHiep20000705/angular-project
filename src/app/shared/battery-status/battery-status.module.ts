import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BatteryStatusComponent } from './battery-status.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: BatteryStatusComponent }]),
    BatteryStatusComponent
  ],
})
export class BatteryStatusModule {}