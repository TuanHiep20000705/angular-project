import { Component, OnInit } from "@angular/core";
import { User, UserService } from "../../services/user.service";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'users',
    imports: [CommonModule, HttpClientModule],
    templateUrl: './users.component.html',
    styleUrl: './users.component.css'
})

export class UsersComponent implements OnInit {
    users: User[] = [];
    isLoading = true;

    constructor(private userService: UserService) { }

    ngOnInit(): void {
        this.userService.getUsers().subscribe({
            next: (data) => {
                this.users = data;
                this.isLoading = false;
                console.log('user list: ', data);
            },
            error: (err) => {
                console.error('Lỗi khi gọi API:', err);
                this.isLoading = false;
            }
        });
    }

    addUser() {
        console.log('test add user');
    }
}