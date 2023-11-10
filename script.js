const list_items=document.getElementById("list_items");
const add=document.getElementById("add_btn");
const inputbox=document.getElementById("input_box");

inputbox.addEventListener("keydown",(e)=>{
    if(e.key==="Enter"){
        if(inputbox.value===""){
            alert("Please enter something !");
        }
        else{
            let li=document.createElement("li");
            li.innerHTML=inputbox.value;
            list_items.appendChild(li);
            let span=document.createElement("span");
            span.innerHTML="\u00d7";
            li.appendChild(span);
        }
        inputbox.value="";
        savedata();
    }
})

add.addEventListener("click",()=>{
    if(inputbox.value===""){
        alert("Please enter something !");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        list_items.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputbox.value="";
    savedata();
})

list_items.addEventListener("click",(e)=>{
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        savedata();
    }else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
},false)


function savedata(){
    localStorage.setItem("data",list_items.innerHTML);
}

function showtasks(){
    list_items.innerHTML=localStorage.getItem("data");
}

showtasks();