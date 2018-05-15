import { Component } from '@angular/core';
import { SettingsService } from './services/service.index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( public _ajustes: SettingsService ) { // ya con solo inyectarlo aquí, va a disparar el constructor del SettingsService

  }
}
