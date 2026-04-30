const btn = document.getElementById("btn");
const colorCode = document.getElementById("color-code");

btn.addEventListener("click", () => {
  // Generates a random RGB color
  const newColor = getRandomColor();
  document.body.style.backgroundColor = newColor;
  colorCode.textContent = `Current Color: ${newColor}`;
});

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

console.log("D-drive change applied");

const device = "D-drive";