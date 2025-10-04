const display = document.getElementById("display");
const buttons = document.querySelectorAll("input[type=button]");
const reset = document.querySelector("input[type=reset]");

let expr = "";

// Manejo de botones
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.value;

    if (value === "=") {
      try {
        expr = eval(expr).toString();
        display.value = expr;
      } catch {
        display.value = "Error";
        expr = "";
      }
    } else {
      expr += value;
      display.value = expr;
    }
  });
});

// Botón de limpiar (C)
reset.addEventListener("click", () => {
  expr = "";
  display.value = "";
});
