var input = document.getElementById("todo");


function add() {
    if (input.value.trim() !== "") {
        var liElement = document.createElement("li");
        var ulElement = document.getElementById("todoList");

        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.style.marginRight = "10px";
        checkbox.style.width = "18px";
        checkbox.style.height = "18px";
        checkbox.onclick = function () {
            if (checkbox.checked) {
                liText.style.textDecoration = "line-through";
                liText.style.color = "gray";
            } else {
                liText.style.textDecoration = "none";
                liText.style.color = "#fff";
            }
        };


        var liText = document.createElement("span");
        liText.textContent = input.value;

        var delBtnElement = document.createElement("button");
        var delBtnText = document.createTextNode("Delete");
        delBtnElement.appendChild(delBtnText);
        delBtnElement.setAttribute("onclick", "deleteItem(this)");
        delBtnElement.style.marginLeft = "30px";
        delBtnElement.style.padding = "7px 10px";
        delBtnElement.style.fontSize = "medium";
        delBtnElement.style.border = "1px solid rgba(206, 34, 34, 1)";
        delBtnElement.style.color = "white";
        delBtnElement.style.backgroundColor = "rgba(219, 28, 28, 1)";
        delBtnElement.style.borderRadius = "6px";

        var editBtnELEMENT = document.createElement("button");
        var editBtnText = document.createTextNode("Edit");
        editBtnELEMENT.appendChild(editBtnText);
        editBtnELEMENT.setAttribute("onclick", "editSingleItem(this)");
        editBtnELEMENT.style.margin = "5px";
        editBtnELEMENT.style.padding = "7px 13px";
        editBtnELEMENT.style.fontSize = "medium";
        editBtnELEMENT.style.border = "1px solid rgba(76, 74, 82, 1)";
        editBtnELEMENT.style.color = "#fff";
        editBtnELEMENT.style.backgroundColor = "rgba(89, 88, 92, 1)";
        editBtnELEMENT.style.borderRadius = "6px";

        liElement.appendChild(checkbox);
        liElement.appendChild(liText);
        liElement.appendChild(delBtnElement);
        liElement.appendChild(editBtnELEMENT);
        ulElement.appendChild(liElement);

        input.value = "";
    } else {
        alert("Required field is missing");
    }
}

function deleteAll() {
    var ulELement = document.getElementById("todoList");
    ulELement.innerText = "";
}

function deleteItem(e) {
    e.parentNode.remove();
}

function editSingleItem(e) {
    var updateValue = prompt("Enter new text");
    if (updateValue !== null && updateValue.trim() !== "") {
        e.parentNode.querySelector("span").textContent = updateValue;
    }
}

