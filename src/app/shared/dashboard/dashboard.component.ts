import { Component } from "@angular/core";
import { VehicleListComponent } from "../vehicle-list/vehicle-list.component";

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
    imports: [VehicleListComponent],
})

export class DashboardComponent {

}