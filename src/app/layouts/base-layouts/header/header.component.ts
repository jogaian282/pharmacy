import { Component, OnInit, Input , Output , EventEmitter , AfterViewInit } from '@angular/core';

@Component({
  selector: 'pharma-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit, AfterViewInit {

  @Output() isToggleToolbar = new EventEmitter();
  @Output() isCollapseToolbar = new EventEmitter();
  public isFullWidthToolbar = true;
  public isCollapsedSideBar = false;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  toggleSideNav() {
    this.isFullWidthToolbar = !this.isFullWidthToolbar;
    this.emitData(this.isFullWidthToolbar);
  }

  emitData(status) {
    this.isToggleToolbar.emit(status);
  }

  collapseSideNav() {
    this.isCollapsedSideBar = !this.isCollapsedSideBar;
    this.isCollapseToolbar.emit(this.isCollapsedSideBar);
  }

}
