import { Component } from '@angular/core';

@Component({
  selector: 'app-battery-status',
  templateUrl: './battery-status.component.html'
})
export class BatteryStatusComponent {
  capacityRate = 64; // % dung lượng hiện tại
  warrantyCondition = 70; // % điều kiện bảo hành
  distance = 60000; // km
  years = 4;
  months = 5;
}
