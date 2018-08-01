import { Pipe, PipeTransform } from '@angular/core';

@Pipe ({
    name : 'descricaoReduzida'
})
export class DescricaoReduzida {
    transform(texto:string, truncar_em:number):string{
        if(texto.length > 15){
            return texto.substr(0, truncar_em)+'[...]';
        }else{
            return texto;
        } 
    }
}