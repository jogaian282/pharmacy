import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatInputModule,
  MatButtonModule,
  MatToolbarModule,
  MatSelectModule,
  MatCardModule,
  MatMenuModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatGridListModule,
  MatCheckboxModule,
  MatRadioModule,
  MatIconModule,
  MatAutocompleteModule,
  MatListModule,
  MatTabsModule,
  MatTooltipModule
} from '@angular/material';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';
import 'hammerjs';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatSelectModule,
    MatGridListModule,
    MatCardModule,
    MatRadioModule,
    MatMenuModule,
    MatSidenavModule,
    MatTabsModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatFormFieldModule,
    ScrollDispatchModule,
    MatTooltipModule,
    MatIconModule,
    MatListModule
  ],
  declarations: [],
  exports: [
    MatInputModule,
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatGridListModule,
    ScrollDispatchModule,
    MatTabsModule,
    MatCardModule,
    MatMenuModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatIconModule,
    MatTooltipModule,
    MatListModule
  ]
})

export class MaterialModule {
}
