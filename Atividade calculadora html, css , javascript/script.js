function calculate(operation) {
    const input1 = parseFloat(document.getElementById("input1").value);
    const input2 = parseFloat(document.getElementById("input2").value);
    let result;

    if (isNaN(input1) || isNaN(input2)) {
        document.getElementById("result").value = "Erro";
        return;
    }
    switch (operation) {
        case '+':
            result = input1 + input2;
            break;
        case '-':
            result = input1 - input2;
            break;
        case '*':
            result = input1 * input2;
            break;
        case '/':
            if (input2 === 0) {
                result = "Erro";
            } else {
                result = input1 / input2;
            }
            break;
    }

    document.getElementById("result").value = result;
}
