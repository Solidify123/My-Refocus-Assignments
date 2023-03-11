

function convertToKelvin1(tempCelsius){
    let tempKelvin1 = tempCelsius + 273.15;
    return tempKelvin1;
}

console.log(convertToKelvin1(100))


function convertToKelvin2(tempFahrenheit){
    let tempKelvin2 = ((tempFahrenheit - 32) * 5 / 9) + 273.15;
    return tempKelvin2
}

console.log(convertToKelvin2(100))