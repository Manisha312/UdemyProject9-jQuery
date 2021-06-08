// // $() or jquery()
// $(document).ready(function(){
//     $("h1").css("color","red");
// }); //this is done when we have included jquery script in the head section of the file



// // 1. selecting Elements with jQuery
// $("h1"); //selecting h1
// $("h1.title") ; //Select h1 that has id title
// $("#header h1");  //Select h1 having id header
// $("button");  //selection all the buttons

// // console.log($("h1").css("color","green"));  //Manipulating css property

// //2.Manipulating Styles with jQuery
// $("h1").addClass("big-title margin-50");   //adding css class(big-title , margin-50)
// $("h1").removeClass("big-title");   //removing css class 



// //3.Manipulating Text with jQuery 
// $("h1").text("Bye");
// $("button").text("Don't click Me!");
// $("button").HTML("<em>Hey</em>");

//4. Manipulating Attributes using Jquery
// console.log($("img").attr("src")); //getting the value of an attribute
// $("a").attr("href","https://wwww.yahoo.com"); //setting the href attribute to yahoo.com

// //5.Adding Event listeners with jQuery
// $("h1").click(function(){
//     $("h1").css("color","purple");
// });

//a.adding event using js
// for(var i=0; i<5; i++){
//     document.querySelectorAll("button")[i].addEventListener("click",function(){
//         document.querySelector("h1").style.color="purple";

//     });
// }

//b.Adding event using jQs
// $("button").click(function(){
//     $("h1").css("color","purple");
// });


//c.Inspecting input using Jq
// $("document").keypress(function(event){
//     console.log(event.key);
// });

//d.Inspecting input using Jq and changing the text
// $(document).keypress(function(event){
//     $("h1").text(event.key);
// });


//e.Adding event mouseover
// $("h1").on("mouseover",function() {
//     $("h1").css("color","purple");
// });

//6.Adding and removing element with jQuery
// $("h1").before("<button>New</button>");
// $("h1").after("<button>New</button>");
// $("h1").prepend("<button>New</button>"); //Add html elemt into the item selected just after the opening tag
// $("h1").append("<button>New</button>");

//To remove
// $("button").remove();

//7.Animation with JQ
$("button").on ("click" , function() {
    $("h1").slideUp().slideDown().animate({opacity:0.5});
}); 