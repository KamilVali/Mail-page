let compose =document.querySelector(".composebutton");
let card=document.querySelector(".card");
let send=document.querySelector(".bttn");
let to=document.querySelector("#To");
let subjct=document.querySelector("#subject");
let tbl=document.querySelector(".righttable");
let boxes=document.getElementById("all");
let mybox=document.getElementsByName("box");
let dltbutton=document.querySelector(".deletebutton");


function checking (){

    if (boxes.checked == true){
        for(i=0; i<mybox.length; i++){
            mybox[i].checked=true;
        }
    }
    else {
        for(i=0; i<mybox.length; i++){
            mybox[i].checked=false;
        }
    }
}



compose.addEventListener("click", function(event){
    event.preventDefault();
    card.style.display="block";
    card.style.display="flex";
})
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;

send.addEventListener("click", function(event){
    event.preventDefault();
    let newtr=document.createElement("tr");
    let newbox=document.createElement("td");
    let newto=document.createElement("td");
    let newsubject=document.createElement("td");
    let newdate=document.createElement("td");
    let newcheckbox=document.createElement("input");
    newcheckbox.type="checkbox";

    mybox2=mybox[2];
    mybox2.parentElement.parentElement.hidden=true;

    newto.innerText=to.value;
    newsubject.innerText=subjct.value;
    newdate.innerText=today;
    newbox.appendChild(newcheckbox);
    // newbox.document.type="input";
    // newbox.type="checkbox";
    
    console.log(newbox)
    
    newtr.appendChild(newbox);
    newtr.appendChild(newto);
    newtr.appendChild(newsubject);
    newtr.appendChild(newdate);

    tbl.appendChild(newtr);
    tbl.insertBefore(newtr,tbl.firstChild)
    

    card.style.display="none";


})
dltbutton.addEventListener("click", function (event){
    event.preventDefault();
    for(i=0; i<mybox.length; i++){
        var chckbox=mybox[i];
    if(chckbox.checked){
        chckbox.parentElement.parentElement.hidden=true;
    }}
})
// dltbutton.addEventListener("click", deleting());