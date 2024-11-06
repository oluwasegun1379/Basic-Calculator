function calcFunction(value) {
  const screen = document.getElementById("calc-screen");

  if (value === "C") {
    screen.value = "";
  } else if (value === "←") {
    screen.value = screen.value.slice(0, -1);
  } else if (value === "Enter") {
    try {
      screen.value = eval(screen.value);
    } catch (error) {
      screen.value = "Error";
    }
  } else {
    screen.value += value;
  }
}
