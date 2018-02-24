import { Component, OnInit, ViewChild , ViewEncapsulation, Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pharma-sidebar-nav-item',
  template: `
    <li *ngIf="!isDropdown(); else dropdown" [ngClass]="hasClass() ? 'nav-item ' + item.class : 'nav-item'">
        <pharma-sidebar-nav-link [link]='item'></pharma-sidebar-nav-link>
    </li>
    <ng-template #dropdown>
        <li [ngClass]="hasClass() ? 'nav-item nav-dropdown ' + item.class : 'nav-item nav-dropdown'"
            [class.open]="isActive()" routerLinkActive="open" pharmaNavDropdown>
            <pharma-sidebar-nav-dropdown [link]='item'></pharma-sidebar-nav-dropdown>
        </li>
    </ng-template>
  `
})

export class SideNavItemComponent implements OnInit {

    @Input() item: any;

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    hasClass() {
        return this.item.class ? true : false;
    }

    isDropdown() {
        return this.item.children ? true : false;
    }

    thisUrl() {
        return this.item.url;
    }

    isActive() {
        return this.router.isActive(this.thisUrl(), false);
    }

}
