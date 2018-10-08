//DOM -> Document Object Model
console.log(document); //Document contém toda a estrutura HTML da sua página



const divCentral = document.querySelector('#central');
//.tagName retorna o nome da Tag do objeto que você está trabalhando, em caixa alta
console.log(divCentral.tagName);
//.id retorna o nome da Id que o objeto que você está trabalhando tem, ou uma string vazia caso não haja Id
console.log(divCentral.id);
//.innerHTML retorna todo o conteúdo que existe entre a abertura e o fechamento de uma tag, ou uma string vazia caso não haja conteúdo
console.log(divCentral.innerHTML);



const listaDeDivs = document.querySelectorAll('div');
for (const div of listaDeDivs) {
  div.innerHTML = 'lalala';
}



//.classList retorna a lista de classes do objeto que se está manipulando
console.log(divCentral.classList);
//.classList.add adiciona uma classe nova ao objeto que se está manipulando
divCentral.classList.add('teste');
//.classList.remove remove uma classe no objeto que se está manipulando
divCentral.classList.remove('azul');
//.classList.contains retorna true se o objeto tiver a classe, ou false se não
console.log(divCentral.classList.contains('azul'));
//.classList.toogle adiciona uma classe caso o objeto não a tenha, ou remove caso tenha
divCentral.classList.toggle('azul');
divCentral.classList.toggle('azul');



//.style retorna o objeto de estilos do objeto selecionado
console.log(divCentral.style);
//Altera a propriedade color do objeto selecionado
divCentral.style.backgroundColor = 'white';