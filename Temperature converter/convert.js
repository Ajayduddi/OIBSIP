function convert(){
    var temperature=Number(document.getElementById("input-data").value);
    var type=document.getElementById("selection-box").value;
    if(type=='celsius'){
        let f=(temperature*(9/5)+32).toFixed(2);
        let k=(temperature+(273.15)).toFixed(2);
        document.getElementById("value1").innerHTML=("temperature in kelvin - "+k);
        document.getElementById("value2").innerHTML=("temperature in fahrenheit - "+f);
    }
    else if(type=='kelvin'){
        let c=(temperature-(273.15)).toFixed(2);
        let f=(temperature*(9/5)-459.67).toFixed(2);

        document.getElementById("value1").innerHTML=("temperature in celsius - "+c);
        document.getElementById("value2").innerHTML=("temperature in fahrenheit - "+f);
    }
    else{
        let c=((temperature-32)*(5/9)).toFixed(2);
        let k=((temperature+459.67)*(5/9)).toFixed(2);

        document.getElementById("value1").innerHTML=("temperature in kelvin - "+k);
        document.getElementById("value2").innerHTML=("temperature in celsius - "+c);
    }
}



