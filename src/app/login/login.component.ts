import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {ContactsService} from '../services/contacts.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public token;

  constructor(private api: ContactsService, private auth: AuthService) { }

  ngOnInit() {
  }

  login(value: any) {
    const payload = {
      username: value.username,
      email: value.email,
      password: value.password
    };

    this.api.login(payload)
      .subscribe(data => {
        this.token = data['token'];
        this.auth.setToken(this.token);
      });
  }

}
