/* EXERCICIOS RELACIONADOS A OBJETOS*/

/* EXERCICIO 1*/

// Transforme o objeto abaixo em uma Constructor Function
// function Pessoa(nome, idade) {
//     this.nome = nome;
//     this.idade = idade;
//     this.andar = function () {
//         console.log(this.nome + ' andou');
//     };
// }
// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
// const joao = new Pessoa('Joao', 20)
// const maria = new Pessoa('Maria', 25)
// const bruno = new Pessoa('Joao', 20)


// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos
// function Dom(seletor) {
//     this.elements = document.querySelectorAll(seletor);
//     this.addClass = function (classe) {
//         this.elements.forEach((item) => {
//             item.classList.add(classe)
//         })
//     };
//     this.removeClass = function (classe) {
//         this.elements.forEach((item) => {
//             item.classList.remove(classe)
//         })
//     }
// }

// const li = new Dom('li');



/* EXERCICIO 3*/

// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne o nome completo da pessoa

// function Pessoa(nome, sobrenome, idade) {
//     this.nome = nome;
//     this.sobrenome = sobrenome;
//     this.idade = idade
// }

// Pessoa.prototype.nomeCompleto = function () {
//     return `${this.nome} ${this.sobrenome}`;
// }


// Liste os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, Document

// Object.getOwnPropertyNames(NodeList.prototype)
// Object.getOwnPropertyNames(HTMLCollection.prototype);
// Object.getOwnPropertyNames(Document.prototype);

// Liste os construtores dos dados abaixo

// const li = document.querySelector('li');
// li.constructor.name; // 'HTMLLIElement'
// li.click.constructor.name; // Function
// li.innerText; // String
// li.value; // Number
// li.hidden; // Boolean
// li.offsetLeft; // Number
// li.click(); // Undefined

/*
CADA CONSTRUCTOR TEM SEU PROPRIO PROTOTYPE, COM FUNCOES DIFERENTES, POR ISSO TEMOS QUE SABE QUAL O CONSTRUCTOR DO ELEMENTO.
*/

// Qual o construtor do dado abaixo:
// li.hidden.constructor.name; // String



/* EXERCICIO 3 */

// Liste 5 objetos nativos

// String
// Number
// Boolean
// Function
// Array


// Liste 5 objetos do browser
// Window
// HTMLAllCollection
// Document
// NodeList
// NodeFilter


// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox
// if (typeof document.webkitCancelFullScreen !== "undefined") {
//     console.log("Existe")
// } else {
//     console.log("Nao existe")
// }



/* EXERCICIO  4*/

// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento
// const transacoes = [
//     {
//         descricao: 'Taxa do Pão',
//         valor: 'R$ 39',
//     },
//     {
//         descricao: 'Taxa do Mercado',
//         valor: 'R$ 129',
//     },
//     {
//         descricao: 'Recebimento de Cliente',
//         valor: 'R$ 99',
//     },
//     {
//         descricao: 'Taxa do Banco',
//         valor: 'R$ 129',
//     },
//     {
//         descricao: 'Recebimento de Cliente',
//         valor: 'R$ 49',
//     },
// ];

// let taxaTotal = 0;
// let recebimentoTotal = 0;
// transacoes.forEach((item) => {
//     const valorLimpo = +item.valor.replace('R$ ', '');
//     if (item.descricao.slice(0, 4) === 'Taxa') {
//         taxaTotal += valorLimpo;
//     } else if(item.descricao.startsWith("Recebi")) {
//         recebimentoTotal += valorLimpo
//     } else {
//         console.log(item.descricao + " ERRORR")
//     }
// })
// console.log(taxaTotal)
// console.log(recebimentoTotal)


// Retorne uma array com a lista abaixo
// const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
// const transportesArray = transportes.split(';')
// console.log(transportesArray);


// Substitua todos os span's por a's
// let html = `<ul>
//     <li><span>Sobre</span></li>
//     <li><span>Produtos</span></li>
//     <li><span>Contato</span></li>
//     </ul>`;
//     html = html.split('span').join('a')
//     console.log(html)


// Retorne o último caracter da frase
// const frase = 'Melhor do ano!';
// console.log(frase.charAt(frase.length - 1))


// Retorne o total de taxas
// const transacoes2 = ['Taxa do Banco', ' TAXA DO PÃO', ' taxa do mercado ', 'depósito Bancário', 'TARIFA especial']

// let taxasTotal = 0;
// transacoes2.forEach(item => {
//     let items = item.toLowerCase().trim().slice(0,4);
//     if(items === 'taxa') {
//         taxasTotal++
//     }
// })
// console.log(taxasTotal)



/* EXERCICIO 5 */

// Retorne um número aleatório
// entre 1050 e 2000
// console.log(Math.floor(Math.random() * (2000 - 1050 + 1) + 1050))

