const userForm = document.getElementById("userForm") as HTMLFormElement;
const userNameInput = document.getElementById("userName") as HTMLInputElement;
const userAgeInput = document.getElementById("userAge") as HTMLInputElement;
const userOutput = document.getElementById("userOutput") as HTMLElement;

userForm.addEventListener("submit", function (event: Event): void {
    event.preventDefault();
    const userName: string = userNameInput.value;
    const userAge: number = parseInt(userAgeInput.value || "0", 10);
    const htmlOutput = `User Name: ${userName}<br>User Age: ${userAge}`;
    const alertOutput = `User Name: ${userName}\nUser Age: ${userAge}`;

    userOutput.innerHTML = htmlOutput;
    alert(alertOutput);
});

const input = document.getElementById("userInput") as HTMLInputElement;
const button = document.getElementById("submitButton") as HTMLButtonElement;

button.addEventListener("click", function (): void {
    alert(input.value);
});