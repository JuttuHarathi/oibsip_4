var display = document.querySelectorAll('#rslt p')[0];
var keyval = document.getElementsByClassName("key");

function del(){
    display.innerHTML=display.innerHTML.slice(0,-1);
}
function clr(){
    display.innerHTML="";
}
for(var i=0;i<keyval.length;i++){
	  if(keyval[i].innerHTML === '='){
		    keyval[i].addEventListener("click", calculate(i));
	  }else{
		   keyval[i].addEventListener("click", concat(i));
	  }
};
function concat (i){
	return function(){
        if(keyval[i].innerHTML === "x"){
		      display.innerHTML += "*";
	   } else{
		   display.innerHTML  += keyval[i].innerHTML;
	   }
  };
};
 function calculate(i) {
    return function () {
        display.innerHTML = eval(display.innerHTML);
    };
  };




