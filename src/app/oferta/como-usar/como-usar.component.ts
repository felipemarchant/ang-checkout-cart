import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { OfertasServices } from '../../ofertas.service';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers: [ OfertasServices ]
})
export class ComoUsarComponent implements OnInit {

  public comoUsar: string = '';

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasServices
  ) { }

  ngOnInit() {
    this.route.parent.params.subscribe((parametros: Params) => {
      let id: number = parametros.id;
      this.ofertasService.getComoUsarOfertaPorId(id).then(descricao => {
        this.comoUsar = descricao;
      });
    });


  }

}
