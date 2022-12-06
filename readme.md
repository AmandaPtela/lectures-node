# NodeJS
 Criado para consultas durante estudos.
### Para importar módulos: 
Require(nome-do-modulo)

    const path = require('path');

### Para exportar módulos:
module.exports = o-que-sera-exportado

    module.exports = path;
  

###  Passa o caminho e ele aponta o nome do diretório:
    const path = require('path');
    path.dirname('usr/share/gnome');
    <!-- // 'usr/share/' -->

### Passa conjunto de nomes e junta pra gerar um caminho:
    const path = require('path');
    path.resolve( 'usr', 'share', 'gnome');

### Passa conjunto de nomes e junta pra gerar um caminho a artir da raíz (/): 
    const path = require('path');
    path.resolve( '/', 'usr', 'share', 'gnome');

## Tudo que é criado nesse arquivo pertence só a este arquivo, por isso precisamos exportar 