// Retorne o maior número da lista abaixo
// const numeros = '4, 5, 20, 8, 9';
// const arrayNumeros = numeros.split(', ')
// console.log(arrayNumeros)
// console.log(...arrayNumeros)
// console.log(Math.max(...arrayNumeros));

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total

// const listaPrecos = ['R$ 59,99', ' R$ 100,222',
//  'R$ 230 ', 'r$ 200']

//  function limpaPreco(preco) {
//     preco = +preco.toUpperCase().replace('R$ ', '').trim().replace(',', '.')
//     preco = +preco.toFixed(2)
//     return preco;
//  }

//  let somaTotal = 0;
//  listaPrecos.forEach((preco) => [
//     somaTotal += limpaPreco(preco)
//  ])


// console.log(somaTotal)



/* EXERCICIO 6 */

// const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o último valor de comidas e coloque em uma variável
// Adicione 'Arroz' ao final da array
// Adicione 'Peixe' e 'Batata' ao início da array
// const primeiroValor = comidas.shift()
// const ultimoValor = comidas.pop()
// console.log(primeiroValor)
// console.log(ultimoValor)
// comidas.push('Arroz')
// comidas.unshift('Peixe', 'Batata')
// console.log(comidas)

// Arrume os estudantes em ordem alfabética
// Inverta a ordem dos estudantes
// Verifique se Joana faz parte dos estudantes
// Verifique se Juliana faz parte dos estudantes
// const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber',
// 'Julia'];
// estudantes.sort()
// console.log(estudantes)
// estudantes.reverse()
// console.log(estudantes)
// console.log(estudantes.includes('Joana'))
// console.log(estudantes.includes('Juliana'))


// Substitua section por ul e div com li,
// utilizando split e join
// let html = `<section>
//  <div>Sobre</div>
//  <div>Produtos</div>
//  <div>Contato</div>
//  </section>`

// html = html.split('section');
// html = html.join('ul')
// html = html.split('div');
// html = html.join('li')
// console.log(html)


// Remova o último carro, mas antes de remover
// salve a array original em outra variáve
// const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// const carrosSalvos = carros.slice();
// carros.pop()
// console.log(carros)
// console.log(carrosSalvos)



/* EXERCICIO 7 */

// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
// const cursos = Array.from(document.querySelectorAll('.curso'));
// const objetosCurso = cursos.map((curso) => {
//     const titulo = curso.querySelector('h1').innerText;
//     const descricao = curso.querySelector('p').innerText;
//     const aulas = curso.querySelector('.aulas').innerText;
//     const horas = curso.querySelector('.horas').innerText;
//     return {
//         titulo,
//         descricao,
//         aulas,
//         horas,
//     }
// })

// console.log(objetosCurso)

// Retorne uma lista com os
// números maiores que 100
// const numeros = [3, 44, 333, 23, 122, 322, 33];
// const numerosMaiores = numeros.filter((item) => {
//     if (item > 100) {
//         return item
//     }
// })
// console.log(numerosMaiores)

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
// const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']
// const baixo = instrumentos.some((item) => {
//     if(item === 'Baixo') {
//         return item
//     }
// })

// console.log(baixo)

// Retorne o valor total das compras
// const compras = [
//     {
//         item: 'Banana',
//         preco: 'R$ 4,99'
//     },

//     {
//         item: 'Ovo',
//         preco: 'R$ 2,99'
//     },
//     {
//         item: 'Carne',
//         preco: 'R$ 25,49'
//     },
//     {
//         item: 'Refrigerante',
//         preco: 'R$ 5,35'
//     },
//     {
//         item: 'Quejo',
//         preco: 'R$ 10,60'
//     }
// ]

// const valorTotal = compras.reduce((acumulador, item) => {
//     const precoLimpo = +item.preco.toUpperCase().replace('R$', '').trim().replace(',', '.')
//     return acumulador + precoLimpo;
// }, 0)

// console.log(valorTotal)



/* EXERCICIO 8 */

// Crie uma função que verifique
// corretamente o tipo de dado
// function verificarDado(object) {
//     return Object.prototype.toString.call(object)
// }

// console.log(verificarDado([]));

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável
// const quadrado = {}
// Object.defineProperties(quadrado, {
//     lados: {
//         value: 4,
//         enumerable: true,
//     }
// })

// quadrado.lados = 10
// console.log(quadrado)

// Previna qualquer mudança
// no objeto abaixo
// const configuracao = {
//     width: 800,
//     height: 600,
//     background: '#333'
// }
// Object.freeze(configuracao)

   // Liste o nome de todas
   // as propriedades do
   // protótipo de String e Array

//    console.log(Object.getOwnPropertyNames(Array.prototype))
//    console.log(Object.getOwnPropertyNames(String.prototype))
