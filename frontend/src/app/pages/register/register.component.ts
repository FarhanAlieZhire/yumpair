import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  error = '';
  success = '';

  form = this.formBuilder.group({
    username: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly authService: AuthService,
    private readonly router: Router,
  ) {}

  submit(): void {
    if (this.form.invalid) {
      this.error = 'Please complete all fields with valid values.';
      this.success = '';
      return;
    }

    this.error = '';
    this.success = '';
    this.authService
      .register(this.form.getRawValue() as { username: string; email: string; password: string })
      .subscribe({
        next: () => {
          this.success = 'Registration successful. Redirecting to login...';
          setTimeout(() => this.router.navigate(['/login']), 1200);
        },
        error: (err) => {
          this.error = err?.error?.message ?? 'Unable to register.';
        },
      });
  }
}
