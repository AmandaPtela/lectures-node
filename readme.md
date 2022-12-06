### Para importar módulos: 
    #### equire
    * const path = require('path');

### Para exportar módulos:
  #### module.exports = o-que-sera-exportado
     module.exports = path;



### Passa o caminho e ele aponta o nome do diretório:
console.log(path.dirname('usr/share/gnome'));

// Passa conjunto de nomes e junta pra gerar um caminho
console.log(path.resolve('usr', 'share', 'gnome'));

// Passa conjunto de nomes e junta pra gerar um caminho a artir da raíz (/)
console.log(path.resolve('/', 'usr', 'share', 'gnome'));

// Tudo que é criado nesse arquivo pertence só a este arquivo
// por isso precisamos exportar