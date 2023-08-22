window.onload = function() {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
    const user1Response = document.getElementById("user1Input").value;

    document.querySelector("span#user-1-response").innerText = user1Response;

    document.querySelector("div#story").removeAttribute("class");
  }
}