import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { AuthLayoutComponent } from './app-layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './app-layouts/main-layout/main-layout.component';
import { SideNavModule } from './base-layouts/side-nav/side-nav.module';

@NgModule({
imports : [CommonModule, FormsModule, RouterModule, FlexLayoutModule, MaterialModule, SideNavModule],
declarations : [AuthLayoutComponent, MainLayoutComponent],
providers: [],
exports: []
})

export class LayoutModule {

}
