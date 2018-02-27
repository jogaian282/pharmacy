import { Component, OnInit, Input , Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'pharma-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  @Input() sideBarRef;
  @Output() isToggleToolbar = new EventEmitter();
  @Output() isCollapseToolbar = new EventEmitter();
  isFullWidthToolbar = true;
  public isCollapsedSideBar = true;

  constructor() { }

  ngOnInit() {
  }

  toggleSideNav() {
    this.isFullWidthToolbar = !this.isFullWidthToolbar;
    this.emitData(this.isFullWidthToolbar);
  }

  emitData(status) {
    this.isToggleToolbar.emit(status);
    this.sideBarRef.toggle();
  }

  collapseSideNav() {
    this.isCollapsedSideBar = !this.isCollapsedSideBar;
    this.isCollapseToolbar.emit(this.isCollapsedSideBar);
    this.sideBarRef.toggle();
  }

}
