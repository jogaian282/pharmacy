import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ActivityComponent } from './activity/activity.component';
import { AuthGuard } from '../core/guards/auth.guard';
import { AdminGuard } from '../core/guards/admin.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard, AdminGuard],
    canActivateChild : [AdminGuard],
    children: [
      {
        path : 'activity',
        component: ActivityComponent
      }
    ]
  }
];

export const DashboardRoutes = RouterModule.forChild(routes);

export const ComponentsList = [ DashboardComponent ];
