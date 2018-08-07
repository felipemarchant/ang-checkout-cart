import { Component, OnInit } from '@angular/core';
import { OfertasServices } from '../ofertas.service';
import { Oferta }  from '../shared/ofertas.model';
import { Observable, Subject, of } from 'rxjs';
import { switchMap, debounceTime, distinctUntilChanged, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [ OfertasServices ]
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]>;
  //public list_ofertas: Oferta[];
  private subjectPesquisa: Subject<string> = new Subject<string>();

  constructor(private ofertasService : OfertasServices) { }

  ngOnInit() {
    this.ofertas = this.subjectPesquisa.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap((termo: string) => {
        if(termo.trim() === ''){
          return of<Oferta[]>([]);
        }

        return this.ofertasService.pesquisaOfertas(termo);
      })
    );

    /*this.ofertas.subscribe( (ofertas: Oferta[]) => {
      console.log(ofertas);
      this.list_ofertas = ofertas;
    });
    */
  }

  public pesquisa (termoDaBusca: string): void{
        
    /*this.ofertas = this.ofertasService.pesquisaOfertas(termoDaBusca);
    this.ofertas.subscribe(
      (oferta: Oferta[]) => console.log(oferta),
      () => console.log('Fluxo de Stream OK!')
    );*/

    this.subjectPesquisa.next(termoDaBusca);

  }

  public limpaPesquisa():void{
    this.subjectPesquisa.next('');
  }

}
