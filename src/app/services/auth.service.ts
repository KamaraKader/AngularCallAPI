import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  storageKey = 'contact-jwt';

  constructor() { }

  setToken(token: string) {
    localStorage.setItem(this.storageKey, token);
  }

  
  getToken() {
    return localStorage.getItem(this.storageKey);
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  loggout() {
     localStorage.removeItem(this.storageKey);
  }
}
