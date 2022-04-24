function compute() {
  document.getElementById("result").innerHTML = "";
  const principal = document.getElementById("principal").value;
  if (principal <= 0) {
    alert("Enter a positive number");
    document.getElementById("principal").focus();
    return;
  }
  const rate = document.getElementById("rate").value;
  const years = document.getElementById("years").value;
  const interest = (principal * years * rate) / 100;
  const year = new Date().getFullYear() + parseInt(years);

  document.getElementById(
    "result"
  ).innerHTML = `If you deposit <span class="highligh-text">${principal}</span>,<br>
  at an interest rate of <span class="highligh-text">${rate}</span>.<br>
  You will receive an amount of <span class="highligh-text">${interest}</span>,<br>
  in the year <span class="highligh-text">${year}</span>`;
}

function updateRate() {
  const rateval = document.getElementById("rate").value;
  document.getElementById("rate_val").innerText = rateval + "%";
}
