import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertasServices } from '../ofertas.service';
import { Oferta } from '../shared/ofertas.model';
import CarrinhoService from '../carrinho.service';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertasServices, CarrinhoService ]
})
export class OfertaComponent implements OnInit {

  public oferta: Oferta;

  constructor(
    private route: ActivatedRoute, private ofertasServices: OfertasServices,
    private carrinhoService: CarrinhoService
  ) {}

  ngOnInit() {
    console.log(this.carrinhoService.exibirItens());
    this.route.params.subscribe((parametros:Params) => {
      this.ofertasServices.getOfertaPorId(parametros.id).then((oferta:Oferta) => this.oferta = oferta);
    });
  }

  public adicionarItemCarrinho():void 
  {
    this.carrinhoService.incluirItem(this.oferta);
  }

}
