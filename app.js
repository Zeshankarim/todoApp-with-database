
function add(){


    var inputt=document.getElementById("input_data");
    var inputData=inputt.value;

//for contorelling empety value
    if(inputData==""){
    alert("Enter a value");
    }
    else{
        var a =document.getElementById("listt");
    var li=document.createElement("li")
    a.appendChild(li)

    }
    


   var b =document.createTextNode(input_data.value)

   li.appendChild(b)
   input_data.value=""
   
   //delete btn
   var btn=document.createElement("button");
   var btn_name=document.createTextNode("delete");
   btn.appendChild(btn_name);
   li.appendChild(btn);
   btn.setAttribute("class","btnClass")
   btn.setAttribute("onclick","del(this)")
   btn.appendChild(btn_name)

//    edit button
var editBtn=document.createElement("button")
var textt= document.createTextNode("edit")
editBtn.appendChild(textt)
li.appendChild(editBtn)
editBtn.setAttribute("onclick","edit(this)")

console.log(editBtn) 

  
}
function del(e){
    e.parentNode.remove();
   }
function dellAll(){
    listt.innerHTML=""
   
}
function edit(e){
    var editedText=prompt("Enter a new value")
    e.parentNode.firstChild.nodeValue=editedText
    
}