const textbox = document.getElementById("textbox");
const tofahrenheit = document.getElementById("tofahrenheit");
const tocel = document.getElementById("tocel");
const result = document.getElementById("result");

function convert() {
    let temp = Number(textbox.value);

    if (tofahrenheit.checked) {
        temp = temp * (9 / 5) + 32;
        result.textContent = temp.toFixed(2) + `°F`;
    }
     else if (tocel.checked) 
        {
        temp = (temp - 32) * (5 / 9);
        result.textContent = temp.toFixed(2) + `°C`;
    }
     else {
        result.textContent = "Select a unit first";
    }
}

 