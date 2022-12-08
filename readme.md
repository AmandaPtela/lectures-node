# NodeJS
:warning: Em construção :warning:

 Repositório criado para consultas durante estudos.

 Índice
=================
<!--ts-->
   * [Conceitos](#Conceitos)
   * [Exportação de Módulos](#Exportação)
   * [Importação de Módulos](#Importação)
      * [Módulos Locais](#Módulos-Locais)
      * [Módulos Internos](#Módulos-Internos)
      * [Módulos de Terceiros](#Módulos-de-Terceiros)
  * [NPM](#npm)
      * [Comandos NPM](#comandos-npm)

<!--te-->

### **Conceitos**:
* `Node.js` é um ambiente/plataforma de execução para criar aplicações WEB escaláveis utilizando Javascript sem depender de um navegador.

* `NPM` (**N**ode **P**ackege **M**anager) é o gerenciador de pacotes do Node.
```javascript
  `https://www.npmjs.com` é o repositório oficial de pacotes Node.
```

* `Módulos` são pedaços de código. Uma coleção de funções e objetos do JavaScript que podem ser usados por outras aplicações ou por outras partes do código da própria aplicação.

* `Pacote` é um conjunto de arquivos que exportam um ou mais módulos Node.

## **Exportação**
```javascript
  module.exports = nome-módulo-exportado;

exemplo:
  // nome arquivo: path.js
  const path = require('./path');
  module.exports = path;
```

:purple_circle: Exemplo de módulo sendo **exportado**:
```javascript
// nome arquivo: somar.js
  const soma = function(a,b) {
    return(a + b)
  }

// soma é o módulo a ser exportado e o que será usado onde for importado
  module.exports = soma;
```

:purple_circle: Exemplo de **mais de um** módulo sendo **exportado** de um mesmo arquivo:
```javascript
// nome arquivo: index.js
  const soma = function(a,b) {
    return(a + b)
  }

  const subtracao = function(a,b) {
    return(a - b)
  }

// soma e subtração são os módulos que serão exportados e usados onde forem importados
  module.exports = { soma, subtracao };
```

## **Importação**
  ### Módulos Locais:
    
  `módulos próprios criados localmente pelo programador`
    
  ```javascript
    require('caminho-modulo')

    exemplo: 
      > arquivo na mesma pasta
      const arquivo = require('./arquivo');

      > arquivo na pasta anterior
      const arquivo = require('../arquivo');
  ```
  ##### OBS: `Não` é necessário especificar a extensão do arquivo pois o node, automaticamente, busca por arquivos **.js** ou **.json**
  ##### ` Tudo que é criado nesse arquivo pertence só a este arquivo, por isso precisamos exportar`

  :purple_circle: Exemplo de módulo sendo **importado**:
  ```javascript
  // importa arquivo(somar.js) que possui a função de soma
  const funcaoSoma = require('./somar');
  
  console.log(funcaoSoma(1,2));
  (retorno) => 3
  ```
  
  :purple_circle: Exemplo de **mais de um** módulo sendo **importado** de um mesmo arquivo:
  ```javascript
  // importa arquivo(index.js) que possui as funções de soma e subtração
  const funcoes = require('./index');
  
  console.log(funcoes.funcaoSoma(1,2));
  (retorno) => 3
  ```

  ### Módulos Internos:

  `módulos instalados junto com a instalação do Node.js. São nativos.`
  ```javascript
  require('nome-pacote-a-usar');

  exemplo:
    > FS - Fornece API para interagir com o sistema de arquivos <
    const pacote = require('fs');

    > URL - Provê utilitários para ler e manipular URLs <
    const pacote = require('url');

    > UTIL - Provê ferramentas e funcionalidades úteis a programadores. < 
    const pacote = require('util');

    > SO - Provê ferramentas e funcionalidades relacionadas ao Sistema Operacional <
    const pacote = require('os');
  ```

  ### Módulos de Terceiros:

  `módulos feitos por outras pessoas e disponibilizados para uso pelo *NPM*`
  * É necessário instalá-los para poder usar:
  ```
  npm install nome-do-módulo
  ```
##### OBS: O módulo deve estar na pasta `node_modules` que, por sua vez, deve estar dentro da pasta da aplicação.

  só então podemos importar:
  ```javascript
  require('nome-módulo-instalado');

  exemplo:
  // no terminal
    npm install calculadora

  //após instalação
    const pacote = require('calculadora');

    //usando:
    //variável.função()
    ex: pacote.soma()
        pacote.subtração()
        pacote.divisão()
  ```

<!-- ###  Determina o caminho do diretório do módulo:
```javascript
const path = require('./path');

path.dirname('usr/share/gnome');

(retorno) => 'usr/share/'
```
### Passa conjunto de nomes pra gerar um caminho para o módulo:
```javascript
const path = require('./path');
path.resolve( 'usr', 'share', 'gnome');

(retorno) => '/home/usuario/pasta-arquivo/nome-arquivo/usr/share/gnome'
```

### Passa conjunto de nomes e junta pra gerar um caminho a artir da raíz (/):
```javascript
const path = require('./path');
path.resolve( '/', 'usr', 'share', 'gnome');

(retorno) => '/usr/share/gnome'
``` -->

## **NPM**
* **N**ode **P**ackage **M**anager - É o gerenciador de pacotes do Node. Usado para vários comandos como _npm install_, _npm start_, e outros.
É com ele que baixamos pacotes/módulos de terceiros, feitos por outras pessoas

### **Comandos NPM**

`npm init` -> Inicia a criação de um pacote node na pasta da aplicação.
Ao rodar esse comando, surgirá algumas perguntas como 'Qual o nome do pacote', 'Qual a versão do pacote', e outras.
```
npm init
```

Para 'pular' essa etapa, existe a _flag_ **-y**, que faz com que todas as perguntas sejam respondidas com as respostas padrão do comando.
```
npm init -y
```

`npm install` 
-> Traz para a máquina os módulos internos do node (_`node modules`_) e os módulos descritos no _`package.json`_

```
npm install
```

`npm install nome-do-pacote`
-> Traz para máquina o pacote desejado

Ao fim da instalação do primeiro módulo vindo de fora, é criada na pasta _`package.json`_ da aplicação, uma `chave` de nome _`dependencies`_ que irá guardar o nome de todos os módulos instalados e, cada módulo instalado, terá seu conteúdo guardado dentro da pasta `_node modules_`.

```
npm install nome-do-pacote
```

`npm run` -> Executa uma tarefa determinada na chave __`scripts`__ do __package.json__:
```javascript
npm run test
// Executa testes definidos em arquivos de teste
```

`npm start` -> É um atalho determinado na chave __`scripts`__ do __package.json__: para usar outro comando:
```javascript
 npm start
// executa o mesmo que o comando determinado no valor da chave "start" nos scripts.
```

:purple_circle: Exemplo de um __package.json__:
```javascript
  {
  "name": "lectures-node",
  "version": "1.0.0",
  "description": "repositório para estudos",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
  // npm start = node index.js ao executar no terminal
    "test": "testeApp.test.js"
  // Executa testes definidos em arquivos de teste
  },
  "keywords": [
    "lectures"
  ],
  "author": "amanda",
  "license": "ISC",
  "dependencies": {
    //módulo de terceiros instalados aparecem aqui
    "readline-sync": "^1.4.10"
  }
}
```

:purple_circle: Exemplo usando módulo instalado **_readline-sync_**:
```javascript

//No terminal
  `npm install readline-sync`

//Após instalação

// no Arquivo principal:
  const módulo = require('readline-sync');
  const nome = módulo.question('Qual seu nome'); 
  console.log(nome);

  //Retorno no console:
    Qual seu nome?
  //aguarda usuário digitar e retorna o valor digitado
    Nome digitado pelo usuário //console.log(nome);
```


