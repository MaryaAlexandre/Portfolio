document.addEventListener("DOMContentLoaded", () => {
    // Seções e links de navegação
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    // Evento de scroll para mudar o link ativo
    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            // Ajuste para garantir que a seção visível no topo tenha a classe ativa
            if (window.pageYOffset >= sectionTop - 100) {
                current = section.getAttribute("id");
            }
        });

        // Aplicando a classe 'active' ao link de navegação correspondente
        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });

    // Efeito de digitação
    const typingEffect = document.createElement("h2");
    typingEffect.id = "typing-effect"; // Criando um elemento para o efeito
    document.getElementById("sobre").appendChild(typingEffect);

    const phrases = ["Desenvolvedor Web", "Criador de Experiências", "Apaixonado por Tecnologia"];
    let phraseIndex = 0;
    let charIndex = 0;
    let currentText = "";
    let isDeleting = false;

    // Função para o efeito de digitação
    function typeEffect() {
        currentText = phrases[phraseIndex].substring(0, charIndex);
        typingEffect.textContent = currentText;

        if (!isDeleting && charIndex < phrases[phraseIndex].length) {
            // Digitar caractere
            charIndex++;
            setTimeout(typeEffect, 100);
        } else if (isDeleting && charIndex > 0) {
            // Apagar caractere
            charIndex--;
            setTimeout(typeEffect, 50);
        } else {
            // Alternar entre digitar e apagar
            isDeleting = !isDeleting;
            if (!isDeleting) {
                phraseIndex = (phraseIndex + 1) % phrases.length; // Mudar para a próxima frase
            }
            setTimeout(typeEffect, 1500); // Esperar antes de começar a digitar novamente
        }
    }

    typeEffect(); // Iniciar o efeito de digitação
});
