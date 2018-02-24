import { Directive , HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[pharmaNavDropdown]'
})

export class NavDropdownDirective {

  constructor(private el: ElementRef) { }

  toggle() {
    console.log('open');
    this.el.nativeElement.classList.toggle('open');
  }

}
