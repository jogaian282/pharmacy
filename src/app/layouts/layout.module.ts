import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { AuthLayoutComponent } from './app-layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './app-layouts/main-layout/main-layout.component';
import { HeaderComponent } from './base-layouts/header/header.component';
import { SideNavComponent } from './base-layouts/side-nav/side-nav.component';
import { FooterComponent } from './base-layouts/footer/footer.component';

@NgModule({
imports : [CommonModule, FormsModule, RouterModule, FlexLayoutModule, MaterialModule],
declarations : [AuthLayoutComponent, MainLayoutComponent, HeaderComponent, SideNavComponent,
FooterComponent],
providers: [],
exports: []
})

export class LayoutModule {

}
