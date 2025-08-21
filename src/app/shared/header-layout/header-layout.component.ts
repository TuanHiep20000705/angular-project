import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'header-layout',
    standalone: true,
    templateUrl: './header-layout.component.html',
    styleUrl: './header-layout.component.css'
})

export class HeaderLayoutComponent {
    @Output() toggleMenu = new EventEmitter<void>();

    onClickToggleMenu(): void {
        this.toggleMenu.emit();
    }
}