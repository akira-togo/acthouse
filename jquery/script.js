jQuery(function($){
 $("#traverse2 button").on("click",function(){
  $(".blue_border").removeClass("blue_border");
 });


 $("#prev").on("click",function(){
  $("#traverse2 .saburo")
   .prev().addClass("blue_border");
 });

 $("#prevAll").on("click",function(){
  $("#traverse2 .saburo")
   .prevAll().addClass("blue_border");
 });

$("#next").on("click",function(){
  $("#traverse2 .saburo")
   .next().addClass("blue_border");
 });

$("#nextAll").on("click",function(){
  $("#traverse2 .saburo")
   .nextAll().addClass("blue_border");
 });


$("#parent").on("click",function(){
  $("#traverse2 .saburo")
   .parent().addClass("blue_border");
 });

$("#parents").on("click",function(){
  $("#traverse2 .saburo")
   .parents().addClass("blue_border");
 });//bodyを含むすべて

$("#children").on("click",function(){
  $("#traverse2 .saburo")
   .children().addClass("blue_border");
 });

$("#siblings").on("click",function(){//兄弟
  $("#traverse2 .saburo")
   .siblings().addClass("blue_border");
 });

$("#closest").on("click",function(){
  $("#traverse2 .saburo")
   .closest("div").addClass("blue_border");//closest一番近いものを指定する
 });

$("#find").on("click",function(){
  $("#traverse2 .saburo")
   .find("ul>li>ul>li:first").addClass("blue_border");
 });

$("#mago").on("click",function(){
$("#traverse2 .mago")
 .parent().parent()
 .siblings().addClass("blue_border");
});







 $("#first").on("click",function(){
  $("#traverse1 li").css("font-weight","bold")
  .first().css("color","red");
   });
 
 
 $("#last").on("click",function(){
  $("#traverse1 li").css("font-weight","normal")
  .last().css("color","blue");
   });
 

 $("#eq").on("click",function(){
  $("#traverse1 li").css("font-style","italic")
  .eq(3).css("color","green");
   });






 $("#empty-elem").on("click",function(){
  $("#remove li:first-child").empty();
 });//クリア
 $("#clone-elem").on("click",function(){
  $("#remove li:nth-child(2)")
  .clone().appendTo("#remove ul");
 });//コピー



 $("#remove > #remove-elem").on("click",function(){
  $(".first").remove();
 });//削除
  
  $("#remove > #restore-elem").on("click",function(){
    $("#remove > ul").prepend("<li>太郎</li>");
 });//復活


// >は親と子供を表す。
 $("#append > #append-elem").on("click",function(){
  $("#append > ul").append("<li>花子</li>");
  // $("<li>花子</li>").appendTo("append>ul");
 });

 $("#append > #prepend-elem").on("click",function(){
  $("#append > ul").prepend("<li>太郎</li>");
  // $("<li>花子</li>").pretendTo("append>ul");
 });

 $("#append > #before-elem").on("click",function(){
  // $("#append > ul").before("子供の答え");
  $("<p>子供の名前</p>").insertBefore("#append>ul");
 });
 $("#append > #after-elem").on("click",function(){
  // $("#append > ul").after("<p>生年月日</p>");
  $("<p>生年月日</p>").insertAfter("#append>ul");
 }); 



 
  $("#form2 >.get-check").on("click",function(){
   var arr=$("#form2 >input:checkbox:checked");
   var checked=[];
   // for(var i=0; i<arr.length; i++){
   //  checked[i]=$(arr[i]).val();
   // }
   var checked=
   $("#form2>input:checkbox:checked")
   .map(function(){
    return $(this).val();
   }).toArray();
   alert(checked);
  });





  $("#form2 > .set-radio").on("click",function(){
   $("#form2 > input[name=radio3]").val(["ラジオ3"]);
  });


  $("#form2.get-radio").on("click",function(){
   var ret=$("#form2 > input[name=radio3]").val();
   alert(ret);
  });



   $("#form2>.get-text").on("click",function(){
     alert($("#form2>#text3").val());
   });
　　$("#form2>.set-text").on("click",function(){
    $("#form2>#text3").val("中村けんたはフィリピンに詳しいです");
});



   $("#show-content").on("click",function(){
     var html=$("#content li").html();
     var text=$("#content li").text();
     alert(html +"/n"+text);
   });
   $("#set-content").on("click",function(){
    $("#taro3").html("<span style='color:red;'>のび太</span>");
    $("#ziro3").text("<span style='color:blue;'>スネ夫</span>");

   });






   $("#offset").on("click",function(){
   $("#possition > .box").offset({top:50, left:50});
});






    $("#scroll-top").on("click",function(){
    // $(window).scrollTop(0);
    $("html,body").animate({scrollTop:0},"slow");
    $("html,body").animate({scrollleft:0},"slow");

});



   $("#width").on("click",function(){
    $("#size>.box").width(200);
    // $(".box").animate({width:"10%"},"slow");
    var width=$(".box").width();
    var innerWidth=$(".box").innerWidth();
    var outerWidth=$(".box").outerWidth();
    console.log("width ="+ width,
      "innerWidth ="+innerWidth,
      "outerWidth ="+outerWidth);
});
   


    $("#height").on("click",function(){
    $("#size>.box").height(200);
    // $(".box").animate({height:200},100);

});




   $("#add-class").on("click",function(){
    $("#hanako2").addClass("woman");
});

   $("#remove-class").on("click",function(){
    $("#hanako2").removeClass("woman");
});

   $("#toggle-class").on("click",function(){
    $("#hanako2").toggleClass("woman");
    var ret=$("#hanako2").hasClass("woman");
    var msg;
    if(ret){
      msg="花子は女です";
    }else{
      msg="花子は女ではありません";
    }
    alert(msg);
});


  $("#remove-attr").on("click",function(){
    $("#attr2>a").removeAttr("title");
  });
//できてない


  $("#get-attr").on("click",function(){
   alert($("#yahoo").attr("href"));
  });
  $("#set-attr").on("click",function(){
    $("#apple").attr("href","http://www.apple.co.jp")
  })
  //引数が一つの時は設定を行う



  $("#check-value").on("click",function(){
   var checkedradio=$("#form2>input:checked").val();
   var selected=$("#form2>select option:selected").val();
   alert(checkedradio+""+selected);
  });



  $("#inform-filter").on("click",function(){
  $("#form>input:button")
  .css("background-color","teal");
  $("#form>input:checkbox")
  .css("border","lightsteelblue");
  $("#form>input:radio")
  .css("border","orchid");
  $("#form>input:password")
  .css("background-color","brown");
 });



  $("#empty").on("click",function(){
  $("#table td:empty")
  .css("background-color","silver");
  $("#table td:parent")
  .css("background-color","springgreen");
 });
   //


  $("#has").on("click",function(){
  $(".list4>li:has(span)")
  .css("background-color","yellowgreen");
 });
  //




  $("#contains").on("click",function(){
  $(".list4>li:contains('郎')")
  .css("background-color","peru");
 });
//郎を含むものだけ




 $("#not").on("click",function(){
  $("a:not([href$='apple.co.jp'])")
  .css("background-color","fuchsia");
 });
 //





 $("#point").on("click",function(){
  $(".list3>li:eq(2)")
  .css("background-color","aquqmarine");
  $(".list3>li:gt(2)")
  .css("background-color","khaki");
  $(".list3>li:lt(2)")
  .css("background-color","mistyrose");
 });




 $("#alone").on("click",function(){
  $(".list3>li:only-child")
  .css("background-color","deepskyblue");
 });
 //孤独




 $("#nth-child2").on("click",function(){
  $(".list3>li:nth-child(3n)")
  .css("background-color","royalblue");
 });
 //３個おき

 $("#nth-child3").on("click",function(){
  $(".list3>li:nth-child(3n+1)")
  .css("background-color","limegreen");
 });
 //１から３個おき


 $("#evenall").on("click",function(){
  $(".list3>li:even")
  .css("background-color","darkorange");
 });
 //全体で偶数


 $("#oddall").on("click",function(){
  $(".list3>li:odd")
  .css("background-color","hotpink");
 });
//全体で奇数









 $("#even").on("click",function(){
  $(".list0>li:nth-child(even)")
  .css("background-color","coral");
 });

 $("#odd").on("click",function(){
  $(".list0>li:nth-child(odd)")
  .css("background-color","forestgreen");
 });　　



$("#nth-child").on("click",function(){
  $(".list3>li:nth-child(2)")
  .css("background-color","red");
})


$(".list3").on("click",function(){
   $(".list3 >li:last-child").css("background-color","red");
});








　$("#sazaesan").on("click",function(){
	// $("#child h2~p").css("background-color","red");
   // $("input[name=cat]","#cats").css("background-color","red");
   // $("input[name*='cat']").css("backgroundColor","red");
   // $("input[name~='cat']").css("backgroundColor","red");
    // $("input[name^='do']").css("backgroundColor","red");
    // $("input[name^='k']").css("backgroundColor","red");
    // $("input[name$='se']").css("backgroundColor","red");
// $("input[name='catman'][type='text']").css("backgroundColor","red");

});







$("a").on("click",function(){
 $("a[target!='_blank']").css("border","solid","red");	
// 　$("a[target]").css("color","aqua");	
 // $("a[target='_blank']").css("color","pink");
 // $("a[target='_self']").css("color","red");
 // $("a[target='_parent']").css("color","green");
 // $("a[target='_top']").css("color","blue");
});



$("h2").on("click",function(){
	$(this).css("color","red");
});





$("ul").click(function(){
	$(".man").css("color","red");
	$("#taro").css("color","blue");
});

$("#list2").on("click",function(){
  $("#taro,.hanako").css("color","green");
});


$("#universal").on("click",function(){
  $("*").css("color","gold");
});




 $("#add-link").on("click",function(){
 	$("<a></a>",
 		{href:"http://www.apple.com",
 		target:"_blank",
 		"class":"myClass",
 		text:"リンク"
 	}).appendTo("#link");
 });

 $("<div>",{width:100,
 	        height:100,
            css:{backgroundColor:"pink"},
            on:{
    	      mouseover:function(){
    	        $(this).css({backgroundColor:"yellow"});
    	    }
           }
         }).appendTo("#link");
   });





 $("#append").on("click",function(){
 	console.log(document.getElementById("family"));
 	console.log($("#family"));
 	$("<li>三郎</li>").appendTo("#family");
 });
 $("#color").on("click",function(){
 	$("li")
 	.css("color","red")
 	.css("")
 	.css("")
 });

