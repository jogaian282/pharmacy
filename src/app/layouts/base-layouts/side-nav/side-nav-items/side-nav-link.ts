import { Component, OnInit, ViewChild , ViewEncapsulation, Input} from '@angular/core';

@Component({
    selector: 'pharma-sidebar-nav-link',
    template: `
      <a routerLinkActive="active" [ngClass]="hasVariant() ? 'nav-link nav-link-' + link.variant : 'nav-link'" [routerLink]="link.url">
        <span class="mat-button-wrapper">
            <span class="font-16 text-bold">{{ link.name }}</span>
        </span>
      </a>
    `
})

export class SidebarNavLinkComponent {

    @Input() link: any;

    // <mat-icon *ngIf="isIcon()" class="iconFont">{{link.isIcon}}</mat-icon>

    constructor() {
    }

    isIcon() {
        return this.link.isIcon ? true : false;
    }

    hasVariant() {
        return this.link.variant ? true : false;
    }
}

