<script>
  function filtrarCategoria(categoria) {
    const livros = document.querySelectorAll('.livro');
    livros.forEach(livro => { const livroCategoria = livro.getAttribute('data-categoria');
      if (categoria === 'todos' || livroCategoria === categoria) {
        livro.style.display = 'block';
      } else {
        livro.style.display = 'none';
      }
    });
  }

  function toggleSinopse(elemento) {
    const sinopseCompleta = elemento.parentNode.nextElementSibling;
    sinopseCompleta.classList.toggle('escondido');
    if (sinopseCompleta.classList.contains('escondido')) {
      elemento.innerText = 'Ler mais';
    } else {
      elemento.innerText = 'Ler menos';
    }
  }
</script>
