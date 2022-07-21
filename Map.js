var novoMapa = new Map();

// Vamos gaurdar o seguindo valor de acesso ao site:
// 11/11//2011 as 11 da noite

novoMapa.set('11/11/2011 - 23:30 - URL', { title: 'Título do Site A', url: 'url sozinha'});
novoMapa.set('11/11/2011 - 23:30 - URL', { title: 'Título do Site B', url: 'url sozinha'});
novoMapa.set('11/11/2011 - 23:31 - URL', { title: 'Título do Site C', url: 'url sozinha'});

// O programa não permite que a KEY repetida seja armazenada duas vezes
// Porém, se o valor VALUE mudar, ela sobrepoem a KEY anterior mantendo a regra de apenas uma.


var resultado = novoMapa;
console.log(resultado);

// Posso utilizar as Keys do MAP para acessar diretamente o Array com os detalhes da infromação que estou buscando
var resultado_2 = novoMapa.get('11/11/2011 - 23:30 - URL')
console.log(resultado_2);
// Posso tratar a informação específica como uma Array (lista)
console.log(resultado_2.title);
console.log(resultado_2.url);
