let btn=document.querySelector("button");
let inp=document.querySelector("input");
let ul=document.querySelector("ul");


btn.addEventListener("click",()=>{
if(inp.value.length>0){
let li = document.createElement("li");
li.innerText=inp.value;


let delBtn = document.createElement('button');
delBtn.classList.add("delete");
delBtn.innerText="Delete";
li.appendChild(delBtn);
ul.appendChild(li);
inp.value="";

}
});
ul.addEventListener("click",(event)=>{
if(event.target.nodeName=="BUTTON"){
	let listItem=event.target.parentElement;
	listItem.remove();
}
}
);

//let delBtns = document.querySelectorAll(".delete");
//for( delBtn of delBtns){
//delBtn.addEventListener("click",function(){
//let par=this.parentElement;
//console.log(par);par.remove();
//});
//}




