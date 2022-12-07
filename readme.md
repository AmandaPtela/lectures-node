# NodeJS
 Repositório criado para consultas durante estudos.

### Conceitos:
* `Node.js` é um ambiente/plataforma de execução para criar aplicações WEB escaláveis utilizando Javascript sem depender de um navegador.

* `NPM` (**N**ode **P**ackege **M**anager) é o gerenciador de pacotes do Node.
```javascript
  `https://www.npmjs.com` é o repositório oficial de pacotes Node.
```

* `Módulos` são pedaços de código. Uma coleção de funções e objetos do JavaScript que podem ser usados por outras aplicações ou por outras partes do código da própria aplicação.

* `Pacote` é um conjunto de arquivos que exportam um ou mais módulos Node.


### Para importar módulos: 
  * Módulos locais:

    `módulos próprios criados localmente pelo programador`
    ```javascript
      require('caminho-modulo')

      exemplo: 
        > arquivo na mesma pasta
        const arquivo = require('./arquivo');

        > arquivo na pasta anterior
        const arquivo = require('../arquivo');
    ```
    #### OBS: `Não` é necessário especificar a extensão do arquivo pois o node, automaticamente, busca por arquivos **.js** ou **.json**
    #### ` Tudo que é criado nesse arquivo pertence só a este arquivo, por isso precisamos exportar`

  * Módulos Internos:

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
  
  * Módulos de Terceiros:

    `módulos feitos por outras pessoas e disponibilizados para uso pelo *NPM*`
    * É necessário instalá-los para poder usar:
    ```
    npm install nome do módulo
    ```
    só então podemos importar:
    ```javascript
    require('nome-módulo-instalado');

    exemplo:
    // no terminal
      npm install pacoteShrek
    //após instalação
      const pacote = require('pacoteShrek');
    ```

    #### OBS: O módulo deve estar na pasta `node_modules` que, por sua vez, deve estar dentro da pasta da aplicação.

### Para exportar módulos:
```javascript
  module.exports = nome-módulo-exportado;

exemplo:
  // nome arquivo: path.js
  const path = require('./path');
  module.exports = path;
```

Exemplo de módulo sendo **exportado**:
```javascript
// nome arquivo: somar.js
  const soma = function(a,b) {
    return(a + b)
  }

// soma é o módulo a ser exportado e o que será usado onde for importado
  module.exports = soma;
```

Exemplo de **mais de um** módulo sendo **exportado** de um mesmo arquivo:
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

Exemplo de módulo sendo **importado**:
```javascript
// importa arquivo(somar.js) que possui a função de soma
const funcaoSoma = require('./somar');

console.log(funcaoSoma(1,2));
(retorno) => 3
```

Exemplo de **mais de um** módulo sendo **importado** de um mesmo arquivo:
```javascript
// importa arquivo(index.js) que possui as funções de soma e subtração
const funcoes = require('./index');

console.log(funcoes.funcaoSoma(1,2));
(retorno) => 3
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