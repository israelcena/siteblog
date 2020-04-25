---
template: post
title: Erro Maldito no Gatsby 😡😡😡
slug: /posts/gatsby-error
draft: false
priority: 2
date: 2020-04-25T21:09:47.241Z
description: "Error: ENOSPC: System limit for number of file watchers reached.
  Atrapalha e muito a desenvolver ! 😡😡😡"
category: Gatsby
tags:
  - Gatsby
  - Linux
  - Fedora
  - Debian
  - Mint
  - Ubuntu
  - Error
  - Erro
---
![](https://i2.wp.com/blogdofernandomesquita.com.br/wp-content/uploads/2019/08/Depositphotos_11975806_xl-2015_2.jpg)

Durante minha rotina de aprendizado do Gatsby, Estava eu desenvolvendo mais um projeto. Durante esse processo é comum rodar o comando "gatsbty develop" para fazer um build e compilar em tempo real durante o processo de desenvolvimento. 

O Problema é que durante esse processo você não pode enviar ou retirar arquivos do projeto, caso você tire antes de parar o processo "gatsby develop" ele mesmo retornará um erro:
```
Error: ENOENT: no such file or directory
```
travando a execução de atualização em tempo real.

Quando é dado novamente o comando "gatsby develop" geralmente em alguns sistemas operacionais baseados em Linux, acontece o seguinte erro:

```
  Error: ENOSPC: System limit for number of file watchers reached
```

E por nada ele rodava novamente o "gatsby develop" e nem "gatsby build".  😠 😠 

O sistema só voltava a compilar quando eu reiniciava o meu computador! 

Isso era revoltante, pois no meio do projeto geralmente estou empolgado, minha cabeça "borbulhando" em idéias e do nada tenho que parar, reiniciar o sistema, e rodar o processo de copilação tudo de novo.

Até o dia que me revoltei com essa situação e pesquisei no Google o erro.

### UFAAA  ! ACHEI A SOLUÇÃO 🎉🎉🎉🎉🎉

Vou compartilhar logo de cara com vocês, mas vou deixar o link do github que eu encontrei.

É apenas você digitar em terminal:

```
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```

Esse comando irá aumentar o número de "observadores" em seu sistema.

Após isso nunca mais tive esse problema em meu sistema operacional.

Link: <https://github.com/guard/listen/wiki/Increasing-the-amount-of-inotify-watchers#the-technical-details>