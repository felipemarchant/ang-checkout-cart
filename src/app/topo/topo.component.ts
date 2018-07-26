import { Component, OnInit } from '@angular/core';
import { OfertasServices } from '../ofertas.service';
import { Oferta }  from '../shared/ofertas.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [ OfertasServices ]
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]>;

  constructor(private ofertasService : OfertasServices) { }

  ngOnInit() {
  }

  pesquisa (termoDaBusca: string): void{
    this.ofertasService.pesquisaOfertas(termoDaBusca)
  }

}
