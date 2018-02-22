import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ComponentsList } from './authentication.routing';
import { AuthenticationRoutes } from './authentication.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AuthenticationRoutes
  ],
  declarations: [
    ComponentsList
  ]
})

export class AuthenticationModule { }