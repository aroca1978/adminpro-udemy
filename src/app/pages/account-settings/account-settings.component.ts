import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  // si quiero tener acceso completo al DOM, poniendo en el constructor
  // un @Inject(DOCUMENT) me permite hacerlo (aunque es mejor como se
  // hizo en incrementador.component.ts con el ElementRef)
  // pero acá lo hago de esta forma para demostrar que es posible.

  constructor( public _ajustes: SettingsService ) { }

  ngOnInit() {
    this.colocarCheck();
  }

  cambiarColor( tema: string, link: any ) {
    this.aplicarCheck( link );
    this._ajustes.aplicarTema( tema );
  }

  aplicarCheck( link: any ) {
    const selectores: any = document.getElementsByClassName('selector');
    for (const ref of selectores ) {
      ref.classList.remove('working');
    }
    link.classList.add('working');
    console.log(link.classList);
  }

  colocarCheck() {
    const selectores: any = document.getElementsByClassName('selector');
    const tema = this._ajustes.ajustes.tema;

    for (const ref of selectores ) {
      if (ref.getAttribute('data-theme') === tema) { // vanilla javascript
        ref.classList.add('working');
        break;
      }
    }
  }

}
