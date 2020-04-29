import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from './auth.service';

@Injectable()
export class ContactsService {
  url = 'http://localhost:2000/contact';
  registerUrl = 'http://localhost:2000/auth/login';

  constructor(private http: HttpClient, private auth: AuthService) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      Authorization: `JWT ${this.auth.getToken()}`
    })
  }

  getContacts() {
    return this.http.get(this.url, this.httpOptions);
  }

  addContact(value: any) {
    const body = {
      firstName: value.firstName,
      lastName: value.lastName,
      email: value.email,
      company: value.company,
      phone: value.phone,
    };
    return this.http.post(this.url, body, this.httpOptions);
  }

  login(payload: any) {
    return this.http.post(this.registerUrl, payload);
  }

}
