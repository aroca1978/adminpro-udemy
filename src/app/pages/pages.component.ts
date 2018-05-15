import { Component, OnInit } from '@angular/core';

declare function init_plugins(); // esto lo hago para poder acceder a la función externa que declaré fuera de angular en assets/js/custom.js

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_plugins();
  }

}
