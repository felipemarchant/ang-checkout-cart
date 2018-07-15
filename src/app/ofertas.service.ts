import { Oferta } from './shared/ofertas.model';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { URL_API } from './app.api';
import 'rxjs';

@Injectable()
export class OfertasServices {

    constructor (private http: Http){}

    public async getOfertas(){
        return this.http.get(`${URL_API}/ofertas?destaque=true`)
            .toPromise()
            .then(resp =>  resp.json());
    }

    public getOfertasPoCategoria(categoria: string): Promise<Oferta[]> {
        return this.http.get(`${URL_API}/ofertas?categoria=${categoria}`)
                 .toPromise()
                 .then(resp => resp.json());
    }

    public getOfertaPorId(id: number): Promise<Oferta>{
        return this.http.get(`${URL_API}/ofertas?id=${id}`).toPromise().then((resp) => resp.json().shift()); 
    }

    public getComoUsarOfertaPorId(id: number): Promise<string>{
        return this.http.get(`${URL_API}/como-usar?id=${id}`).toPromise().then(resp => resp.json().shift().descricao)
    }
    
}