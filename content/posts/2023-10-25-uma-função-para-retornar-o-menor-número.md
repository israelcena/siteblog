---
template: post
title: Uma Função para retornar o menor número
slug: /posts/retornar-menor-numero
draft: false
priority: 0
date: 2023-10-25T17:43:47.079Z
description: "Mais uma da série: Refatorando meu código, Math.min()"
category: JavaScript
tags:
  - JavaScript
  - Programação
  - Dicas
---
![Imagem com a função para Retornar o menor valor](/media/retonarvalor.png "Função para Retornar o menor valor Math.min()")

## P﻿roblema

### E﻿m Mais um dia normal de trabalho, me deparei com a seguinte situação

* U﻿m campo do tipo input no meu formulário, chamado **valor considerado**, será preenchido automaticamente com um valor. Esse valor, sairá de uma lógica entre outros dois campos:

  * **Valor da mensalidade**, e
  * **Valor do teto**

#### R﻿egra:

* Caso o valor do teto seja maior do que o valor da mensalidade, o campo “valor
  considerado” será preenchido com o valor da mensalidade.
* Caso o valor do teto seja menor do que o valor da mensalidade, o campo “valor considerado” será preenchido com o valor do teto.

F﻿ácil! Eu pensei! 

L﻿ogo coloquei a mão na massa:

```javascript
function retornaMenorValor (valorinformado , valorteto, resultado) {

    if( valorinformado > valorteto) return  resultado = Number(valorteto);
    if( valorinformado < valorteto) return  resultado = Number(valorinformado);
    if( valorinformado == valorteto) return  resultado = Number(valorteto);
    
};
```

D﻿epois de fazer esse "Frankenstein"

**M﻿e perguntei**: Deve existir um jeito melhor de fazer isso, e existe, por isso criei esse post.

#### Math.min()

<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min>

M﻿e deparei esse método e me senti um idiota...

M﻿inha nova função ficaria:

```javascript
const retornaMenorValor = (valorinformado , valorteto) => Math.min(valorinformado , valorteto);
```

S﻿im, tudo em apenas uma linha, e aí melhorando ainda mais a função, deixando ela livre para receber quantos valores quiser:

```javascript
const retornaMenorValor = (...valores) => Math.min(...valores);
```

D﻿essa forma, posso adicionar quantos valores quiser! 


﻿Gostou ? 



Comenta aí