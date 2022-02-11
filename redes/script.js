const btn = document.getElementById('converter');
const result = document.getElementById('result');
console.log(result);

function convertToBinary (number, bin) {
    // if (number > 0) {
    //     return convertToBinary( parseInt(number / 2) ) + (number % 2)
    // };
    // return '';
    return (number >>> 0).toString(2);//Converte em numero inteiro não assinado
}

function toDecimal(bin) {
    let dec = 0;
  
    for (let c = bin.length - 1, i = 0; c >= 0; c--, i++) {
      dec += bin[c] * Math.pow(2, i);
    }
  
    return dec;
  }

btn.addEventListener('click', (e) =>{
    e.preventDefault();
    let select = document.getElementById("selecionar");
    let num = document.getElementById("num");
    num = num.value;

    let value = select.options[select.selectedIndex].value;

    if(value == 0){
        let resultado = toDecimal(num);
        result.innerHTML = resultado;
    }else if(value == 1){
        let resultado = convertToBinary(num);
        result.innerHTML = resultado;
    }
})
