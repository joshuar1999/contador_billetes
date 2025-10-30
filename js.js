document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btnCalcular").addEventListener("click", calcularTotales);
  document.getElementById("btnLimpiar").addEventListener("click", limpiarCampos);
});

function calcularTotales() {
  let totalMonedas = 0;
  let totalBilletes = 0;

  document.querySelectorAll(".panel").forEach(panel => {
    let subtotal = 0;
    panel.querySelectorAll(".campo").forEach(campo => {
      const valor = parseFloat(campo.dataset.valor);
      const cantidad = parseInt(campo.querySelector("input").value) || 0;
      subtotal += valor * cantidad;
    });

    if (panel.querySelector("h2").textContent.includes("Monedas")) {
      totalMonedas = subtotal;
      document.getElementById("totalMonedas").textContent = `$${subtotal.toFixed(2)}`;
    } else {
      totalBilletes = subtotal;
      document.getElementById("totalBilletes").textContent = `$${subtotal.toFixed(2)}`;
    }
  });

  const totalGeneral = totalMonedas + totalBilletes;
  document.getElementById("totalGeneral").textContent = `$${totalGeneral.toFixed(2)}`;
}

function limpiarCampos() {
  document.querySelectorAll("input[type='number']").forEach(input => {
    input.value = 0;
  });
  calcularTotales();
}
