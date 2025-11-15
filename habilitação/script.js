 function podeDirigir() {
      const idade = parseInt(document.getElementById('idade').value);
      const res = document.getElementById('resultado');

      if (isNaN(idade)) {
        res.textContent = 'Por favor, digite sua idade.';
        return;
      }
      if (idade < 0 || idade > 115) {
        res.textContent = 'Idade fora do limite permitido';
        return;
      }
      if (idade >= 18) {
        res.textContent = 'Pode ser habilitado(a).';
      } else {
        res.textContent = 'Ainda não pode.';
      }
    }