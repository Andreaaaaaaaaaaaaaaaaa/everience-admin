import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private apiUrl = 'http://localhost:3000/api/auth';

    constructor(private http: HttpClient) {}

    login(credentials: any) {
        return this.http.post<any>(`${this.apiUrl}/login`, credentials).pipe(
            tap(response => {
                if (response.success && response.data.token) {
                    localStorage.setItem('token', response.data.token);
                }
            })
        );
    }

    logout() {
        localStorage.removeItem('token');
    }

    isLoggedIn(): boolean {
        return !!localStorage.getItem('token');
    }
}