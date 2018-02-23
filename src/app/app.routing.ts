import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './layouts/app-layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layouts/app-layouts/main-layout/main-layout.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full'
      },
      {
        path: 'auth',
        loadChildren: './authentication/authentication.module#AuthenticationModule'
      }
    ]
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'pharma-dashboard',
        pathMatch: 'full'
      },
      {
        path: 'pharma-dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule',
        canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'error/404'
  }
];

export const AppRoutes = RouterModule.forRoot(routes);
