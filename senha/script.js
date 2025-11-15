function senhaForte() {
      const senha = document.getElementById('senha').value;
      const res = document.getElementById('resultado');

      if (senha.length > 8 && senha !== '12345678') {
        res.textContent = 'Senha forte';
      } else {
        res.textContent = 'Senha fraca';
      }
    }