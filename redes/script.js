const btn = document.getElementById('converter');

function convertToBinary (number, bin) {
    if (number > 0) {
        return convertToBinary( parseInt(number / 2) ) + (number % 2)
    };
    return '';
}

btn.addEventListener('click', (e) =>{
    e.preventDefault();
    let select = document.getElementById("selecionar");
    let num = document.getElementById("num");
    num = num.value;

    let value = select.options[select.selectedIndex].value;

    if(value == 0){
        let dec = 0;
        for (let c = 0; c < num.length; c++){
            dec += Math.pow(2, c) * num[num.length - c - 1]; //calcula para pegar do último ao primeiro
        }
        console.log(dec);
    }else if(value == 1){
        console.log(convertToBinary(num));
    }
})
