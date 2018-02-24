import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../../material/material.module';
import { APP_SIDEBAR_NAV } from './side-nav-items/side-nav-list';
import { HeaderComponent } from '../header/header.component';
import { NavDropdownDirective } from '../../../directives/nav-dropdown.directive';
import { NavDropdownToggleDirective } from '../../../directives/nav-dropdown-toggle.directive';
import { SideNavComponent } from './side-nav.component';
import { FooterComponent } from '../footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  declarations: [
    APP_SIDEBAR_NAV,
    HeaderComponent,
    SideNavComponent,
    FooterComponent,
    NavDropdownDirective,
    NavDropdownToggleDirective
  ],
  exports : [
    APP_SIDEBAR_NAV,
    SideNavComponent,
    HeaderComponent,
    FooterComponent,
    NavDropdownDirective,
    NavDropdownToggleDirective
  ]
})

export class SideNavModule { }
