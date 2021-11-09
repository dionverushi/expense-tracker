var close = document.getElementsByClassName("close");
var row = document.getElementById("row");

function newRow(){
    var row = document.getElementById("row");

    //Marrja e vlerave nga inputet
    var name = document.getElementById("name").value;
    var date = document.getElementById("date").value;
    var amount = document.getElementById("amount").value;
    
    //Krijimi i elementeve te tabeles
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    
    //nqs inputet jan bosh marrin vlere <empty>
    if(name ===''){
        name = ('<empty>');
    }
    if(date ===''){
        date = ('<empty>');
    }
    if(amount ===''){
        amount = ('<empty>');
    }

    if(name === '<empty>'&& date === '<empty>'&& amount === '<empty>'){
        alert("Write something!");
    }
    //Elementet e tabeles marrin vlerat
    else {
        td1.append(name);
        td2.append(date);
        td3.append(amount);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        document.getElementById("table").appendChild(tr);
    }
    if(document.getElementById("table").childNodes.length > 2){
        row.style.display = "none";
    }
    //inputet i ben empty
    document.getElementById("name").value = "";
    document.getElementById("date").value = "";
    document.getElementById("amount").value= "";

    //krijimi butonit
    var button = document.createElement("TD");
    var txt = document.createTextNode("X");
    button.className = "close";
    button.appendChild(txt);
    tr.appendChild(button);

    //fshirja e rreshtit pas shtypjes se butonit
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.remove();
            if(document.getElementById("table").childNodes.length == 2){
                row.style.display = null;
            }
        }
    }

}
