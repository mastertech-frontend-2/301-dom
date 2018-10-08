//DOM -> Document Object Model

console.log(document); //Document contém toda a estrutura HTML da sua página

const divCentral = document.querySelector('#central');

//.tagName retorna o nome da Tag do objeto que você está trabalhando, em caixa alta
console.log(divCentral.tagName);

//.id retorna o nome da Id que o objeto que você está trabalhando tem, ou uma string vazia caso não haja Id
console.log(divCentral.id);

//.innerHTML retorna todo o conteúdo que existe entre a abertura e o fechamento de uma tag, ou uma string vazia caso não haja conteúdo
console.log(divCentral.innerHTML);
