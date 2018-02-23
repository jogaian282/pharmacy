import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsList } from './dashboard.routing';
import { DashboardRoutes } from './dashboard.routing';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutes
  ],
  declarations: [
    ComponentsList,
  ]
})

export class DashboardModule { }
