//この上には何も書かない
jQuery(function($){
  var maxLength=6;
  var memory="";	
 $("#calc").on("click", ".num", function(){
  var num=$(this).text();
  var current =$(".result").text();
  var newVal;
  if(current=="0"){
  	newVal=num;
}else if(
  	memory.length == 0 ||
  	memory.match(/[\+\-\*\/\%]$/)){
  	newVal = num;
}
  else{
  	newVal=current + num;
}
  if(newVal.length>maxLength){
    return;
  }
  $(".result").text(newVal);
  memory=memory + num;
}).on("click",".clear",function(){
   $(".result").text(0);
   memory="";
}).on("click",".ope",function(){
  if(!memory.match(/[\+\-\*\/\%]$/)){
    if (checkOverflow()){
      return;
    }else{
      showResult(eval(memory));
    }
}
  // if(checkOverflow()){
    // return;
  // }else{
    // showResult(eval(memory));}
  // showResult(eval(memory));

	var ope=$(this).text();
	if(memory.length==0){
		memory=$(".result").text() + ope;
	}else if(memory.match(/[\+\-\*\/\%]$/)){
		memory=memory.replace(/[\+\-\*\/\%]$/, ope);
	}else{
		memory=memory +ope;
	}
}).on("click",".eq",function(){
  if(!checkOverflow()){
     showResult(eval(memory));
     memory="";// var result=eval(memory)

  // if(result.toString().length>maxLength){
    // alert("ケタ数オーバーフロー");
    // memory="";
    // showResult(0);
  }else{
    showResult(result);
    memory="";
  }
	// $(".result").text(result);
	// memory="";
}).on("click",".switch",function(){
  var current = $(".result").text();
  if(current==="0"){
    return;
  }
  var newValue;
  if(current.startsWith("-")){
     newValue=current.replace(/^\-?/,"");
  }else{
    newValue="-"+current;
  }
    showResult(newValue)
})
.on("click",".button",function(){
  // new Audio("images/aaa.mp3").play();
   console.log(memory);
});

var checkOverflow=function(){
  var result=eval(memory);
  if(result &&
    result.toString().length>maxLength){
    alert("ケタ数オーバーフロー");
    showResult(0);
    memory="";
    return true;
  }
  return false;
};
function showResult(value){
  $(".result").text(value);
}

});
//この下には何も書かない