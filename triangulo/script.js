function tipoTriangulo() {
      const l1 = Number(document.getElementById('l1').value);
      const l2 = Number(document.getElementById('l2').value);
      const l3 = Number(document.getElementById('l3').value);
      const res = document.getElementById('resultado');
      if (!l1 || !l2 || !l3) { res.textContent = 'Preencha todos os lados'; return; }
      if (l1 === l2 && l2 === l3) res.textContent = 'Triângulo Equilátero';
      else if (l1 === l2 || l2 === l3 || l1 === l3) res.textContent = 'Triângulo Isósceles';
      else res.textContent = 'Triângulo Escaleno';
    }