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


###  Passa o caminho e ele aponta o nome do diretório:
```javascript
const path = require('path');

path.dirname('usr/share/gnome');

(retorno) => 'usr/share/'
```
### Passa conjunto de nomes e junta pra gerar um caminho:
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