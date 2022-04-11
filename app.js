// set a initial value to zero
let count = 0;
// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

// set a count function
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("increase")) {
      count++;
    } else if (styles.contains("decrease")) {
      count--;
    } else {
      count = 0;
    }

    if (count < 0) {
      value.style.color = "red";
    }
    if (count > 0) {
      value.style.color = "#f1c40f";
    }
    if (count === 0) {
      value.style.color = "#fff";
    }
    value.textContent = count;
  });
});
