import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
// import { retry } from 'rxjs/operators';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {

   this.subscription = this.regresaObservable()
    .subscribe(
      numero => console.log('Subs ', numero ),
      error => console.error('Error en el obs (dos veces)', error ),
      () => console.log( 'El observador terminó!')
    );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    // console.log( 'La página se va a cerrar');
    this.subscription.unsubscribe();
  }

  regresaObservable(): Observable<any> {
    return new Observable( observer => {

      let contador = 0;

      const intervalo = setInterval( () => {
        contador++;

        const salida = {
          valor: contador
        };

        observer.next( salida );
        // if ( contador === 3 ) {
        //   clearInterval( intervalo );
        //   observer.complete();
        // }
        // if ( contador === 2 ) {
        //   observer.error('Auxilio!');
        // }


      }, 500 );
    }).retry(2).map( (resp: any) => {
      return resp.valor;
    }).filter( (valor, index) => {
      if ( (valor % 2) === 1) {
        // impar
        return true;
      } else {
        // par
        return false;
      }
    } );
  }

}
