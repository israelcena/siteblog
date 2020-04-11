---
template: post
title: Tutorial Essencial de Shell de 15 Minutos 🕒
slug: /posts/tutorial-essencial-de-shell-de-15-minutos
draft: false
priority: 9
date: 2020-04-11T10:43:07.303Z
description: >-
  Um tutorial rápido de comandos essenciais que você precisa saber após instalar o linux em seu pc.
category: Tutoriais
tags:
  - Linux
  - Shell
  - command prompt
  - Terminal
  - Fatos Shell Linux
---
## Shell

![Shell](/media/shelllinux/shelllinux.jpeg)

## Pequena Introdução

Há um momento em que até os usuários mais iniciantes se deparam com o terminal. Ele tem muitos nomes: terminal, shell, console, "prompt de comando", mesmo como uma transferência daqueles familiarizados com o Windows. Muitas pessoas ficam assustadas com o terminal por algum motivo, então, este tutorial tentará fornecer os comandos mais básicos para permitir a navegação e as ações básicas do sistema a partir do conforto do seu teclado.

## Antes de começar

 1. Lembrando que esse [Tutorial](https://israelcena.com.br/category/Tutoriais) é apenas para usuários de Linux! Vale lembrar também que a versão do seu Linux pode ser diferente! Aqui estou usando o bash do Linux Mint19 MATE version.
 2. Existem diversas maneiras de iniciar o seu terminal Linux, não vou listar todas as opções disponíveis. Suponho que você possa encontrá-lo no menu ou clicando com o botão direito na área de trabalho.
 3. Já Existe aqui no blog um post sobre [10 Fatos Sobre o Shell do Linux](https://israelcena.com.br/posts/10-fatos-sobre-o-shell-do-linux) que vale apena você Ler também para aprender sobre o Shell do Linux.

## Comandos

### cd

cd -> Usado para navegar pelos diretórios. Você pode mover para qualquer local pelo caminho.

`cd` Isso o levará de volta para sua $HOME (pasta local do seu usuário), é o mesmo que `cd ~`

`cd ..` Isso levará de volta exatamente um diretório. Iniciar em /home/justin/Desktop, `cd ..` me colocará em /home/justin. E isso pode ser expandido, `cd ../../` a partir da localização da Desktop, em vez disso, moverá-me 2 pastas para trás, da minha Desktop para /home.
`cd foldername/` Isto irá avançar para a pasta especificada na sua pasta atual. Tome nota do prefixo ausente / é uma omissão importante. se eu estiver em /home/justin e quiser acessar o Desktop, devo digitar `cd Desktop/` sem o / antes do Desktop. Digitar / antes de nos colocar na raiz do sistema de arquivos, que está incorreto.
cd /some/other/path Isso o levará ao caminho da pasta especificada, supondo que ele exista exatamente como digitado. Não esqueça a conclusão da guia! Leia Até o final!

### ls

ls -> Usado para listar o conteúdo da pasta. Você pode ver muitos tipos de atributos de arquivo e pasta.

`ls` Por si só, ls simplesmente lista todos os seus arquivos na pasta atual.
`ls -l` Fornece um formato de listagem mais longo, incluindo proprietários, permissões, tamanho e data de modificação.
`ls -a` Exibe arquivos e pastas ocultos, bem como a listagem normal.
`ls -al` Combine opções para exibir arquivos ocultos e no formato longo.
`ls -h` Mostra os tamanhos dos arquivos em formato legível por humanos (K, M, Gbyte) em vez de bytes.
Você pode exibir arquivos em diretórios em que você não está. Se estou em /home/justin/Desktop e quero exibir um arquivo em /home/justin, posso fazer `ls ../` listar arquivos de um diretório (e não precisa voltar para fazer isso.)

### cp

cp -> Copiar arquivos

`cp file /path/to/folder` Copia o arquivo "file" do local atual ou especificado para o caminho especificado.
`cp -r folder /path/to/folder` Copia recursivamente o conteúdo da pasta para outra pasta.
`cp *.extension /path/to/folder` Copia os arquivos correspondentes à extensão especificada para a nova pasta. Para copiar todos os arquivos .doc, ele se torna `cp *.doc /path/to/folder` e a pasta deve existir.
`cp name* /path/to/folder` Copia todos os arquivos que começam com nome 'name' na pasta especificada.
Para copiar todos os arquivos começando com example, ele se torna `cp example* /path/to/folder` e a pasta deve existir.

### mv

mv -> Mover arquivos

A sintaxe de mv é semelhante ao exemplo acima. Vale lembrar que o mv não aceita o sinalizador -r, pois a movimentação de uma pasta também move seu conteúdo. A sintaxe não é exata em todas as instâncias, mas funciona com os exemplos acima. Consulte suas páginas de **[manual](https://www.gnu.org/software/bash/manual/bash.pdf)** original do bash para mais detalhes.

### rm

rm -> Remover arquivos

Para todos os efeitos, a remoção de arquivos via rm é permanente. **Ele não usa a lixeira.** Use com cuidado e verifique se você está excluindo explicitamente o que deseja, não o que pensa que deseja.
`arquivo rm`  Remova o arquivo especificado do sistema.
`pasta rm -r`   Remova a pasta especificada do sistema;
`pasta rm -rf`  Remove a pasta especificada com força do sistema. Este comando pode danificar severamente sua configuração se usado incorretamente, pois não evitará que algo crítico esteja sendo excluído. Se você precisar usar isso, as chances são de que algo mais está quebrado ou ocorreu um erro.  Isso deve ser usado apenas como um método absoluto de **último recurso e não é recomendado**.

### nano

nano -> editor de texto completo da linha de comando

Pode-se editar arquivos usando o nano em um terminal para fazer arquivos rápidos e sujos até configurações completas. É útil, mas lembre-se de que ele lida com arquivos de texto sem formatação e arquivos de programação, coisas como documentos do MS Word não abrem corretamente!
Se um arquivo pertence à raiz, ele não é editável como um usuário normal.
O nano deve ser prefixado com sudo para salvar as alterações. Caso contrário, ele será aberto no modo somente leitura.

`nano newfile.whatever` O  Nano cria um novo arquivo com o nome especificado (newfile.whatever) e o abre para edição.

`nano existing_file` O Nano abre o arquivo existente para edição.

#### De dentro do nano

Salve o arquivo usando a combinação de teclas **ctrl + o** e altere o nome ou pressione enter para manter o mesmo nome. Isso salvará o arquivo.
Saia do nano usando a combinação de teclas **ctrl + x**. Se você tiver alterações não salvas, ele perguntará se você deseja salvar.

### mkdir

mkdir -> Criar diretórios

`mkdir nome_da_pasta` Cria a pasta com o nome especificado
`mkdir -p /caminho/para/pasta/nome`  Cria cada pasta conforme necessário. Para criar a pasta /home/justin/newfolder/2ndfolder, e somente /home/justin existe, o uso do mkdir -p tornará os diretórios newfolder e 2ndfolder.

### ps

ps -> Listar processos

`ps aux`  Listar todos os processos detalhadamente em execução no sistema, incluindo usuário, ID do processo (PID) e nome do processo. Usando isso, é possível visualizar sua lista de processos e, se necessário, eliminar processos desnecessários ou paralisados.

### kill / killall / xkill

kill / killall / xkill -> Mate processos ofensivos.

#### kill

`kill PID`  PID é um número que faz referência ao processo. Deve-se obter o PID de um comando como ps aux. Se um processo se recusar a morrer, pode-se especificar, alternativamente, `kill -9 PID`, que deve encerrar o processo por qualquer meio, mesmo de maneira forçada ou se isso atrapalha o sistema.

#### killall

`killall nomedoprograma`  Killall mata *nomedoprograma* todas as instâncias do referido programa. Se houver, por exemplo, 3 sessões do firefox abertas, o `killall firefox` fará exatamente isso; mate todas as sessões do firefox.  O kill iria simplesmente pegar o PID especificado do processo do firefox que você deseja matar e matar apenas esse.

#### xkill

O xkill é uma maneira da GUI de clicar e matar o processo. Digitar `xkill` deve apresentar um ícone de caveira (ou um X em algumas versões) e a próxima janela clicada será eliminada.

### Pipes "|"

Pipes  -> A coisa mais útil que você aprenderá no *NIX (Unix, Linux...). Redirecionando a saída de um programa para outra entrada.

Pipes são representados pela 'barra reta', também conhecida como '| '.
É uma chave raramente usada no Windows, geralmente encontrada na tecla barra invertida.
Eles são usados ​​para vincular comandos.  As tubulações pegam a saída de um comando e a encaminham para ser usada como entrada para um segundo comando encadeado.
Consulte mais recursos online com informações sobre pipes e seu uso, pois existem volumes.
>Quero lhe incentivar a pesquisar mais também!

### \> e \>>

\ > e >> redirecionadores -> Enviar a saída para um arquivo em vez do terminal.

\ > é usado para **substituir** o conteúdo dos arquivos existentes no momento e substituí-lo pela saída do novo comando.
\ >> é usado para **acrescentar** informações aos arquivos existentes no momento. Isso é útil para o log.
Exemplo: `ps aux > processes.log` Envia a saída de *ps aux* para o arquivo *process.log* para visualizar a saída do comando em um editor de texto e substitui o conteúdo atual do arquivo.

### tee

tee -> Enviar saída para um arquivo e para o terminal

tee é usado em conjunto com um '| 'para pegar a saída do comando e enviá-la para outro lugar. Isso é útil se houver erros que voam pela tela antes de você poder lê-los, dessa forma, o que quer que esteja na tela também é capturado em um arquivo.
Exemplo: `dmesg | tee boot.txt` executaria o comando *dmesg*, que mostra as informações iniciais de inicialização e o ' | 'envia a saída do dmesg para o tee , que faz seu trabalho enviando-o ao terminal e ao arquivo de log boot.txt.

## Conclusão

O Bash do terminal do linux é muito útil para diversos recursos e basta você praticar cada um que com um tempo você estará habituado com ele.

Não deixe de conferir o meu outro post sobre Bash do linux [Dicas Essencial Para Seu Terminal do Linux](https://israelcena.com.br/posts/dicas-essenciais-para-seu-terminal-do-linu)
que é como uma parte 2 desse tutorial!

Para dicas rápidas acesse [Dicas rápidas do terminal do linux](https://israelcena.com.br/posts/dicas-rapidas-do-terminal-do-linux)
