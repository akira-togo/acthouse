document.getElementById("remove-div")
 .addEventListener("click",function(){
  var container=document.getElementById("container");
  var children=container.children;
  console.log(children);
  // container.removeChild(children[2]);
  var f=container.firstChild;
  var l=container.lastChild;
  container.removeChild(f);
 });


document.getElementById("add-div")
 .addEventListener("click",function(){
  var c=document.getElementById("container");
　var e=document.createElement("div");
 e.setAttribute("class","child");
 e.innerHTML=c.children.length+1;
 document.getElementById("container")
    .appendChild(e);
});




var timerId,time=0;
document.getElementById("start")
 .addEventListener("click",function(){
 	if(!timerId){
 	var value=0;
 	timerId=setInterval(function(){
 	var timeIrd=document.getElementById("timer");
 	timer.innerHTML=value;
  value++;
 },1000);   
 }
 });

document.getElementById("stop")
.addEventListener("click",function(){
  clearInterval(timerId);
  timerId=null;
});


document.getElementById("delay")
 .addEventListener("click",function(){
 	 setTimeout(function(){
 	 	 alert("３秒後にこんにちは");
 	 },3000);
 });


var i=0;
document.getElementById("image")
 .addEventListener("click",function(){
 	var images=[
 	["firippin.png","フィリピン"],
 	["red.jpeg","レッドホース"],
 	["amerika.jpeg","アメリカ"]
 	];
   this.src=images[i][0];
   this.alt=images[i][1];
   i++;
   if(i>=images.length){
   i=0;
   }// // if(this.src.endsWith(i[0][0])){
// 	var redhose=i[1];
// 	this.src=redhose[0];
// 	this.alt=redhose[1];
// 	}else{
//        var firippin=i[0];
//        this.src=firippin[0];
//        this.alt=firippin[1];
 
 });



document.getElementById("div1")
 .addEventListener("mouseover",function(){
  // var div=document.getElementById("div1");
  this.style.backgroundColor="red";
 });


 document.getElementById("div2")
  .addEventListener("click", function(){
    this.style=this.style;
  })




document.getElementById("open-self")
 .addEventListener("click",function(){
  location.href="http://www.yahoo.co.jp";
 });
 document.getElementById("open-new")
  .addEventListener("click",function(){
    window.open("http://www.apple.com/ph");
  });



document.getElementById("btn4")
 .addEventListener("click",function(){
   var from=document.getElementById("from").value;
   var to=document.getElementById("to").value;
   var num= +from;
   var total=0;
   while(num <= +to){
    total=total+num; num++;}
   alert(total);
 });






document.getElementById("btn3")
.addEventListener("click",function(){
  var gender=new Array();
  gender[0]="男";
  gender[1]="女";
  gender[2]="オカマ";
  console.log(gender);
  var month=["jan","feb","mar","aip","may","jun","jul",
  "aug","sep","oct","nov","dec"];
  console.log(month);
  var index=document.getElementById("text2").value;
  // alert(month[index]);
  for(var i=0; i<month.length; i++){
    if(i==4){
      continue;
    }
    console.log(month[i]);
  }
});



document.getElementById("btn2")
 .addEventListener("click",function(){
  var value=document.getElementById("text1").value;
  switch(value){
    case "0":
    alert("0です");
    break;
    case "1":
    alert("1です");
    break;
    case "あ":
    alert("あです");
    break;
    default:
    alert("０でも１でもあでもないです");
    break;
  }
 });


document.getElementById("alert")
 .addEventListener('click',function(){
   alert("hello javascript");
 });
 
 document.getElementById("btn1")
　.addEventListener('click',function(){
    var value=document.getElementById("text1").value;
    if(value=="1"){
      alert("1です");
    } else if(value=="2"){
      alert("2です");
    } else if(value=="あ"){
      alert("あです");
    } else{
      alert("12でもないです");
    }
  });

 document.getElementById("confirm")
 .addEventListener('click',function(){
   var result=confirm("明日も見てくれるかな");
   if(result==true){
     alert("いいとも");
   } else{
    alert("ダメとも");
   }
 });
 

 document.getElementById("prompt")
 .addEventListener('click',function(){
  var result=prompt("あなたのお名前を教えてください");
  alert("ようこそ　東郷瑛"+result+"さん");
 });

　


  var b =document.getElementById("btn")
  b.addEventListener('mouseover',function(){
  var p1=document.getElementById("par1");
  p1.innerHTML="ラガービール";
   });




  var p1 = document.getElementById("par1");
  p1.innerHTML="おちんちん";
  console.log(p1.innerHTML);
  


  var clz=document.getElementsByClassName("p");
  clz[1].innerHTML="お母さん";
  console.log(clz[1].innerHTML);





  var p3=document.getElementById("par3");
  console.log(p3.innerHTML);
  p3.innerHTML="おっぱい食べたい";
  



  function changeString(message,msg2){
    var p1=document.getElementById("par1");
    p1.innerHTML=message;
    var p2=document.getElementById("par2");
    p2.innerHTML=msg2;
  }