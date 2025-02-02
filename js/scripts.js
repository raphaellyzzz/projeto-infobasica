function aplicarZoom(e, elemento) {
    e.preventDefault(); 
    elemento.classList.add('zoom'); 

    setTimeout(() => {
        elemento.classList.remove('zoom');
        window.location.href = elemento.getAttribute('href');
    }, 450);
}

const links = document.querySelectorAll('nav ul li a');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        aplicarZoom(e, link); 
    });
});