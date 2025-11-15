function formatarTelefone() {
      const tel = document.getElementById('telefone').value.trim();
      const res = document.getElementById('resultado');

      if (tel.length !== 8 || isNaN(tel)) {
        res.textContent = 'Digite um número válido com 8 dígitos';
        return;
      }

      const parte1 = tel.slice(0, 4);
      const parte2 = tel.slice(4);
      res.textContent = `Telefone formatado: ${parte1}-${parte2}`;
    }