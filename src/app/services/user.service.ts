import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  id: number;
  name: string;
  old: number;
  role: string;
  email: string;
  avatar: string
}

@Injectable({
  providedIn: 'root' // 👈 tự động DI vào toàn app
})
export class UserService {
  private apiUrl = 'https://677dde0a94bde1c12529a041.mockapi.io/api/v1/todo'; // API giả

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
}
