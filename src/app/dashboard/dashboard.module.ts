import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsList } from './dashboard.routing';
import { DashboardRoutes } from './dashboard.routing';
import { ActivityComponent } from './activity/activity.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutes
  ],
  declarations: [ComponentsList,
    ActivityComponent
]
})

export class DashboardModule { }
