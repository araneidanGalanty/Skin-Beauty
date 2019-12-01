const div = document.getElementById("results");

var button = document.getElementById("submit");
button.addEventListener("click", function(event){
    event.preventDefault()
    if (validate()) {
        result();
    }
  });

function validate() {
    div.innerHTML = "";
    var question1 = document.forms["questionBox"]["normal"].value;
    var question2 = document.forms["questionBox"]["dry"].value;
    var question3 = document.forms["questionBox"]["oily"].value;
    var question4 = document.forms["questionBox"]["combination"].value;
    var all = [question1, question2, question3, question4];
    var count = 0;
    for (let i=0; i<all.length;i++) {
        if (all[i] == "true") {
            count++;
        }
    }
    if (count > 1) {
        info = document.createTextNode("ERROR: You must select True for at ONLY ONE of the statements.");
        p = document.createElement("p");
        p.appendChild(info);
        div.appendChild(p);
        return false;
    }
    else {
        return true;
    }
}
function result() {

    var question1 = document.forms["questionBox"]["normal"].value;
    var question2 = document.forms["questionBox"]["dry"].value;
    var question3 = document.forms["questionBox"]["oily"].value;
    var question4 = document.forms["questionBox"]["combination"].value;
    
    if (question1 == "true"){
        info = document.createTextNode("You have normal skin!");
        p = document.createElement("p");
        p.appendChild(info);
        div.appendChild(p);
    }
    else if (question2 == "true") {
        info = document.createTextNode("You have dry skin!");
        p = document.createElement("p");
        p.appendChild(info);
        div.appendChild(p);
    }
    else if (question3 == "true") {
        info = document.createTextNode("You have oily skin!");
        p = document.createElement("p");
        p.appendChild(info);
        div.appendChild(p);
    }
    else if (question4 == "true") {
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