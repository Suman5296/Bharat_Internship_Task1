const dc = document.getElementById('cel');
const df = document.getElementById('frh');
const dk = document.getElementById('klv');
const celcius = () =>{
    console.log(dc.value);
    df.value = ((dc.value*9/5)+32).toFixed(3);
    dk.value = (parseInt(dc.value) + 273.15).toFixed(3);
}

const Ferehenhit = () =>{
    console.log(df.value);
    dc.value = ((df.value-32)*5/9).toFixed(3);
    dk.value = (parseInt(df.value-32)*5/9 + 273.15).toFixed(3);
}

const Kelvin = () =>{
    console.log(dk.value);
    df.value = ((dk.value-273.15)*9/5+32).toFixed(3);
    dc.value = (parseInt(dk.value) - 273.15).toFixed(3);
}

const clearall = ()=>{
    dc.value = "";
    df.value = "";
    dk.value = "";
}

