import { Component, OnInit } from '@angular/core';
import { OfertasServices } from '../ofertas.service';
import { Oferta } from '../shared/ofertas.model';

@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.component.html',
  styleUrls: ['./restaurante.component.css'],
  providers: [ OfertasServices ]
})
export class RestauranteComponent implements OnInit {

  public ofertas: Oferta[];

  constructor(private ofertasServices: OfertasServices) { }

  ngOnInit() {
    this.ofertasServices.getOfertasPoCategoria('restaurante').then((ofertas: Oferta[])=> {
      this.ofertas = ofertas;
    });
  }

}
