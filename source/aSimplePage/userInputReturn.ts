const input = document.getElementById("userInput") as HTMLInputElement;
const button = document.getElementById("submitButton") as HTMLButtonElement;

button.addEventListener("click", function (): void {
    alert(input.value);
});