/* Side-nav-title */
import { Component, OnInit, ViewChild , ViewEncapsulation, Input, ElementRef, Renderer2} from '@angular/core';

@Component({
  selector: 'pharma-sidebar-nav-title',
  template: ''
})

export class SideNavTitleComponent implements OnInit {

    @Input() title: any;

    constructor(private el: ElementRef, private renderer: Renderer2) {
    }

    ngOnInit() {
        const nativeElement: HTMLElement = this.el.nativeElement;
        const li = this.renderer.createElement('li');
        const name = this.renderer.createText(this.title.name);

        this.renderer.addClass(li, 'nav-title');

        if (this.title.class) {
            const classes = this.title.class;
        }

        if (this.title.wrapper) {
            const wrapper = this.renderer.createElement(this.title.wrapper.element);
            this.renderer.appendChild(wrapper, name);
            this.renderer.appendChild(li, wrapper);
        } else {
            this.renderer.appendChild(li, name);
        }

        this.renderer.appendChild(nativeElement, li);
    }

}
