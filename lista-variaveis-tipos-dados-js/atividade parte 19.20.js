/*19. Explique com suas palavras a diferença entre let e const, dando um exemplo de situação em que cada um deve ser usado. 

__________________________________________________________________________________________ 

__________________________________________________________________________________________ 

__________________________________________________________________________________________ 

20. Escreva um trecho de código que: 

• Declare uma constante preco com valor 49.9; 

• Declare uma variável quantidade com valor 3, que poderá mudar depois; 

• Use uma template string para exibir a frase: "Total: R$ 149.7" (calculando preco * quantidade). 

__________________________________________________________________________________________ 

__________________________________________________________________________________________ 

__________________________________________________________________________________________ 
é usado quando o valor de uma variável pode ser alterado depois. const é usado quando o valor não será reatribuído. Por exemplo, podemos usar let para uma idade que pode mudar e const para o nome de uma pessoa que não será alterado.

20.

const preco = 49.9;
let quantidade = 3;

console.log(`Total: R$ ${preco * quantidade}`);

Resultado:

Total: R$ 149.7*/