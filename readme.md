# NodeJS
 Criado para consultas durante estudos.

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
    #### OBS: `Não` é necessário especificar a extensão do arquivo pois o node automaticamento busca por arquivos **.js** ou **.json**
    #### ` Tudo que é criado nesse arquivo pertence só a este arquivo, por isso precisamos exportar`

  * Módulos Internos:

    `módulos instalados junto com Node.js`
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