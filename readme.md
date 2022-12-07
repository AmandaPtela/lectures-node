# NodeJS
 Criado para consultas durante estudos.

### Para importar módulos: 
```javascript 
require('nome-modulo')
require('caminho-modulo')

exemplo: 
  const path = require('path');

  > arquivo na mesma pasta
  const arquivo = require('./arquivo');

  > arquivo na pasta anterior
  const arquivo = require('../arquivo');
```
* OBS: Não é necessário especificar a extensão do arquivo

#### ` Tudo que é criado nesse arquivo pertence só a este arquivo, por isso precisamos exportar`

### Para exportar módulos:
```javascript
module.exports = nome-entidade-que-sera-exportada;

exemplo:
  const path = require('path');
  module.exports = path;
```

Exemplo de módulo a ser exportado:
```java
> nome arquivo: somar.js
const soma = function(a,b) {
  return(a + b)
}

// soma é o módulo a ser exportado e o que será usado onde for importado
module.exports = soma;
```

Exemplo de módulo sendo importado:
```java
// importa *arquivo* que possui a função de soma
const soma = require('./somar');

console.log(soma(1,2));
(retorno) => 3
```

###  Passa o caminho e ele aponta o nome do diretório do módulo:
```javascript
const path = require('path');

path.dirname('usr/share/gnome');

(retorno) => 'usr/share/'
```
### Passa conjunto de nomes pra gerar um caminho para o módulo:
```javascript
const path = require('path');
path.resolve( 'usr', 'share', 'gnome');

(retorno) => '/home/usuario/pasta-arquivo/nome-arquivo/usr/share/gnome'
```

### Passa conjunto de nomes e junta pra gerar um caminho a artir da raíz (/):
```javascript
const path = require('path');
path.resolve( '/', 'usr', 'share', 'gnome');

(retorno) => '/usr/share/gnome'
```