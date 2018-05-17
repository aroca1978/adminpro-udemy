import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  labelPagina: string = '';
  constructor(
    private router: Router,
    public title: Title,
    public meta: Meta
  ) {
      this.getDataRoute().subscribe( data => {
        this.labelPagina = data.titulo;
        this.title.setTitle(this.labelPagina);
        const metaTag: MetaDefinition = {
          name: 'description',
          content: this.labelPagina
        };
        this.meta.updateTag( metaTag );
      });
  }

  getDataRoute() {
    return this.router.events
    .filter( evento => evento instanceof ActivationEnd )
    .filter ( (evento: ActivationEnd) => evento.snapshot.firstChild === null )
    .map( (evento: ActivationEnd) => evento.snapshot.data );
  }

  ngOnInit() {
  }

}
