---
template: post
title: Explicando a Função Reduce() do JavaScript 
slug: /posts/javascript-reduce
draft: false
priority: 1
date: 2021-08-24T16:28:53.596Z
description: Função nativa do JavaScript para reduzir um array.
category: JavaScript
tags:
  - Programação
  - JS Functions
  - Funções Nativas
  - JS
  - JavaScript
  - Reduce
---

## Como usar a função reduce() do JavaScript ?

<center>

![reduce](/media/javascript-reduce/reduce.png)

</center>

## Intro

O JavaScript tem diversas funções nativas para manipular arrays. Essas funções permitem que você crie coisas mais complexas sem precisar 
de uma biblioteca, de um framework ou de "inventar a roda novamente". 
**A função nativa chamada `reduce()` que pode ser usada para reduzir um array.**
Vamos ver como ela funciona.

## Explicando

Vamos usar o meu array clássico de 5 números para entender como funciona a função `reduce()`.:

```javascript
const numbers = [1, 2, 3, 4, 5]
```

Usaremos, para chamar,

```javascript
numbers.reduce()
```

A função **_"reduce()"_** espera receber dentro dela, como parâmetro, outra função.
<br/>Exemplo de uma função para aplicar:

```javascript
function somaValores(acumulador, valorAtual) {
  return acumulador + valorAtual
}
```

> Essa função soma os valores usando o acumulador para armazenar temporariamente o resultado da soma entre os elementos do array representado 
pelo parâmetro chamado valorAtual.

### Aplicando na prática

> Inserindo essa nossa função criada como parâmetro na função **_"reduce()"_** aplicada em nosso array, teremos:

```javascript
const numbers = [1, 2, 3, 4, 5]

function somaValores(acumulador, valorAtual) {
  return acumulador + valorAtual
}

var total = numbers.reduce(somaValores)

console.log(total) // 15
```

Executando esse script, no console, retorna:

```
15
```

### Aprofundando

A função **_"reduce()"_** também aceita um segundo parâmetro, que é uma função ou um valor que será aplicado ao acumulador.
Lembrando que acumulador é o primeiro parâmetro passado na função usada para aplicar o **_"reduce()"_** a um array.
<br/>Exemplo:

```javascript
const numbers = [1, 2, 3, 4, 5]

function somaValores(acumulador, valorAtual) {
  return acumulador + valorAtual
}

var total = numbers.reduce(somaValores, 10)

console.log(total) // 25

```
Executando esse script, no console, retorna:

```
25
```

> Na prática, não é comum criar uma função separada para usar o **_"reduce()"_** e sim já criar uma arrow function dentro dos parâmetros,<br/>Exemplo:

```javascript
const numbers = [1, 2, 3, 4, 5]

var total = numbers.reduce((acumulador, valorAtual) => {
  return acumulador + valorAtual
}, 10)

console.log(total) // 25

```
Executando esse script, no console, retorna:

```
25
```

> A função usada para trabalhar com o **_"reduce()"_** é chamada de **_"callback"_**. Ela pode receber até 4 parâmetros. Um Acumulador, um valor e dois parâmetros opcionais.<br/>Exemplo:

```javascript
const numbers = [1, 2, 3, 4, 5]

numbers.reduce(function(acumulador, valorAtual, index, array) {
  return acumulador + valorAtual;
});
// 10

```

Executando esse script, no console, retorna:

```
10
```

> A função **_"callback"_** será invocada 5 vezes, com os argumentos e valores em cada chamada sendo (passando 0 para valor inicial de acumulador como segundo parâmetro):

|                   | Acumulador | valorAtual | index | array           | valor de retorno   |
| ---               | ---        | ---        | ---   | ---             | ---                |  
| Primeira Chamada  | 0          | 1          | 0     | [1, 2, 3, 4, 5] | 1                  |
| Segunda Chamada   | 1          | 2          | 1     | [1, 2, 3, 4, 5] | 3                  |
| Terceira Chamada  | 2          | 3          | 2     | [1, 2, 3, 4, 5] | 6                  |
| Quarta Chamada    | 3          | 4          | 3     | [1, 2, 3, 4, 5] | 10                 |
| Quinta Chamada    | 4          | 5          | 4     | [1, 2, 3, 4, 5] | 15                 |


> valor retornado pelo reduce será o da última chamada à callback !

O **_"reduce()"_** pode ser uma ferramenta usada para fazer coisas mais complexas, <br/> como:

#### Contando Valores iguais em um array e adiciona-los em um Objeto

```javascript	
const nomes =  ["João", "Maria", "José", "Joana", "José", "João", "Maria", "José", "Joana", "José"]

const quantidade = nomes.reduce((acumuladorDeNomes, nome) => {
if (nome in acumuladorDeNomes) {
  acumuladorDeNomes[nome]++
} else {
  acumuladorDeNomes[nome] = 1
}
return acumuladorDeNomes
}, {})

console.log(quantidade)

```

Executando esse script, no console, retorna:

```javascript
{
  "João": 2,	
  "Maria": 2,
  "José": 4,
  "Joana": 2,
}
```

## Referências
(MDN - Mozilla)[https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce]

## Dúvidas?


Para qualquer dúvida, sugestões e comentários, lembre-se que esse blog é openSource e seu código é aberto e está [disponível no meu github.](https://github.com/israelcena/siteblog)

Além disso, você pode usar também a seção comentários aqui em baixo!

Saudações, _Israel Cena_. 