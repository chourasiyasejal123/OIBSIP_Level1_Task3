function convertTemperature() {
    const temperature = document.getElementById('temperature').value;
    const unit = document.getElementById('unit').value;
    const resultDiv = document.getElementById('result');

    if (isNaN(temperature) || temperature === "") {
        resultDiv.innerHTML = "Please enter a valid number.";
        return;
    }

    let convertedTemp, resultUnit;

    if (unit === "Celsius") {
        convertedTemp = (temperature * 9/5) + 32;
        resultUnit = "Fahrenheit";
    } else {
        convertedTemp = (temperature - 32) * 5/9;
        resultUnit = "Celsius";
    }

    resultDiv.innerHTML = `Converted Temperature: ${convertedTemp.toFixed(2)}° ${resultUnit}`;
}
