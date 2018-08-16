import { ItemCarrinho } from './shared/item-carrinho.model';
import { Oferta } from './shared/ofertas.model';

class CarrinhoService
{
    public itens : ItemCarrinho[] = [];

    public exibirItens(): ItemCarrinho[]{
        return this.itens;
    }

    public incluirItem(oferta:Oferta):void{
        let itemCarrinho: ItemCarrinho = new ItemCarrinho(
            oferta.id,
            oferta.imagens[0],
            oferta.titulo,
            oferta.descricao_oferta,
            oferta.valor,
            1
        );

        let itemCarrinhoExiste = this.itens.find((item: ItemCarrinho) => item.id === itemCarrinho.id);

        if (itemCarrinhoExiste)
        {
            itemCarrinhoExiste.quantidade += 1;
        }
        else
        {
            this.itens.push(itemCarrinho);
        }

    }
    public totalCarrinhoCompras():number
    {
        let total:number = 0;
        this.itens.map((item: ItemCarrinho) =>{
            total += total + (item.valor * item.quantidade);
        });
        return total;

    }

    public adicionarQuantidade(item: ItemCarrinho):void
    {
        let itemCarrinho = this.itens.find((itemC :ItemCarrinho) => item.id === itemC.id );

        if (itemCarrinho)
        {
            itemCarrinho.quantidade += 1;
        }

    }

    public removerQuantidade(item: ItemCarrinho):void
    {
        let itemCarrinho = this.itens.find((itemC :ItemCarrinho) => item.id === itemC.id );

        if (itemCarrinho)
        {
            if (itemCarrinho.quantidade < 2)
            {
                var index = this.itens.indexOf(itemCarrinho);
                if (index !== -1) this.itens.splice(index, 1);
            }
            else
            {
                itemCarrinho.quantidade -= 1;
            }
        }

    }
}

export { CarrinhoService  };