function encontrarMaiorEntreTres() {
      const n1 = Number(document.getElementById('n1').value);
      const n2 = Number(document.getElementById('n2').value);
      const n3 = Number(document.getElementById('n3').value);
      const res = document.getElementById('resultado');

      if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        res.textContent = 'Preencha todos os campos com números válidos';
        return;
      }

      let maior;
      if (n1 > n2 && n1 > n3) {
        maior = n1;
      } else if (n2 > n1 && n2 > n3) {
        maior = n2;
      } else if (n3 > n1 && n3 > n2) {
        maior = n3;
      } else {
        res.textContent = 'Há números iguais';
        return;
      }

      res.textContent = `O maior número é ${maior}`;
    }