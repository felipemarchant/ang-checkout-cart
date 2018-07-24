import { Component, OnInit } from '@angular/core';
import { OfertasServices } from '../ofertas.service';
import { Oferta }  from '../shared/ofertas.model';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [ OfertasServices ]
})
export class TopoComponent implements OnInit {

  public ofertas: Oferta[];

  constructor(private ofertasService : OfertasServices) { }

  ngOnInit() {
  }

  pesquisa (termoDaBusca: string): void{
    this.ofertasService.pesquisaOfertas(termoDaBusca).then((resp: Oferta[]) => console.log(resp));
  }

}
