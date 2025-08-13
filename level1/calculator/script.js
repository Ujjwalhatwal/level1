const expression = document.getElementById("expression");
const result = document.getElementById("result");
let currentExp = "";
let lastAns = "";

document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", () => {
    const val = btn.innerText;

    if (val === "clear") {
      currentExp = "";
      result.innerText = "0";
    } else if (val === "del") {
      currentExp = currentExp.slice(0, -1);
    } else if (val === "ENTER") {
      try {
        const evalExp = currentExp
          .replace(/x/g, "*")
          .replace(/÷/g, "/")
          .replace(/√/g, "Math.sqrt")
          .replace(/±/g, "-1*")
          .replace(/ans/g, lastAns);

        const res = eval(evalExp);
        result.innerText = res;
        lastAns = res;
      } catch {
        result.innerText = "Error";
      }
    } else {
      currentExp += val === "ans" ? "ans" : val;
    }

    expression.innerText = currentExp;
  });
});
