# NodeJS
 Criado para consultas durante estudos.
### Para importar módulos: 
`require(nome-do-modulo)`

    const path = require('path');

### Para exportar módulos:
`module.exports = o-que-sera-exportado`

    module.exports = path;
### ` Tudo que é criado nesse arquivo pertence só a este arquivo, por isso precisamos exportar`


###  Passa o caminho e ele aponta o nome do diretório:
``` 
const path = require('path');
path.dirname('usr/share/gnome');
(retorno) => 'usr/share/'
```
### Passa conjunto de nomes e junta pra gerar um caminho:
```
const path = require('path');
path.resolve( 'usr', 'share', 'gnome');

(retorno) => '/home/usuario/pasta-arquivo/nome-arquivo/usr/share/gnome'
```

### Passa conjunto de nomes e junta pra gerar um caminho a artir da raíz (/):
```
const path = require('path');
path.resolve( '/', 'usr', 'share', 'gnome');

(retorno) => /usr/share/gnome
```