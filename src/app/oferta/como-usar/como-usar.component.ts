import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
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
    let id: number = this.route.parent.snapshot.params['id'];
    this.ofertasService.getComoUsarOfertaPorId(id).then( descricao => {
      this.comoUsar = descricao;
    });

  }

}
