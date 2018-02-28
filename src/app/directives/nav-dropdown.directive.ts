import { Directive , HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[pharmaNavDropdown]'
})

export class NavDropdownDirective {

  showClassList = [];
  constructor(private el: ElementRef) {
    this.showClassList = this.el.nativeElement.classList;
  }

  toggle() {
    // console.log(this.el);
    // this.getClassList();
    // console.log(this.el.nativeElement.classList);
    this.el.nativeElement.classList.toggle('open');
    // if (this.el.nativeElement.classList.contains('open')) {
      // this.el.nativeElement.classList.toggle('open');
    // }
  }

  // getClassList() {
  //   console.log(this.showClassList);
  // }

}
