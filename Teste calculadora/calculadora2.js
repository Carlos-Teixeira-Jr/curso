function calculadora(){
    const operacao = Number(prompt("Escolha uma operação: \n 1 - Soma \n 2 - Subtração \n 3 - Multiplicação \n 4 - Divisão"));

    if(!operacao || operacao >= 5){
        alert("Operação inválida");
        calculadora();
    }else{
        let primeiroValor = Number(prompt("Digite o primeiro valor"));
        let segundoValor = Number(prompt("Digite o segundo valor"));
        let resultado;

        if(!primeiroValor || !segundoValor){
            alert("Parâmetros inválidos");
            calculadora();
        }else{
            function soma(){
                resultado = primeiroValor + segundoValor;
                alert(`${primeiroValor} + ${segundoValor} = ${resultado}`);
                novaOperacao();
            }
    
            function subtracao(){
                resultado = primeiroValor - segundoValor;
                alert(`${primeiroValor} - ${segundoValor} = ${resultado}`);
                novaOperacao();
            }
    
            function multiplicacao(){
                resultado = primeiroValor * segundoValor;
                alert(`${primeiroValor} * ${segundoValor} = ${resultado}`);
                novaOperacao();
            }
    
            function divisao(){
                resultado = primeiroValor / segundoValor;
                alert(`${primeiroValor} / ${segundoValor} = ${resultado}`);
                novaOperacao();
            }
    
            function novaOperacao();{
                let opcao = prompt("Deseja realizar outra operação?\n 1 - Sim.\n 2 - Não.");
                if (opcao == 1){
                    calculadora();
                }else if(opcao == 2){
                    alert("Obrigado por usar a calculadora do Magrão!");
                }else{
                    alert("Digite uma opção válida");
                    novaOperacao();
                }
            }
    
            if (operacao == 1){
                soma();
            }else if(operacao == 2){
                subtracao();
            }else if(operacao == 3){
                multiplicacao();
            }else if(operacao == 4){
                divisao();
            }
        }

        function soma(){
            resultado = primeiroValor + segundoValor;
            alert(`${primeiroValor} + ${segundoValor} = ${resultado}`);
            novaOperacao();
        }

        function subtracao(){
            resultado = primeiroValor - segundoValor;
            alert(`${primeiroValor} - ${segundoValor} = ${resultado}`);
            novaOperacao();
        }

        function multiplicacao(){
            resultado = primeiroValor * segundoValor;
            alert(`${primeiroValor} * ${segundoValor} = ${resultado}`);
            novaOperacao();
        }

        function divisao(){
            resultado = primeiroValor / segundoValor;
            alert(`${primeiroValor} / ${segundoValor} = ${resultado}`);
            novaOperacao();
        }

        function novaOperacao();{
            let opcao = prompt("Deseja realizar outra operação?\n 1 - Sim.\n 2 - Não.");
            if (opcao == 1){
                calculadora();
            }else if(opcao == 2){
                alert("Obrigado por usar a calculadora do Magrão!");
            }else{
                alert("Digite uma opção válida");
                novaOperacao();
            }
        }

        if (operacao == 1){
            soma();
        }else if(operacao == 2){
            subtracao();
        }else if(operacao == 3){
            multiplicacao();
        }else if(operacao == 4){
            divisao();
        }
    }
}
calculadora();