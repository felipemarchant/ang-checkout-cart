import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css']
})
export class OrdemCompraComponent implements OnInit {

  public endereco: string = '';
  public numero: string = '';
  public complemento: string = '';
  public formaPagamento: string = '';

  public enderecoValido: boolean;
  public numeroValido: boolean;
  public complementoValido: boolean;
  public formaPagamentoValido: boolean;

  constructor() { }

  ngOnInit() {
  }

  public atualizarEndereco(endereco:string){
    this.endereco = endereco;

    if(this.endereco.length > 3){
      this.enderecoValido = true;
    }else{
      this.enderecoValido = false;
    }
    console.log(endereco);
  }
  public atualizarNumero(numero:string){
    this.numero = numero;

    if (this.numero.length > 0) {
      this.numeroValido = true;
    } else {
      this.numeroValido = false;
    }
    console.log(numero);
  }
  public atualizarComplemento(complemento:string){
    this.complemento = complemento;
    console.log(complemento);
  }
  public atualizarFormaPagamento(formaPagamento:string){
    this.formaPagamento = formaPagamento;
    if (this.formaPagamento.length > 0) {
      this.formaPagamentoValido = true;
    } else {
      this.formaPagamentoValido = false;
    }
    console.log(formaPagamento);
  }

}
