const path = require('path');

console.log(filename);

console.log(path.basename(filename));// имя документа
console.log(path.dirname(filename));// имя каталога
console.log(path.extname(filename));// разширение файла

console.log(path.parse(filename));// возвращает информацию файла

console.log(path.join(dirname, 'test', 'second.html'));// объединяет данные в path
console.log(path.resolve(__dirname, './test', 'second.html'));// преобразовывает путь в абсолют