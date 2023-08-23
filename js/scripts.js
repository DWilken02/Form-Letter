window.onload = function() {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
    const user1Response = document.getElementById("user1Input").value;
    const user2Response = document.getElementById("user2Input").value;
    const user3Response = document.getElementById("user3Input").value;
    const user4Response = document.getElementById("user4Input").value;

    document.querySelector("span#user-1-response").innerText = user1Response;
    console.log(user1Response);
    document.querySelector("span#user-2-response").innerText = user2Response;
    console.log(user2Response);
    document.querySelector("span#user-3-response").innerText = user3Response;
    console.log(user3Response);
    document.querySelector("span#user-4-response").innerText = user4Response;
    console.log(user4Response);
    document.querySelector("div#story").removeAttribute("class");
  }
}