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

  public idPedidoCompra:number;
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
  }
  public atualizarNumero(numero:string){
    this.numero = numero;

    if (this.numero.length > 0) {
      this.numeroValido = true;
    } else {
      this.numeroValido = false;
    }
  }
  public atualizarComplemento(complemento:string){
    this.complemento = complemento;
  }
  public atualizarFormaPagamento(formaPagamento:string){
    this.formaPagamento = formaPagamento;
    if (this.formaPagamento.length > 0) {
      this.formaPagamentoValido = true;
    } else {
      this.formaPagamentoValido = false;
    }
  }
  public confirmarCompra():void{

    this.pedido.endereco = this.endereco;
    this.pedido.numero = this.numero;
    this.pedido.complemento = this.complemento;
    this.pedido.formaPagamento = this.formaPagamento;

    this.orderCompraService.efetivarCompra(this.pedido).subscribe((idPedido:number) => this.idPedidoCompra = idPedido; );
  }

}
