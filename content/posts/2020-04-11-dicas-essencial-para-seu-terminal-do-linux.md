---
template: post
title: Dicas Essenciais Para Seu Terminal do Linux 📚📚
slug: /posts/dicas-essenciais-para-seu-terminal-do-linux
draft: false
priority: 0
date: 2020-04-11T11:43:07.303Z
description: Um tutorial de comandos essenciais que você precisa saber após
  instalar o linux em seu pc.
category: Linux
tags:
  - Linux
  - Shell
  - command prompt
  - Terminal
  - Dicas Linux
  - root
  - root linux
---

## Introdução

7 dicas essensiais para quem está começando a trabalhar com o shell do linux!
Use aproveite, repasse e abuse !

![git](/media/tips.jpg 'Tips')

## Tips 💡💡

1. Execução de arquivo -> Então você deseja executar arquivos ou programas a partir do terminal? Verifique se o mesmo está marcado como executável. Caso contrário, consulte a Dica rápida nº 4 do post de [dicas rápidas do terminal do linux](https://israelcena.com.br/posts/dicas-rapidas-do-terminal-do-linux).

2. Precisa executar um arquivo no diretório atual após ser marcado como executável? O operador `./` pode executar o arquivo como um usuário normal, desde que você não precise de direitos de root. ./ significa literalmente "no diretório atual" para que não funcione em arquivos fora do diretório atual.

3. Precisa executar um arquivo que não esteja no diretório atual? Você deve passar o caminho para o programa de execução adequado. Se é um programa python, é `python /path/to/file.py` e se é um arquivo shell, é `sh /path/to/file` como exemplo. É claro que existem outros programas, mas estes serão os mais comuns para iniciantes.

4. Precisa executar um arquivo com direitos de root porque você recebeu uma operação não permitida? Prefixe o comando com `sudo`. Assim, no exemplo acima, `sudo python /path/to/file` executará o script com direitos de root.

5. Precisa executar um programa GUI a partir do terminal? Basta digitar o nome do programa (diferencia maiúsculas de minúsculas!) E ele será iniciado. **Isso tornará o terminal atual inutilizável.** Fechar o terminal enquanto o programa estiver aberto matará o programa. Uma maneira melhor é colocar o programa em segundo plano, usando program_name &, em seguida, digitando a palavra exit no terminal para fechá-lo e manter o processo em execução.
   ficando: `program_name & exit`.

6. Precisa executar um programa GUI com direitos de root no terminal? Prefixe-o com _gksudo_ ou _gksu_ e não _sudo_. **Usar o sudo para iniciar aplicativos da GUI é um mau hábito e deve ser evitado!**

7. **Não use o sudo simplesmente porque algo recebe "Operation not permitted".** Lembre-se do que você está fazendo, pois você pode absolutamente **destruir** os sistemas executando comandos no lugar errado com direitos de root. Este ponto não pode ser enfatizado o suficiente. Verifique se os arquivos são provenientes de fontes respeitáveis.

## Fechamento

Não deixe de ver também [dicas rápidas do terminal do linux](https://israelcena.com.br/posts/dicas-rapidas-do-terminal-do-linux)
é quase uma parte 2 desse post !
😃😃😃
