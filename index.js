/* Para importar módulos
    Require()
  Para exportar módulos
    module.exports
*/

const path = require('path');

module.exports = path;

// Passa o caminho e ele aponta o nome do diretório
console.log(path.dirname('usr/share/gnome'));

// Passa conjunto de nomes e junta pra gerar um caminho
console.log(path.resolve('usr', 'share', 'gnome'));

// Passa conjunto de nomes e junta pra gerar um caminho a artir da raíz (/)
console.log(path.resolve('/', 'usr', 'share', 'gnome'));

// Tudo que é criado nesse arquivo pertence só a este arquivo
// por isso precisamos exportar