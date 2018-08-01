import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertasServices } from '../ofertas.service';
import { Oferta } from '../shared/ofertas.model';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertasServices ]
})
export class OfertaComponent implements OnInit {

  public oferta: Oferta;

  constructor(
    private route: ActivatedRoute, private ofertasServices: OfertasServices
  ) {}

  ngOnInit() {

    this.route.params.subscribe((parametros:Params) => {
      this.ofertasServices.getOfertaPorId(parametros.id).then((oferta:Oferta) => this.oferta = oferta);
    });
  }

}
