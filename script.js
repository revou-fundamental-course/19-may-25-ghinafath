const directionText = document.getElementById("conversionDirection")

function konversiCtoF() {
  const c = parseFloat(document.getElementById("celsius").value)
  if (isNaN(c)) {
    alert("Masukkan suhu Celsius yang valid!")
    return
  }
  const f = (c * 9/5) + 32
  document.getElementById("fahrenheit").value = f.toFixed(2)
  document.getElementById("rumus").value = `${c}°C * (9/5) + 32 = ${f.toFixed(2)}°F`
  directionText.innerText = "Konversi dari Celsius (°C) ke Fahrenheit (°F)"
}

function konversiFtoC() {
  const f = parseFloat(document.getElementById("fahrenheit").value)
  if (isNaN(f)) {
    alert("Masukkan suhu Fahrenheit yang valid untuk diubah ke Celsius!")
    return
  }
  const c = (f - 32) * 5/9
  document.getElementById("celsius").value = c.toFixed(2)
  document.getElementById("rumus").value = `(${f}°F - 32) * 5/9 = ${c.toFixed(2)}°C`
  directionText.innerText = "Konversi dari Fahrenheit (°F) ke Celsius (°C)"
}

function resetForm() {
  document.getElementById("celsius").value = ""
  document.getElementById("fahrenheit").value = ""
  document.getElementById("rumus").value = ""
  directionText.innerText = ""
}
