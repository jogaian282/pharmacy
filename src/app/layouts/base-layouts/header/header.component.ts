import { Component, OnInit, Input , Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'pharma-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  @Output() isToggleToolbar = new EventEmitter();
  @Output() isCollapseToolbar = new EventEmitter();
  public isFullWidthToolbar = true;
  public isCollapsedSideBar = false;

  constructor() { }

  ngOnInit() {
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
