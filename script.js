let textos = ["Oi ", "Fiz esse Site como uma forma de me expressar", "Tenho algumas coisas para te dizer","Primeira coisa!","Você foi a melhor pessoa que eu conheci esse ano!", "Eu amo a sua companhia!","Você é Linda!", "Inteligente","Perfeita","A cada dia que passa, minha admiração e carinho por você só aumenta!" ]; // Array com os textos
let contador = 0;
let textoElemento = document.getElementById("texto");
let imagens = [
    "imgs/1.png", // Imagem para o contador 0
    "imgs/2.png", // Imagem para o contador 1
    "imgs/3.png", // Imagem para o contador 2
    "imgs/4.png",
    "imgs/5.png",
    "imgs/6.png",
    "imgs/7.png",
    "imgs/8.png",
    "imgs/9.png",
    "imgs/10.png",
    "imgs/11.png",
    "imgs/12.png",
    
      // Imagem para o contador 3
];

function trocarTexto() {
    if (contador >= 11) {
        clearInterval(intervalo);
         // Interrompe o intervalo
        return;}
        




    let textoElemento = document.getElementById("texto");
    // Primeiro, aplica a animação de fade-out
    textoElemento.style.opacity = 0;

    // Espera a animação de fade-out terminar antes de trocar o texto
    setTimeout(() => {
        let din = document.getElementById("din");
        // Troca o texto
        contador = (contador + 1) % textos.length; // Incrementa e reinicia o contador ao atingir o final do array
        textoElemento.textContent = textos[contador];
        din.src =imagens[contador]
        

        // Aplica a animação de fade-in
        textoElemento.style.opacity = 1;
    }, 1000); // Tempo do fade-out (1 segundo)

}


// Troca o texto a cada 3 segundos
setInterval(trocarTexto, 6000);

