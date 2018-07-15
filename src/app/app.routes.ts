import { Routes } from '@angular/router';

import { HomeComponent } from '../app/home/home.component';
import { RestauranteComponent } from '../app/restaurante/restaurante.component';
import { DiversaoComponent } from '../app/diversao/diversao.component';
import { OfertaComponent } from '../app/oferta/oferta.component';
import { ComoUsarComponent } from './oferta/como-usar/como-usar.component';
import { OndeFicaComponent } from './oferta/onde-fica/onde-fica.component';


export const ROUTES: Routes = [
    { path:'', component: HomeComponent },
    { path:'restaurante', component: RestauranteComponent },
    { path:'diversao', component: DiversaoComponent },
    { path: 'oferta', component: HomeComponent },
    { 
        path: 'oferta/:id',
        component: OfertaComponent,
        children : [
            { path: '',  component: ComoUsarComponent },
            { path: 'como-usar',  component: ComoUsarComponent },
            { path: 'onde-fica',  component: OndeFicaComponent },
        ]
    },
];