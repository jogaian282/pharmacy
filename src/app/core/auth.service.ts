import { Injectable } from '@angular/core';

@Injectable()

export class AuthService {

  constructor() { }

  /**
   * @description - To implement logic to check whether user authenticated
   */
  get isLoggedIn() {
    return true;
  }

  /**
   * @description - To implement logic to check whether user authorized
   */
  get isAuthorized() {
    return true;
  }

}
