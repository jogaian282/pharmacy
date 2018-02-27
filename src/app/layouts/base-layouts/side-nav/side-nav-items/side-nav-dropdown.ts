import { Component, OnInit, ViewChild , ViewEncapsulation, Input} from '@angular/core';

@Component({
    selector: 'pharma-sidebar-nav-dropdown',
    template: `
      <a class="nav-link nav-dropdown-toggle mat-button" pharmaNavDropdownToggle>
        <mat-icon class="mat-icon material-icons" role="img" aria-hidden="true" *ngIf="isIcon()">
        {{link.icon}}
        </mat-icon>
        <span>{{ link.name }}</span>
        <span class="toolbar-filler"></span>
        <mat-icon class="menu-caret mat-icon material-icons" role="img" aria-hidden="true">keyboard_arrow_right</mat-icon>
      </a>
      <ul class="nav-dropdown-items">
        <ng-template ngFor let-child [ngForOf]="link.children">
          <pharma-sidebar-nav-item [item]='child'></pharma-sidebar-nav-item>
        </ng-template>
      </ul>
    `
  })

export class SidebarNavDropdownComponent {

    @Input() link: any;

    isIcon() {
        return this.link.icon ? true : false;
    }

    constructor() { }
}
