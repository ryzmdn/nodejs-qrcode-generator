document.getElementById("qrForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  const url = document.getElementById("url").value;

  await fetch("http://localhost:3000/generated-qrcode", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url }),
  })
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("qrCodeResult").innerHTML = data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
