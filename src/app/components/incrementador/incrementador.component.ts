import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  // @Input() leyenda: string = 'Leyenda';
  // estas variables pueden venir de afuera, por eso se usa Input
  // @Input() progreso: number = 50;

// aqui voy a demostrar que la variable no necesariamente tiene que llamarse igual
// en el componente y en el html.

@ViewChild('txtProgress') txtProgress: ElementRef;

@Input('nombre') leyenda: string = 'Leyenda';
@Input() progreso: number = 50;

@Output() valorCambia: EventEmitter<number> = new EventEmitter();

  constructor() {

  }

  ngOnInit() {
   // console.log('Leyenda', this.leyenda);
   //  console.log('Progreso', this.progreso);
  }

  onChangeProgreso( newValue: number ) {
// podriamos hacer referencia al elemento usando vanilla javascript de la siguiente forma
// const elemHTML: any = document.getElementsByName('progreso')[0];
// console.log ( elemHTML.value );



    if ( newValue >= 100 ) {
      this.progreso = 100;
    } else if ( newValue <= 0 ) {
      this.progreso = 0;
    } else {
      this.progreso = newValue;
    }

    // elemHTML.value =  this.progreso;

    // en lugar de hacerlo con vanilla javascript, definimos un decorador ViewChild (arriba)
    // con el id que le dimos al elemento en el template html

    this.txtProgress.nativeElement.value = this.progreso;
    this.valorCambia.emit( this.progreso );
  }
  cambiarValor( valor ) {

    if ((( this.progreso + valor ) > 100) || ((this.progreso + valor) <  0 )) {
      return;
    }
    this.progreso = this.progreso + valor;
    this.valorCambia.emit( this.progreso );

    this.txtProgress.nativeElement.focus();  // para enfocar en la caja que se le cambió el valor
  }
}
