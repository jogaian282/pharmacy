import { Component, OnInit, ViewChild , ViewEncapsulation, Input} from '@angular/core';

@Component({
    selector: 'pharma-sidebar-nav-dropdown',
    template: `
      <a class="nav-link nav-dropdown-toggle" pharmaNavDropdownToggle>
        <i *ngIf="isIcon()" class="{{ link.icon }}"></i>
        {{ link.name }}
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
