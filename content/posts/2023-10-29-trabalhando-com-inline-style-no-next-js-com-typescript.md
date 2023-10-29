---
template: post
title: Trabalhando com inline-style no Next.js Com TypeScript
slug: inline-style-react-next-typescript
draft: false
priority: 0
date: 2023-10-29T11:24:28.566Z
description: Uma dica de com se trabalharcom inline-style no Next Com TypeScript
category: TypeScript, NextJS
tags:
  - inline-style
  - TypeScript
---
![inline-style](/media/inline-style.png "inline-style exemplo")

## P﻿roblema

Eu estava codando me TypeScript com o framework Next.js, e precisei usar um style inline. O projeto usa tailwindcss, mas era uma mudança que somente com css puro resolveria.

E﻿ntão não faz sentido criar um arquivo de css somente para aplicar uma propriedade em um elemento, então decedi fazer uma aplicação de estilo inline, só que só quem usa TypeScript sabe como é! Me apareceu um monte de erros de tipos... Então descobri as tipagens e resolvi criar esse post para facilitar que procura como fazer esse tipo de estilização rapidamente.

### D﻿eclaração de objeto

P﻿rimeiramente é necessário criar um objeto com as suas estilizações. É também importante adicionar o tipo: "React.CSSProperties" no objeto para tudo funcionar sem erro de tipagem. Exemplo:

```javascript
const listStyle:React.CSSProperties = {
  listStyleType: 'circle',
};
```

A﻿pós a declaração do objeto, basta adicionar dentro da tag a propriedade "style":

```javascript
 <ul style={ listStyle }>
  <li>Primeiro item da lista</li>
  <li>Ultimo item da lista</li>
 </ul>
```

V﻿iu como é fácil ?\
E﻿spero ter ajudado!

## Dúvidas?

Para qualquer dúvida, sugestões e comentários, lembre-se que esse blog é openSource e seu código é aberto e está [disponível no meu github.](https://github.com/israelcena/siteblog)

Além disso, você pode usar também a seção comentários aqui em baixo!

Saudações, _Israel Cena_.