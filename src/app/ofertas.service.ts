import { Oferta } from './shared/ofertas.model';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs';

@Injectable()
export class OfertasServices {

    constructor (private http: Http){}

    public async getOfertas(){
        return this.http.get('http://localhost:3000/ofertas?destaque=true')
            .toPromise()
            .then(resp =>  resp.json());
    }

    public getOfertasPoCategoria(categoria: string): Promise<Oferta[]> {
        return this.http.get(`http://localhost:3000/ofertas?categoria=${categoria}`)
                 .toPromise()
                 .then(resp => resp.json());
    }
}