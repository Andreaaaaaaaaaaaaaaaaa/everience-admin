// frontend/src/app/modules/auth/auth.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div style="max-width: 400px; margin: 100px auto; padding: 20px; border: 1px solid #ccc; border-radius: 8px; font-family: sans-serif;">
      <h2>Everience Admin - Login</h2>
      <form (ngSubmit)="onLogin()">
        <div style="margin-bottom: 15px;">
          <label style="display:block; margin-bottom:5px;">Email Aziendale:</label>
          <input type="email" [(ngModel)]="email" name="email" required style="width: 100%; padding: 8px; box-sizing: border-box;">
        </div>
        <div style="margin-bottom: 15px;">
          <label style="display:block; margin-bottom:5px;">Password:</label>
          <input type="password" [(ngModel)]="password" name="password" required style="width: 100%; padding: 8px; box-sizing: border-box;">
        </div>
        <button type="submit" style="width: 100%; padding: 10px; background-color: #00769d; color: white; border: none; border-radius: 4px; cursor: pointer;">
          Accedi
        </button>
      </form>
      <p *ngIf="errorMessage" style="color: red; margin-top: 15px;">{{ errorMessage }}</p>
    </div>
  `
})
export class AuthComponent {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    const credentials = { email: this.email, password: this.password };
    
    this.authService.login(credentials).subscribe({
      next: (response: any) => {
        if (response.success) {
          this.router.navigate(['/domicilio']);
        }
      },
      error: (err:any) => {
        this.errorMessage = err.error?.error?.message || 'Errore durante il login';
        console.error(err);
      }
    });
  }
}