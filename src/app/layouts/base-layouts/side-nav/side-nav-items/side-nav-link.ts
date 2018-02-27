import { Component, OnInit, ViewChild , ViewEncapsulation, Input} from '@angular/core';

@Component({
    selector: 'pharma-sidebar-nav-link',
    template: `
      <a appdropdowntoggle="" routerLinkActive="active"
      [ngClass]="hasVariant() ? 'nav-link nav-link-' + link.variant : 'nav-link'"
      [routerLink]="link.url" class="mat-ripple ng-star-inserted  mat-button" matripple=""
      style="flex-direction: row; box-sizing: border-box; display: flex;">
        <mat-icon class="mat-icon material-icons" role="img" *ngIf="isIcon()" aria-hidden="true">{{link.icon}}</mat-icon>
        <span class="item-name lvl1">{{link.name}}</span>
        <span fxflex="" style="flex: 1 1 1e-09px; box-sizing: border-box;"></span>
      </a>
    `
})

export class SidebarNavLinkComponent {

    @Input() link: any;

    // <mat-icon *ngIf="isIcon()" class="iconFont">{{link.isIcon}}</mat-icon>

    constructor() {
    }

    isIcon() {
        return this.link.icon ? true : false;
    }

    hasVariant() {
        return this.link.variant ? true : false;
    }

    //   <a routerLinkActive="active" [ngClass]="hasVariant() ? 'nav-link nav-link-' + link.variant : 'nav-link'" [routerLink]="link.url">
    //     <span class="mat-button-wrapper">
    //         <span class="font-16 text-bold">{{ link.name }}</span>
    //     </span>
    //   </a>
}

