import { Routes } from '@angular/router';

import { HomeComponent } from '../app/home/home.component';
import { RestauranteComponent } from '../app/restaurante/restaurante.component';
import { DiversaoComponent } from '../app/diversao/diversao.component';


export const ROUTES: Routes = [
    { path:'', component: HomeComponent },
    { path:'restaurante', component: RestauranteComponent },
    { path:'diversao', component: DiversaoComponent },
];