const { application } = require("express");

function deletion(id){
    fetch("localhost:3000/todos/"+id, {method: "DELETE", 
    headers: {'Content-Type': 'application/json'}})
    .then(resolvedValue => {
            document.getElementById("MainArea").removeChild(document.getElementById(id));
        }
    )
}

function addition(data){
    if (data === undefined){
        title = document.getElementById("title").value;
        description = document.getElementById("description").value;
    }
    else{
        title = data.title;
        description = data.description;
    }
    fetch("localhost:3000/todos/"+id, 
    {method: "POST", headers: {'Content-Type': 'application/json'}, 
    body: JSON.stringify({"title": title, "description": description})})
    .then(
        (responseData) => {
            let newDiv = document.createElement('div');
            let titleSpan = document.createElement('span');
            let descriptionSpan = document.createElement('span');
            newDiv.id = responseData.id;
            titleSpan.innerHTML = title;
            descriptionSpan.innerHTML = description;
            newDiv.appendChild(titleSpan);
            newDiv.appendChild(descriptionSpan);
            document.getElementById("MainArea").appendChild(newDiv);
        }
    )
}

function updation(){

}