import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  progreso1: number = 20;
  progreso2: number = 30;

  constructor() { }

  ngOnInit() {
  }
  actualizarProgress( event: number ) { // esta funcion no la usé
    // porque no hace falta una función para una sola línea... en este caso
    // lo único q hice en la plantilla fue (valorCambia)="progreso1 = $event"
    // pero dejo esto aquí para recordar que puede ser una funcion completa
    // console.log('Evento: ', event );
    // this.progreso1 = event;
  }

}
