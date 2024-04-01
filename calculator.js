let append=(character)=>{
  document.querySelector("#display").value+=character
}


let cleardata=()=>{
  document.querySelector("#display").value="";
}

let claculatedata=()=>{
  let element=document.querySelector("#display").value;
  let result=eval(element)
  document.querySelector("#display").value=result
}

let datadelete=()=>{
  let currentItem=document.querySelector("#display").value;
  document.querySelector("#display").value=currentItem.slice(0,-1)
}