// traer formulario con get
const formulario = document.querySelector("form");
const cantidadTicketsInput = document.getElementById("cantidadTickets");
const categoriaSelect = document.getElementById("categoriaSelect");
const totalPagoSpan = document.getElementById("totalPago");

//Calcular total a pagar + actualizar
function calcularTotal() {
    const cantidadTickets = parseInt(cantidadTicketsInput.value);
    const categoria = parseInt(categoriaSelect.value);
    let descuento = 0;

    if (categoria === 1) {
      descuento = 0.8;
    } else if (categoria === 2) {
      descuento = 0.5;
    } else if (categoria === 3) {
      descuento = 0.15;
    } else {
      descuento = 0;
    }

    const precioTicket = 200;
    const totalDescuento = precioTicket * (1 - descuento);
    const totalPagar = cantidadTickets * totalDescuento;
    totalPagoSpan.textContent = totalPagar.toFixed(2);

}

// camb de cant de ticket

formulario.addEventListener("change", calcularTotal);

// borraas
const btnBorrar = document.getElementById("btnBorrar");
btnBorrar.addEventListener("click", function (event){
    event.preventDefault();
    formulario.reset();
    totalPagoSpan.textContent = "";
});

// estado compra
    const btnResumen = document.getElementById("btnResumen");
btnResumen.addEventListener("click", (event) => {
  event.preventDefault();
  
  const { value: nombre } = document.getElementById("nombre");
  const { value: apellido } = document.getElementById("apellido");
  const { value: email } = document.getElementById("mail");
  const { value: cantidadTickets } = cantidadTicketsInput;
  const { text: categoria } = categoriaSelect.options[categoriaSelect.selectedIndex];
  const totalPagar = totalPagoSpan.textContent;

    console.log("Resumen de la Compra:");
    console.log("Nombre:", nombre);
    console.log("Apellido:", apellido);
    console.log("Email:", email);
    console.log("Cantidad de Tickets:", cantidadTickets);
    console.log("Categoria:", categoria);
    console.log("Total a pagar:", totalPagar);

 
});
