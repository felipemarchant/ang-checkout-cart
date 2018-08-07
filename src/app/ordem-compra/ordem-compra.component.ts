import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.service';
import { Pedido } from '../shared/pedido.model';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  providers: [ OrdemCompraService ],
  styleUrls: ['./ordem-compra.component.css']
})
export class OrdemCompraComponent implements OnInit {

  public pedido: Pedido = new Pedido('','','','');

  public endereco: string = '';
  public numero: string = '';
  public complemento: string = '';
  public formaPagamento: string = '';

  public enderecoValido: boolean;
  public numeroValido: boolean;
  public complementoValido: boolean;
  public formaPagamentoValido: boolean;

  constructor(private orderCompraService:OrdemCompraService) { }

  ngOnInit() {
    //this.orderCompraService.efetivarCompra();
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
  public confirmarCompra():void{

    this.pedido.endereco = this.endereco;
    this.pedido.numero = this.numero;
    this.pedido.complemento = this.complemento;
    this.pedido.formaPagamento = this.formaPagamento;

    this.orderCompraService.efetivarCompra(this.pedido).subscribe((resp) => console.log(resp));
  }

}
