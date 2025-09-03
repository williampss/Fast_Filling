function preencherComZeros() {
            const input = document.getElementById("input_numb");
            let valor = input.value;

            // Remove qualquer ponto ou vírgula, se for o caso (opcional)
            valor = valor.replace(/\D/g, ''); 

            // Preenche com zeros à esquerda até 9 dígitos
            if (valor.length < 9) {
                valor = valor.padStart(9, '0');
            }

            input.value = valor;
        }