import { Component, OnInit, Input , Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'pharma-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  @Input() sideBarRef;
  @Output() isToggleToolbar = new EventEmitter();
  isFullWidthToolbar = false;

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

}
