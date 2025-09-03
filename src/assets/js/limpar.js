function limparSimbolos() {
            const input = document.getElementById("input_numb2");
            let valor = input.value;

            // Remove qualquer ponto ou vírgula, se for o caso (opcional)
            valor = valor.replace(/\D/g, ''); 

            input.value = valor;
        }