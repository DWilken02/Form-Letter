window.onload = function() {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    document.querySelector("span#user1").innerText = "user 1";

    document.querySelector("div#story").removeAttribute("class");
  }
}