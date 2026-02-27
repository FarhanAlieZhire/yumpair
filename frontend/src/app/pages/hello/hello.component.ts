import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-hello',
  standalone: true,
  template: `
    <div style="position:relative;min-height:100vh;background:#fff;">
      <button
        type="button"
        (click)="logout()"
        style="position:absolute;top:16px;right:16px;padding:10px 16px;border:none;border-radius:6px;background:#2f64ff;color:#fff;font-weight:600;cursor:pointer;"
      >
        Logout
      </button>
      <div style="display:flex;min-height:100vh;align-items:center;justify-content:center;">
        <h1 style="margin:0;">Hello World</h1>
      </div>
    </div>
  `,
})
export class HelloComponent {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
  ) {}

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
