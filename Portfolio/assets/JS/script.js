// Get references to the input, display, and other elements
const colorInput = document.getElementById("color-input");
const colorDisplay = document.getElementById("color-display");
const selectedColorText = document.getElementById("selected-color");
const copyColorBtn = document.getElementById("copy-color");
const copyStatus = document.getElementById("copy-status");

// Update the color display and text when a color is selected
colorInput.addEventListener("input", () => {
  const selectedColor = colorInput.value;
  colorDisplay.style.backgroundColor = selectedColor;
  colorDisplay.style.borderColor = selectedColor;
  selectedColorText.textContent = selectedColor.toUpperCase();
});

// Copy the color code to the clipboard when the button is clicked
copyColorBtn.addEventListener("click", () => {
  const colorCode = selectedColorText.textContent;
  navigator.clipboard.writeText(colorCode).then(() => {
    copyStatus.textContent = "Color copied to clipboard!";
    setTimeout(() => {
      copyStatus.textContent = ""; // Clear message after 2 seconds
    }, 2000);
  }).catch(() => {
    copyStatus.textContent = "Failed to copy color.";
  });
});