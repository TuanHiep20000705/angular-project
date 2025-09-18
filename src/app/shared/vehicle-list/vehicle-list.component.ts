import { Component } from "@angular/core";
import { Vehicle } from "../../services/vehicle";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-vehicle-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './vehicle-list.component.html',
})
export class VehicleListComponent {
  vehicles: Vehicle[] = [
    { id: 'B54AW 066212', model: '三菱 eKクロスEV', grade: '★★★✚', soh: '71%', date: '2025/09/17 16:59', warranty: 'あり', link: '#' },
    { id: 'U69V-05022', model: 'ミニキャブ・ミーブ', grade: '★★★✚', soh: '89%', date: '2025/09/12 16:41', warranty: 'なし', link: '#' },
    { id: 'B64AW 066211', model: '三菱 eKクロスEV', grade: '★★★✚', soh: '71%', date: '2025/09/17 16:41', warranty: 'あり', link: '#' },
    { id: 'ZE1-066213', model: '日産 リーフ(40kWh)', grade: '★★★✚', soh: '73%', date: '2025/09/12 17:00', warranty: 'なし', link: '#' },
    // ...
  ];
}