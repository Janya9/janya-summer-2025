let name = "Janya";
let age = "14";
let likesSushi = true;

function greeting(name) {
    console.log("Hello", name);
}

greeting("Janya");

function saveName() {
    let newName= document.getElementById("greeter").value; // text field valuw from the user
    document.getElementById('username').textContent= newName;
    document.getElementById("greeter").value="";
}
