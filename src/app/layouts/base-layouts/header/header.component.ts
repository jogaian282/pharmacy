import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pharma-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  @Input() sideBarRef;

  constructor() { }

  ngOnInit() {
  }

  toggleSideNav() {
    this.sideBarRef.toggle();
  }

}
