import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare function init_plugins(); // esto lo hago para poder acceder a la función externa que declaré fuera de angular en assets/js/custom.js

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( public router: Router) { }

  ngOnInit() {
    init_plugins();
  }

  ingresar() {
    this.router.navigate([ '/dashboard' ]);
  }

}
