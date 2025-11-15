function calcularMediaSimples() {
      const n1 = parseFloat(document.getElementById('n1').value);
      const n2 = parseFloat(document.getElementById('n2').value);
      const res = document.getElementById('resultado');

      if (isNaN(n1) || isNaN(n2)) {
        res.textContent = 'Digite as duas notas';
        return;
      }

      if (n1 < 0 || n2 < 0 || n1 > 10 || n2 > 10) {
        res.textContent = 'As notas devem ser entre 0 e 10';
        return;
      }

      const media = (n1 + n2) / 2;
      if (media >= 7) {
        res.textContent = `Média: ${media.toFixed(1)} Aprovado`;
      } else {
        res.textContent = `Média: ${media.toFixed(1)} Reprovado`;
      }
    }