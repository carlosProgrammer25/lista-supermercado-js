//item 'produto':'valor produto';
var item = [];

//ADICIONAR PRODUTOS NA LISTA E TOTAL DA COMPRAS
document.querySelector('input[type=submit]')
    .addEventListener('click', () => {

             //selecionando elemento input do valor e produto
        var nomeProduto = document.querySelector('input[name=nome_produto]');
        var precoProduto = document.querySelector('input[name=value_produto]');

        //validando o produto
        if(nomeProduto.value == "" || precoProduto.value == ''){
            alert('Digite novamente')
        }else{
            //criando array com nome produtos e valor dos produtos
            item.push({
            nome: nomeProduto.value,
            valor: parseFloat(precoProduto.value)
            });

            //mostrando botao limpar na tela
            //ao trocar a classe, add/rem nao usar o '.'
            document.querySelector('.esconder').classList.add('mostrar');
        };
     

        //selecionando elemento html para exibir lista dos produtos
        let lista_produtos = document.querySelector('.lista_produtos');
        var soma = 0;
        //limpando a lista
        lista_produtos.innerHTML = '';

        //percorrendo todo array map()
        item.map((val) => {
            //pegando valor do produto na chave 'valor'
            soma +=parseFloat(val.valor);

            //adicionar conteudo
            lista_produtos.innerHTML += `
            <div class="lista_produtos_single">
            <h3>`+ val.nome + `</h3>
            <h3 class="texto_valor"><span>R$`+ val.valor + `</span></h3>
            </div><!--lista_produtos-->
            `;
        })

        //toFixed serve para trnasormar numeros com casas decimais
        soma = soma.toFixed(2)

        //limpando inputs produto e valor da lista
        nomeProduto.value = '';
        precoProduto.value = '';

        //selecionando elemento span total valor produtos
        let somaProdutos = document.querySelector('.soma_produto h1 span');
        //adicionando total preço da lista
        somaProdutos.innerHTML = 'R$'+soma;

        
    });

    
//LIMPAR     LISTA E TOTAL VALOR
//retornando um objjeto com tag button 
let button_limpar = document.querySelector('button[name=limpar]');

button_limpar.addEventListener('click', ()=>{
    console.log(item);
    //limpando variavel que recebe os produtos+valor
    item = [];
    console.log(item);
    //limpar lista dos produtos
   document.querySelector('.lista_produtos').innerHTML = '';
    //limpando total reais da lista
   document.querySelector('.soma_produto h1 span').innerHTML = '';

   //escondendo botao limpar dps de limpar a lista
   //class lista usada para manipular a classe do elemento -> replace('atual', 'nova') trocar a clss 
    button_limpar.classList.replace('mostrar','esconder');

});



/*
Este projeto foi desenvolvido com JavaScript puro,
utilizando apenas recursos nativos da linguagem e da API do DOM,
sem dependência de frameworks ou bibliotecas externas.
*/
