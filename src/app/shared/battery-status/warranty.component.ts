import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-warranty',
  template: `
    <div class="p-4">
      <h2 class="text-xl font-bold">Thông tin bảo hành</h2>
      <p>Xe có ID: {{ vehicleId }}</p>
    </div>
  `,
  templateUrl: './battery-status.component.html'
})
export class WarrantyComponent {
  vehicleId: string | null;
  capacityRate = 64; // % dung lượng hiện tại
  warrantyCondition = 70; // % điều kiện bảo hành
  distance = 60000; // km
  years = 4;
  months = 5;

  circle1Value = 80; // %
  circle2Value = 50; // %

  r = 45; // bán kính vòng tròn
  stroke = 8; // độ dày stroke

  get circumference(): number {
    return 2 * Math.PI * this.r;
  }

  getOffset(percent: number): number {
    return this.circumference * (1 - percent / 100);
  }

  constructor(private route: ActivatedRoute) {
    this.vehicleId = this.route.snapshot.paramMap.get('id');
  }
}
