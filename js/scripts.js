window.onload = function() {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
    const user1Response = document.getElementById("user1Input").value;
    const user2Response = document.getElementById("user2Input").value;

    document.querySelector("span#user-1-response").innerText = user1Response;
    document.querySelector("span#user-2-response").innerText = user2Response;
    console.log(user2Response);
    document.querySelector("div#story").removeAttribute("class");
  }
}