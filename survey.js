var button = document.getElementById("submit");

button.addEventListener("click", function(event){
    event.preventDefault()
    result()
  });

function result() {
    div = document.getElementById("results");
    div.innerHTML = "";
    question1 = document.getElementsByName("normal").value;
    question2 = document.getElementsByName("dry").value;
    question3 = document.getElementsByName("oily").value;
    question4 = document.getElementsByName("combination").value;
    if (question1 == true){
        info = document.createTextNode("You have normal skin!");
        p = document.createElement("p");
        p.appendChild(info);
        div.appendChild(p);
    }
    else if (question2 == true) {
        info = document.createTextNode("You have dry skin!");
        p = document.createElement("p");
        p.appendChild(info);
        div.appendChild(p);
    }
    else if (question3 == true) {
        info = document.createTextNode("You have oily skin!");
        p = document.createElement("p");
        p.appendChild(info);
        div.appendChild(p);
    }
    else if (question4 == true) {
        info = document.createTextNode("You have combination skin!");
        p = document.createElement("p");
        p.appendChild(info);
        div.appendChild(p);
    }
    else {
        info = document.createTextNode("ERROR: You must select True for at least one of the statements.");
        p = document.createElement("p");
        p.appendChild(info);
        div.appendChild(p);
    }
}