import { Component, OnInit, ViewChild , ViewEncapsulation, ElementRef, HostListener } from '@angular/core';
import { navigation , icons } from '../../../menuLinks';

@Component({
  selector: 'pharma-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class SideNavComponent implements OnInit {

  @ViewChild('content') sideNav;
  @ViewChild('container') container: ElementRef;
  public navigationMenusList = navigation;
  public iconsList = icons;
  public toggleToolbar = true;
  public collapsedSidenav: boolean;
  public sideNavReference;
  public deviceType = 'desktop';
  public verticalNavType = 'expanded';
  public verticalEffect = 'side';
  public innerHeight: string;
  public isCollapsedSideBar = 'no-block';
  public isCollapsedMobile = 'no-block';
  public toggleOn = true;
  public windowWidth: number;
  public isShowToggle = true;
  public hideSideNavBackdrop: boolean;
  public visible;
  public selectedOption: string;
  public options = [
    'One',
    'Two',
    'Three'
  ];


  constructor(private eRef: ElementRef) {
    const scrollHeight = window.screen.height - 150;
    this.innerHeight = scrollHeight + 'px';
    this.windowWidth = window.innerWidth;
    this.setMenuAttributes(this.windowWidth);
  }

  ngOnInit() {
    // this.sideNavReference = this.sideNav;
    // console.log(this.sideNavReference);
  }

  /**
   * @description - Method to find screen size
   */
  public isLargeScreen() {
    // const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    // if (width > 962) {
    //     return true;
    // } else {
    //     return false;
    // }
  }

  // public onClickedOutside(e: Event) {
  //   if (this.windowWidth < 768 && this.toggleOn && this.verticalNavType !== 'offcanvas') {
  //     this.toggleOn = true;
  //     this.verticalNavType = 'offcanvas';
  //   }
  // }

  public onResize(event) {
    this.innerHeight = event.target.innerHeight + 'px';
    this.windowWidth = event.target.innerWidth;
    let reSizeFlag = true;
    if (this.deviceType === 'tablet' && this.windowWidth >= 768 && this.windowWidth <= 1024) {
      reSizeFlag = false;
    } else if (this.deviceType === 'mobile' && this.windowWidth < 768) {
      reSizeFlag = false;
    }
    if (reSizeFlag) {
      this.isShowToggle = this.setMenuAttributes(this.windowWidth);
    }
  }

  /**
   * @description - Method to define window size
   */
  public setMenuAttributes(windowWidth) {
    if (windowWidth >= 768 && windowWidth <= 1024) {
      this.visible = true;
      this.toggleToolbar = false;
      this.deviceType = 'tablet';
      this.verticalNavType = 'collapsed';
      this.verticalEffect = 'side';
      return false;
    } else if (windowWidth < 768) {
      this.visible = true;
      this.toggleToolbar = false;
      this.deviceType = 'mobile';
      this.verticalNavType = 'offcanvas';
      this.verticalEffect = 'over';
      return false;
    } else {
      this.visible = false;
      this.toggleToolbar = true;
      this.deviceType = 'desktop';
      this.verticalNavType = 'expanded';
      this.verticalEffect = 'side';
      return true;
    }
  }

  // toggleOpened() {
  //   if (this.windowWidth < 768) {
  //       this.toggleOn = this.verticalNavType === 'offcanvas' ? true : this.toggleOn;
  //       this.verticalNavType = this.verticalNavType === 'expanded' ? 'offcanvas' : 'expanded';
  //   } else {
  //       this.verticalNavType = this.verticalNavType === 'expanded' ? 'collapsed' : 'expanded';
  //   }
  // }

  // toggleOpenedSidebar() {
  //   this.isCollapsedSideBar = this.isCollapsedSideBar === 'yes-block' ? 'no-block' : 'yes-block';
  // }

  // onMobileMenu() {
  //   this.isCollapsedMobile = this.isCollapsedMobile === 'yes-block' ? 'no-block' : 'yes-block';
  // }

  public isDivider(item) {
    return item.divider ? true : false;
  }

  public isTitle(item) {
    return item.title ? true : false;
  }

  public getStatus(status) {
    this.toggleToolbar = status;
  }

  public isCollapseSideNav(status) {
    this.collapsedSidenav = status;
  }

  public close(backdropStatus) {
    // if (this.toggleOn && this.verticalNavType !== 'offcanvas') {
    //   this.toggleOn = true;
    //   this.toggleToolbar = false;
    // }
    // this.setMenuAttributes(this.windowWidth);
    this.visible = false;
    this.hideSideNavBackdrop = true;
  }

  // @HostListener('document:click', ['$event'])
  // clickout(event) {
  //   // if (this.toggleToolbar) {
  //   //   this.toggleToolbar = false;
  //   //   this.visible = true;
  //   // }
  //   if (this.windowWidth >= 768 && this.windowWidth <= 1024) {
  //     console.log(event.target.classList);
  //     // if (event.target.classList.contains('visible')) {
  //     //   console.log(event.target);
  //     // }
  //     console.log(this.eRef.nativeElement);
  //     if (this.eRef.nativeElement.contains()) {
  //       console.log(this.eRef.nativeElement);
  //     }
  //   }
  // }


}
