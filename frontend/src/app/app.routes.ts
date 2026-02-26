import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { HelloComponent } from './pages/hello/hello.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'hello', component: HelloComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: 'login' },
];
