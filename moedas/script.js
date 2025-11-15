function classificarMoeda() {
      const valor = parseFloat(document.getElementById('moeda').value);
      const res = document.getElementById('resultado');

      if (isNaN(valor)) {
        res.textContent = 'Por favor, digite um número';
        return;
      }

      if (valor <= 0) {
        res.textContent = 'Valor inválido.';
        return;
      }

      if (valor > 1) {
        res.textContent = 'Só valores em centavos';
        return;
      }

      if (valor === 0.01) res.textContent = 'Um Centavo';
      else if (valor === 0.05) res.textContent = 'Cinco Centavos';
      else if (valor === 0.10) res.textContent = 'Dez Centavos';
      else if (valor === 0.25) res.textContent = 'Vinte e Cinco Centavos';
      else if (valor === 0.50) res.textContent = 'Cinquenta Centavos';
      else if (valor === 1.00) res.textContent = 'Um Real';
      else res.textContent = 'Valor desconhecido';
    }