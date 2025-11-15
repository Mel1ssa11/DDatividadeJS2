function gerarNomeCompleto() {
      const primeiro = document.getElementById('nome').value.trim();
      const sobre = document.getElementById('sobrenome').value.trim();
      const res = document.getElementById('resultado');
      if (!primeiro || !sobre) { res.textContent = 'Digite nome e sobrenome'; return; }
      res.textContent = `Nome completo: ${primeiro} ${sobre}`;
    }