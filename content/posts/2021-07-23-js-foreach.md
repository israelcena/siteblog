---
template: post
title: Explicando a Função forEach() do JavaScript 
slug: /posts/js-foreach
draft: false
priority: 0
date: 2021-07-23T10:43:07.303Z
description: Função nativa do JavaScript para executar uma tarefa para cada item do array.
category: JavaScript
tags:
  - Javascript
  - JS
  - Programação
  - JS Functions
  - Funções Nativas
  - forEach
---

## O que faz o método forEach ?

<center>

![forEach](/media/forEach.png)

</center>

## Pequena Introdução

A função **_forEach_**, executará uma determinada tarefa para cada item
_(ou seja, elementos armazenados)_ de um array. Essa tarefa, deverá ser determinada através de uma função.

## Explicando

Em um array, por exemplo:

```javascript
const numbers = [1, 2, 3, 4, 5]
```

Usaremos, para chamar,

```javascript
numbers.forEach()
```

A função **_"forEach()"_** espera receber dentro dela, como parâmetro, outra função.
<br/>Exemplo:

#### Vamos usar essa função dentro de forEach()

```javascript
function consoleItem(item) {
  console.log(item)
}
```

> Essa função faz um _console.log()_ ou seja, imprime no console, o que lhe foi passada como parâmetro _(dentro dos parênteses)_.

#### Aplicando na prática

> Inserindo essa nossa função criada como parâmetro na função **.forEach()** aplicada em nosso array, teremos:

```javascript
const numbers = [1, 2, 3, 4, 5]

function consoleItem(item) {
  console.log(item)
}

numbers.forEach(consoleItem)
```

Executando esse script, no console, retorna:

```
1 2 3 4 5
```

### Aprofundando

Porém, o mais usual em javascript não é fazer uma função separada _somente_ para aplicar dentro de forEach() e sim dentro dela _(a função forEach)_ ja escrever a função como parâmetro:

```javascript
const numbers = [1, 2, 3, 4, 5]

numbers.forEach(function consoleItem(item) {
  console.log(item)
})
```

> Quando executada, essa função exibe o mesmo resultado que a sua anterior.

```
1 2 3 4 5
```

Podemos melhorar ainda mais nosso código usando **_arrows functions_**:

```javascript
const numbers = [1, 2, 3, 4, 5]

numbers.forEach(item => {
  console.log(item)
})
```

Simplificando a escrita, essa função também pode ser escrita da seguinte maneira:

```javascript
const numbers = [1, 2, 3, 4, 5]

numbers.forEach(item => console.log(item))
```

Ela retornará:

```
1 2 3 4 5
```

#### Dúvidas?

Para qualquer dúvida, sugestões e comentários, lembre-se que esse blog é openSource e seu código é aberto e está [disponível no meu github.](https://github.com/israelcena/siteblog)

Além disso, você pode usar também a seção comentários aqui em baixo!

Saudações, _Israel Cena_.
