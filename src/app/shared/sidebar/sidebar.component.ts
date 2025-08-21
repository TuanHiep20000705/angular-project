import { CommonModule } from "@angular/common";
import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'sidebar',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.css',
})

export class SidebarComponent {
    @Input() sidebarOpen = false;
    @Output() closeSidebar = new EventEmitter<void>();

    menuItems = [
        { label: 'Dashboard', route: '/dashboard' },
        { label: 'Users', route: '/users' },
        { label: 'Settings', route: '/settings' }
    ];
}