document.getElementById("btn").addEventListener("click", function () {
  const input = document.getElementById("input");
  const inputValue = parseInt(input.value);
  const random = document.getElementById("random");
  if (input.value == "" || input.value == NaN) {
    alert("Input A Number Than Check");
  } else {
    const inputed = document.getElementById("inputed");
    inputed.innerText = inputValue;
    random.innerText = Math.round(Math.random() * 100);
  }
  input.value = "";

  if (inputValue == parseInt(random.innerText)) {
    alert("WOW YOU ARE A WINNER AND YOU GOT A IPHONE 12 PRO MAX");
  } else {
    document.getElementById("fail").style.display = "block";
  }
});

function reload() {
  window.location.reload();
}
