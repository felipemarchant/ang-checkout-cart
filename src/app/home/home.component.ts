import { Component, OnInit } from '@angular/core';
import { OfertasServices } from '../ofertas.service';
import { Oferta } from '../shared/ofertas.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ OfertasServices ]
})
export class HomeComponent implements OnInit {

  public ofertas: Oferta[];

  constructor(private ofertasService: OfertasServices) { }

  async ngOnInit() {
    this.ofertas = await this.ofertasService.getOfertas();
  }

}
