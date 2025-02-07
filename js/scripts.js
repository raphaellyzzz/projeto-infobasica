// Função para aplicar o zoom ao clicar nos links do menu
function aplicarZoom(e, elemento) {
    e.preventDefault(); 
    elemento.classList.add('zoom'); 

    setTimeout(() => {
        elemento.classList.remove('zoom');
        window.location.href = elemento.getAttribute('href');
    }, 450);
}

// Adicionando o evento de clique nos links do menu de navegação
const links = document.querySelectorAll('nav ul li a');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        aplicarZoom(e, link); 
    });
});

// Funcionalidade do menu hambúrguer
document.getElementById('menu-toggle').addEventListener('click', function() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('open'); // Alterna a classe 'open' para abrir/fechar o menu
});
<script>
        let score = 0;

        function checkAnswer(questionName, correctAnswer, correctText) {
            var resultElement = document.getElementById("result" + questionName.charAt(questionName.length - 1));
            var selectedOption = document.querySelector('input[name="' + questionName + '"]:checked');
            
            if (!selectedOption) {
                resultElement.innerHTML = "Por favor, selecione uma resposta.";
                resultElement.style.color = "red";
                return;
            }

            if (selectedOption.value === correctAnswer) {
                resultElement.innerHTML = "Resposta correta! " + correctText;
                resultElement.style.color = "green";
                score++; // Incrementa a pontuação
            } else {
                resultElement.innerHTML = "Resposta incorreta. A resposta correta é: " + correctText;
                resultElement.style.color = "red";
            }

            // Atualiza a pontuação
            document.getElementById("score").innerHTML = "Sua pontuação: " + score + " de 10";
        }
    </script>