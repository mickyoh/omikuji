"use strict";

{
  const btn = document.getElementById("btn");

  btn.addEventListener("click", () => {
    //const results = ["大吉", "中吉", "凶", "末吉"];
    //const results = ["大吉", "大吉", "大吉", "大吉", "凶"];
    //btn.textContent = results[Math.floor(Math.random() * results.length)];
    const n = Math.random();
    if (n < 0.05) {
      btn.textContent = "いの吉"; // 5%
    } else if (n < 0.1) {
      btn.textContent = "しの吉"; // 15%
    } else if (n < 0.2) {
      btn.textContent = "さお吉"; // 15%
    } else if (n < 0.3) {
      btn.textContent = "みつ吉"; // 15%
    } else if (n < 0.4) {
      btn.textContent = "末吉"; // 15%
    } else if (n < 0.5) {
      btn.textContent = "大凶"; // 15%
    } else {
      btn.textContent = "地獄"; // 65%
    }
  });
}
