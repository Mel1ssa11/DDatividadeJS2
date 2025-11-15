function checarTemperatura() {
      const t = parseFloat(document.getElementById('temp').value);
      const res = document.getElementById('resultado');

      if (isNaN(t)) {
        res.textContent = 'Por favor, insira uma temperatura válida.';
        return;
      }

      if (t < -14 || t > 45) {
        res.textContent = 'Valor fora da faixa registrada no Brasil.';
        return;
      }

      if (t < 10) {
        res.textContent = 'Alerta de Frio';
      } else if (t >= 10 && t <= 25) {
        res.textContent = 'Temperatura Ideal';
      } else {
        res.textContent = 'Alerta de Calor';
      }
    }