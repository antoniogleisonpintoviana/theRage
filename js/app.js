const sortearButton = document.querySelector("#sortear-button");
const intervalInput = document.querySelector("#interval-input");

sortearButton.addEventListener("click", () => {
  const interval = intervalInput.value;
  const [start, end] = interval.split(" a ");

  const sorteado = Math.floor(Math.random() * (end - start + 1)) + parseInt(start);
  document.write("O número sorteado é: " + sorteado);

  const compartilharPromise = new Promise((resolve) => {
    resolve("O número sorteado é: " + sorteado);
  });

  compartilharPromise.then((result) => {
    console.log("Compartilhando o resultado: " + result);
    // Aqui você pode compartilhar o resultado como quiser
  });
});
