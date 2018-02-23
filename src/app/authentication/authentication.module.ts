import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ComponentsList, AuthenticationRoutes} from './authentication.routing';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AuthenticationRoutes,
    FormsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  declarations: [
    ComponentsList
  ]
})

export class AuthenticationModule {

}
