import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public id: string;
  public pw: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient) { }

  ngOnInit() {
  }

  login() {
    return this.http.post('/api/login', { id: this.id, pw: this.pw }, { responseType: 'text' }).subscribe(response => {
      console.log(response);
    });
  }

}
