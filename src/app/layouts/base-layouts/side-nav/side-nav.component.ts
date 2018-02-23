import { Component, OnInit, ViewChild , ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'pharma-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SideNavComponent implements OnInit {

  @ViewChild('sidenav') sideNav;

  sideNavReference;

  constructor() {
  }

  ngOnInit() {
    this.sideNavReference = this.sideNav;
  }

  /**
   * @description - Method to find screen size
   */
  isLargeScreen() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width > 720) {
        return true;
    } else {
        return false;
    }
  }

}
