import { Component, OnInit, ViewChild , ElementRef , Renderer } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pharma-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  @ViewChild('username') username: ElementRef;
  hide = true;

  constructor(private renderer: Renderer,
  private router: Router) { }

  ngOnInit() {
    const element = this.renderer.selectRootElement(this.username.nativeElement);
    setTimeout(() => element.focus(), 0);
  }

  /**
   * @description - login method
   */
  login(eventObj) {
    this.router.navigateByUrl('pharma-dashboard');
    eventObj.preventDefault();
  }
}
